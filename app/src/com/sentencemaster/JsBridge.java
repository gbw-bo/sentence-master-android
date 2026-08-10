package com.sentencemaster;

import android.app.Activity;
import android.content.Intent;
import android.net.Uri;
import android.os.Handler;
import android.os.Looper;
import android.webkit.JavascriptInterface;
import android.webkit.WebView;
import android.widget.Toast;

import org.json.JSONObject;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.nio.charset.StandardCharsets;

/**
 * 暴露给 Web 层的 window.SMBridge 接口。所有 window.api 的调用最终落到这里，
 * 用应用私有目录下的 sm-data.json 做本地存储，数据结构与 Windows 端完全一致。
 */
public class JsBridge {
    private final MainActivity activity;
    private final WebView webView;
    private static final String DATA_FILE = "sm-data.json";
    // 与 Windows 端 main.js 的 DEFAULT_DATA 保持一致（含 writeHistory）
    private static final String SEED = "{\"version\":1,"
            + "\"settings\":{\"dailyGoal\":1,\"autoLaunch\":true,\"remindEnabled\":true,"
            + "\"remindTime\":\"22:00\",\"minimizeToTray\":true,\"showOnLaunch\":true,"
            + "\"theme\":\"system\",\"transparency\":100},"
            + "\"progress\":{},\"history\":[],\"writings\":{},"
            + "\"streak\":{\"current\":0,\"best\":0,\"lastDate\":\"\"},"
            + "\"todayPlan\":{\"date\":\"\",\"ids\":[],\"doneIds\":[]},\"writeHistory\":{}}";
    static final String VER = "1.4.6";

    JsBridge(MainActivity activity, WebView webView) {
        this.activity = activity;
        this.webView = webView;
    }

    private File dataFile() {
        return new File(activity.getFilesDir(), DATA_FILE);
    }

    @JavascriptInterface
    public String readData() {
        File f = dataFile();
        try {
            if (f.exists()) {
                String raw = readFile(f);
                JSONObject obj = new JSONObject(raw);
                return mergeDefaults(obj).toString();
            }
        } catch (Exception ignore) {
        }
        try {
            return mergeDefaults(new JSONObject()).toString();
        } catch (Exception e) {
            return "{}";
        }
    }

    @JavascriptInterface
    public void writeData(String json) {
        try {
            // 校验是合法 JSON 再写入，避免损坏数据
            new JSONObject(json);
            writeFile(dataFile(), json);
        } catch (Exception ignore) {
        }
    }

    @JavascriptInterface
    public String version() {
        return VER;
    }

    @JavascriptInterface
    public void applyTheme(String mode) {
        // Android 由 Web 层自行控制明/暗主题，无需原生处理
    }

    @JavascriptInterface
    public void notify(String title, String body) {
        final String msg = (title == null ? "" : title) + (body == null ? "" : " " + body);
        new Handler(Looper.getMainLooper()).post(() ->
                Toast.makeText(activity, msg, Toast.LENGTH_LONG).show());
    }

    @JavascriptInterface
    public void setAutoLaunch(boolean b) {
        // Android 端暂不支持开机自启
    }

    @JavascriptInterface
    public String dataDir() {
        return dataFile().getAbsolutePath();
    }

    @JavascriptInterface
    public void openExternal(String url) {
        try {
            Intent i = new Intent(Intent.ACTION_VIEW, Uri.parse(url));
            activity.startActivity(i);
        } catch (Exception ignore) {
        }
    }

    /** 请求提醒所需运行时权限（通知 / 日历） */
    @JavascriptInterface
    public void requestReminderPermissions() {
        activity.runOnUiThread(() -> activity.requestReminderPermissions());
    }

    /** 设置打卡提醒：{enabled, time:"HH:MM", channel:"notification"|"calendar"|"both"} */
    @JavascriptInterface
    public void setReminder(String json) {
        activity.runOnUiThread(() -> activity.setReminder(json));
    }

    /** 取消打卡提醒 */
    @JavascriptInterface
    public void cancelReminder() {
        activity.runOnUiThread(() -> activity.cancelReminder());
    }

    /** 导出：读取当前数据，由 Activity 弹出系统“保存为”选择器 */
    @JavascriptInterface
    public void exportData() {
        final String json = readData();
        activity.runOnUiThread(() -> activity.startExport(json));
    }

    /** 导入流程：由 Activity 弹出系统“打开”选择器并读入文本，再调用本方法落盘 */
    @JavascriptInterface
    public void importDataFlow() {
        activity.runOnUiThread(() -> activity.startImport());
    }

    /** 校验 + 写入导入内容，返回 "ok" 或错误信息 */
    String applyImport(String text) {
        try {
            JSONObject o = new JSONObject(text);
            if (!o.has("settings") && !o.has("progress") && !o.has("writings")) {
                return "文件不是句式大师的备份";
            }
            writeData(text);
            return "ok";
        } catch (Exception e) {
            return "解析失败：" + e.getMessage();
        }
    }

    /** 读取导入文本并落盘，返回结果 JSON 字符串（供 evaluateJavascript 回传） */
    String handleImportUri(Uri uri) {
        try {
            String text = readUriText(uri);
            String res = applyImport(text);
            if ("ok".equals(res)) return "{\"ok\":true}";
            return "{\"ok\":false,\"msg\":" + JSONObject.quote(res) + "}";
        } catch (Exception e) {
            return "{\"ok\":false,\"msg\":" + JSONObject.quote("读取文件失败：" + e.getMessage()) + "}";
        }
    }

    /** 写出导出内容到系统选择器返回的 Uri，返回结果 JSON 字符串 */
    String handleExportUri(Uri uri, String json) {
        try {
            OutputStream os = activity.getContentResolver().openOutputStream(uri);
            os.write(json.getBytes(StandardCharsets.UTF_8));
            os.close();
            String name = uri.getLastPathSegment();
            return "{\"ok\":true,\"path\":" + JSONObject.quote(name == null ? "" : name) + "}";
        } catch (Exception e) {
            return "{\"ok\":false,\"msg\":" + JSONObject.quote("保存失败：" + e.getMessage()) + "}";
        }
    }

    void eval(String js) {
        new Handler(Looper.getMainLooper()).post(() -> webView.evaluateJavascript(js, null));
    }

    // ---------- 内部工具 ----------
    private JSONObject mergeDefaults(JSONObject obj) {
        try {
            JSONObject seed = new JSONObject(SEED);
            JSONObject merged = new JSONObject(seed.toString());
            java.util.Iterator<String> it = obj.keys();
            while (it.hasNext()) {
                String k = it.next();
                merged.put(k, obj.get(k));
            }
            if (obj.has("settings")) {
                JSONObject ds = seed.getJSONObject("settings");
                JSONObject os = obj.getJSONObject("settings");
                JSONObject ms = new JSONObject(ds.toString());
                java.util.Iterator<String> sit = os.keys();
                while (sit.hasNext()) {
                    String sk = sit.next();
                    ms.put(sk, os.get(sk));
                }
                merged.put("settings", ms);
            }
            if (!merged.has("writeHistory")) merged.put("writeHistory", new JSONObject());
            return merged;
        } catch (Exception e) {
            return obj;
        }
    }

    private String readFile(File f) throws Exception {
        FileInputStream in = new FileInputStream(f);
        BufferedReader r = new BufferedReader(new InputStreamReader(in, StandardCharsets.UTF_8));
        StringBuilder sb = new StringBuilder();
        String line;
        while ((line = r.readLine()) != null) sb.append(line);
        r.close();
        return sb.toString();
    }

    private void writeFile(File f, String text) throws Exception {
        FileOutputStream out = new FileOutputStream(f);
        out.write(text.getBytes(StandardCharsets.UTF_8));
        out.close();
    }

    private String readUriText(Uri uri) throws Exception {
        InputStream in = activity.getContentResolver().openInputStream(uri);
        BufferedReader r = new BufferedReader(new InputStreamReader(in, StandardCharsets.UTF_8));
        StringBuilder sb = new StringBuilder();
        String line;
        while ((line = r.readLine()) != null) sb.append(line);
        r.close();
        return sb.toString();
    }
}
