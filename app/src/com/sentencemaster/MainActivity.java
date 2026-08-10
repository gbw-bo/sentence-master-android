package com.sentencemaster;

import android.Manifest;
import android.app.Activity;
import android.app.AlarmManager;
import android.app.PendingIntent;
import android.content.ContentValues;
import android.content.Intent;
import android.content.SharedPreferences;
import android.content.pm.PackageManager;
import android.content.res.Configuration;
import android.database.Cursor;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.provider.CalendarContract;
import android.view.View;
import android.webkit.WebChromeClient;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.webkit.ValueCallback;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.Locale;
import java.util.TimeZone;

import org.json.JSONObject;

public class MainActivity extends Activity {
    private WebView webView;
    private JsBridge bridge;
    private static final int REQ_EXPORT = 1001;
    private static final int REQ_IMPORT = 1002;
    private static final int REQ_REMINDER_PERMS = 1003;
    private String pendingExportJson = "";
    private static final String PREFS = "sm_prefs";
    private static final String KEY_CAL_EVENT = "cal_event_id";

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        lockOrientationIfPhone();
        setContentView(R.layout.activity_main);

        webView = findViewById(R.id.webview);
        WebSettings ws = webView.getSettings();
        ws.setJavaScriptEnabled(true);
        ws.setDomStorageEnabled(true);
        ws.setAllowFileAccess(true);
        ws.setAllowFileAccessFromFileURLs(true);
        ws.setAllowUniversalAccessFromFileURLs(true);
        ws.setMixedContentMode(WebSettings.MIXED_CONTENT_ALWAYS_ALLOW);
        ws.setCacheMode(WebSettings.LOAD_NO_CACHE);
        ws.setMediaPlaybackRequiresUserGesture(false);

        bridge = new JsBridge(this, webView);
        webView.addJavascriptInterface(bridge, "SMBridge");
        webView.setWebViewClient(new WebViewClient() {
            @Override
            public void onReceivedError(WebView view, int errorCode, String description, String failingUrl) {
                super.onReceivedError(view, errorCode, description, failingUrl);
            }
        });
        webView.setWebChromeClient(new WebChromeClient());

        webView.loadUrl("file:///android_asset/www/index.html");
    }

    /** 手机锁定竖屏；平板（smallestWidth>=600dp）允许横竖屏自由切换 */
    void lockOrientationIfPhone() {
        int sw = getResources().getConfiguration().smallestScreenWidthDp;
        if (sw < 600) {
            setRequestedOrientation(android.content.pm.ActivityInfo.SCREEN_ORIENTATION_PORTRAIT);
        }
    }

    @Override
    public void onConfigurationChanged(Configuration newConfig) {
        super.onConfigurationChanged(newConfig);
        // 旋转后再次校准（防止手机被强制横屏）
        lockOrientationIfPhone();
    }

    void startExport(String json) {
        pendingExportJson = json == null ? "" : json;
        Intent i = new Intent(Intent.ACTION_CREATE_DOCUMENT);
        i.addCategory(Intent.CATEGORY_OPENABLE);
        i.setType("application/json");
        i.putExtra(Intent.EXTRA_TITLE, "句式大师-备份-" + dateStamp() + ".json");
        try {
            startActivityForResult(i, REQ_EXPORT);
        } catch (Exception e) {
            bridge.eval("window.__smResolveExport("
                    + JSONObject.quote("{\"ok\":false,\"msg\":\"无法打开保存对话框\"}") + ")");
        }
    }

    void startImport() {
        Intent i = new Intent(Intent.ACTION_OPEN_DOCUMENT);
        i.addCategory(Intent.CATEGORY_OPENABLE);
        i.setType("*/*");
        try {
            startActivityForResult(i, REQ_IMPORT);
        } catch (Exception e) {
            bridge.eval("window.__smResolveImport("
                    + JSONObject.quote("{\"ok\":false,\"msg\":\"无法打开选择文件\"}") + ")");
        }
    }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
        if (requestCode == REQ_EXPORT) {
            if (resultCode == RESULT_OK && data != null && data.getData() != null) {
                String r = bridge.handleExportUri(data.getData(), pendingExportJson);
                bridge.eval("window.__smResolveExport(" + r + ")");
            } else {
                bridge.eval("window.__smResolveExport("
                        + JSONObject.quote("{\"ok\":false,\"msg\":\"已取消导出\"}") + ")");
            }
        } else if (requestCode == REQ_IMPORT) {
            if (resultCode == RESULT_OK && data != null && data.getData() != null) {
                String r = bridge.handleImportUri(data.getData());
                bridge.eval("window.__smResolveImport(" + r + ")");
            } else {
                bridge.eval("window.__smResolveImport("
                        + JSONObject.quote("{\"ok\":false,\"msg\":\"已取消导入\"}") + ")");
            }
        }
    }

    /* ================= 打卡提醒：通知 + 日历 ================= */

    /** 请求提醒所需运行时权限（通知 Android 13+；日历 Android 9+ 危险权限） */
    void requestReminderPermissions() {
        String[] need;
        if (Build.VERSION.SDK_INT >= 33) {
            need = new String[]{Manifest.permission.POST_NOTIFICATIONS,
                    Manifest.permission.WRITE_CALENDAR, Manifest.permission.READ_CALENDAR};
        } else {
            need = new String[]{Manifest.permission.WRITE_CALENDAR, Manifest.permission.READ_CALENDAR};
        }
        boolean allGranted = true;
        for (String p : need) {
            if (checkSelfPermission(p) != PackageManager.PERMISSION_GRANTED) { allGranted = false; break; }
        }
        if (allGranted) {
            evalJs("window.__smPermResult && window.__smPermResult({ok:true})");
        } else {
            requestPermissions(need, REQ_REMINDER_PERMS);
        }
    }

    @Override
    public void onRequestPermissionsResult(int requestCode, String[] permissions, int[] grantResults) {
        super.onRequestPermissionsResult(requestCode, permissions, grantResults);
        if (requestCode == REQ_REMINDER_PERMS) {
            boolean ok = grantResults != null && grantResults.length > 0;
            if (ok) {
                for (int g : grantResults) if (g != PackageManager.PERMISSION_GRANTED) { ok = false; break; }
            }
            evalJs("window.__smPermResult && window.__smPermResult({ok:" + ok + "})");
        }
    }

    /** 由 JsBridge 调用：设置打卡提醒。json = {enabled, time:"HH:MM", channel:"notification"|"calendar"|"both"} */
    void setReminder(String json) {
        try {
            // 先取消旧的
            cancelNotificationAlarm();
            deleteCalendarEvent();
            JSONObject o = new JSONObject(json == null ? "{}" : json);
            boolean enabled = o.optBoolean("enabled", false);
            if (!enabled) {
                evalJs("window.__smReminderResult && window.__smReminderResult({ok:true,msg:\"提醒已关闭\"})");
                return;
            }
            String time = o.optString("time", "20:00");
            String channel = o.optString("channel", "notification");
            int h = 20, m = 0;
            try {
                String[] hm = time.split(":");
                h = Integer.parseInt(hm[0].trim());
                m = Integer.parseInt(hm[1].trim());
            } catch (Exception ignore) {
            }
            boolean needNoti = channel.equals("notification") || channel.equals("both");
            boolean needCal = channel.equals("calendar") || channel.equals("both");

            if (needNoti) {
                if (Build.VERSION.SDK_INT >= 33
                        && checkSelfPermission(Manifest.permission.POST_NOTIFICATIONS)
                        != PackageManager.PERMISSION_GRANTED) {
                    evalJs("window.__smReminderResult && window.__smReminderResult({ok:false,msg:\"未授予通知权限，请在系统设置中允许通知\"})");
                    return;
                }
                scheduleNotificationAlarm(h, m);
            }
            if (needCal) {
                if (checkSelfPermission(Manifest.permission.WRITE_CALENDAR)
                        != PackageManager.PERMISSION_GRANTED) {
                    evalJs("window.__smReminderResult && window.__smReminderResult({ok:false,msg:\"未授予日历权限，无法写入日历\"})");
                    return;
                }
                String err = insertCalendarEvent(h, m);
                if (err != null) {
                    evalJs("window.__smReminderResult && window.__smReminderResult({ok:false,msg:" + JSONObject.quote(err) + "})");
                    return;
                }
            }
            evalJs("window.__smReminderResult && window.__smReminderResult({ok:true,msg:\"打卡提醒已设置：每天 " + time + "\"})");
        } catch (Exception e) {
            evalJs("window.__smReminderResult && window.__smReminderResult({ok:false,msg:" + JSONObject.quote("设置提醒失败：" + e.getMessage()) + "})");
        }
    }

    void cancelReminder() {
        try {
            cancelNotificationAlarm();
            deleteCalendarEvent();
            evalJs("window.__smReminderResult && window.__smReminderResult({ok:true,msg:\"提醒已关闭\"})");
        } catch (Exception e) {
            evalJs("window.__smReminderResult && window.__smReminderResult({ok:false,msg:\"取消失败\"})");
        }
    }

    /** AlarmManager 每日重复闹钟 -> ReminderReceiver 弹通知 */
    private void scheduleNotificationAlarm(int h, int m) {
        Intent i = new Intent(this, ReminderReceiver.class);
        PendingIntent pi = PendingIntent.getBroadcast(this, ReminderReceiver.NOTIFY_ID, i,
                PendingIntent.FLAG_UPDATE_CURRENT | PendingIntent.FLAG_IMMUTABLE);
        Calendar cal = Calendar.getInstance();
        cal.set(Calendar.HOUR_OF_DAY, h);
        cal.set(Calendar.MINUTE, m);
        cal.set(Calendar.SECOND, 0);
        cal.set(Calendar.MILLISECOND, 0);
        if (cal.getTimeInMillis() <= System.currentTimeMillis()) {
            cal.add(Calendar.DAY_OF_YEAR, 1);
        }
        AlarmManager am = (AlarmManager) getSystemService(ALARM_SERVICE);
        if (am != null) {
            am.setRepeating(AlarmManager.RTC_WAKEUP, cal.getTimeInMillis(),
                    AlarmManager.INTERVAL_DAY, pi);
        }
    }

    private void cancelNotificationAlarm() {
        Intent i = new Intent(this, ReminderReceiver.class);
        PendingIntent pi = PendingIntent.getBroadcast(this, ReminderReceiver.NOTIFY_ID, i,
                PendingIntent.FLAG_UPDATE_CURRENT | PendingIntent.FLAG_IMMUTABLE);
        AlarmManager am = (AlarmManager) getSystemService(ALARM_SERVICE);
        if (am != null) am.cancel(pi);
    }

    /** 往系统日历写一条「每天重复」的打卡提醒，成功返回 null，失败返回错误信息 */
    private String insertCalendarEvent(int h, int m) {
        try {
            long calId = findDefaultCalendarId();
            if (calId < 0) return "未找到可用日历，请先在系统日历中添加账号";
            Calendar start = Calendar.getInstance();
            start.set(Calendar.HOUR_OF_DAY, h);
            start.set(Calendar.MINUTE, m);
            start.set(Calendar.SECOND, 0);
            start.set(Calendar.MILLISECOND, 0);
            if (start.getTimeInMillis() <= System.currentTimeMillis()) {
                start.add(Calendar.DAY_OF_YEAR, 1);
            }
            ContentValues v = new ContentValues();
            v.put(CalendarContract.Events.CALENDAR_ID, calId);
            v.put(CalendarContract.Events.TITLE, "句式大师 · 打卡提醒");
            v.put(CalendarContract.Events.DESCRIPTION, "今天的学习目标完成了吗？打开句式大师学一个句式吧");
            v.put(CalendarContract.Events.DTSTART, start.getTimeInMillis());
            v.put(CalendarContract.Events.DTEND, start.getTimeInMillis() + 15 * 60 * 1000L);
            v.put(CalendarContract.Events.EVENT_TIMEZONE, TimeZone.getDefault().getID());
            v.put(CalendarContract.Events.RRULE, "FREQ=DAILY");
            Uri uri = getContentResolver().insert(CalendarContract.Events.CONTENT_URI, v);
            if (uri == null) return "写入日历失败";
            String id = uri.getLastPathSegment();
            getSharedPreferences(PREFS, MODE_PRIVATE).edit().putString(KEY_CAL_EVENT, id).apply();
            return null;
        } catch (SecurityException e) {
            return "没有日历权限";
        } catch (Exception e) {
            return "写入日历失败：" + e.getMessage();
        }
    }

    private long findDefaultCalendarId() {
        String[] proj = new String[]{CalendarContract.Calendars._ID};
        Cursor c = getContentResolver().query(CalendarContract.Calendars.CONTENT_URI,
                proj, null, null, null);
        if (c != null) {
            try {
                if (c.moveToFirst()) return c.getLong(0);
            } finally {
                c.close();
            }
        }
        return -1;
    }

    private void deleteCalendarEvent() {
        try {
            SharedPreferences sp = getSharedPreferences(PREFS, MODE_PRIVATE);
            String id = sp.getString(KEY_CAL_EVENT, "");
            if (id.isEmpty()) return;
            getContentResolver().delete(CalendarContract.Events.CONTENT_URI,
                    CalendarContract.Events._ID + "=?", new String[]{id});
            sp.edit().remove(KEY_CAL_EVENT).apply();
        } catch (Exception ignore) {
        }
    }

    private void evalJs(String js) {
        if (webView != null) {
            webView.post(() -> webView.evaluateJavascript(js, null));
        }
    }

    @Override
    public void onBackPressed() {
        // 优先交给 Web 层：子页面（设置/更新/历史）时逐级返回，主页时关闭应用
        if (webView != null) {
            webView.evaluateJavascript("window.__smBack ? window.__smBack() : false", value -> {
                if (!Boolean.parseBoolean(value)) superOnBack();
            });
        } else {
            super.onBackPressed();
        }
    }

    private void superOnBack() {
        super.onBackPressed();
    }

    private String dateStamp() {
        return new SimpleDateFormat("yyyyMMdd-HHmm", Locale.US).format(new Date());
    }
}
