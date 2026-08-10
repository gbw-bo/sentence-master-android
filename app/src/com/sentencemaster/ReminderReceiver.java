package com.sentencemaster;

import android.app.Notification;
import android.app.NotificationChannel;
import android.app.NotificationManager;
import android.app.PendingIntent;
import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.os.Build;

/** 每日打卡提醒：由 AlarmManager 定时触发，弹出本地通知。 */
public class ReminderReceiver extends BroadcastReceiver {
    public static final String CHANNEL_ID = "reminder";
    public static final int NOTIFY_ID = 1001;

    @Override
    public void onReceive(Context context, Intent intent) {
        showNotification(context);
    }

    static void showNotification(Context context) {
        NotificationManager nm =
                (NotificationManager) context.getSystemService(Context.NOTIFICATION_SERVICE);
        if (nm == null) return;

        // 点击通知打开应用
        Intent open = new Intent(context, MainActivity.class);
        open.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK | Intent.FLAG_ACTIVITY_CLEAR_TOP);
        PendingIntent pi = PendingIntent.getActivity(context, 0, open,
                PendingIntent.FLAG_UPDATE_CURRENT | PendingIntent.FLAG_IMMUTABLE);

        Notification.Builder b;
        if (Build.VERSION.SDK_INT >= 26) {
            NotificationChannel ch = new NotificationChannel(CHANNEL_ID, "打卡提醒",
                    NotificationManager.IMPORTANCE_HIGH);
            ch.setDescription("每天定时提醒你完成句式学习打卡");
            nm.createNotificationChannel(ch);
            b = new Notification.Builder(context, CHANNEL_ID);
        } else {
            b = new Notification.Builder(context);
        }
        b.setSmallIcon(R.drawable.ic_launcher_foreground)
                .setContentTitle("句式大师 · 打卡提醒")
                .setContentText("今天的学习目标完成了吗？打开 App 学一个句式吧 📘")
                .setAutoCancel(true)
                .setContentIntent(pi)
                .setPriority(Notification.PRIORITY_HIGH);

        nm.notify(NOTIFY_ID, b.build());
    }
}
