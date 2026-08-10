package com.sentencemaster;

import android.app.Activity;
import android.content.Intent;
import android.content.res.Configuration;
import android.os.Bundle;
import android.os.Handler;
import android.os.Looper;

public class SplashActivity extends Activity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        lockOrientationIfPhone();
        setContentView(R.layout.activity_splash);

        // 短暂展示品牌启动页后进入主界面
        new Handler(Looper.getMainLooper()).postDelayed(() -> {
            startActivity(new Intent(this, MainActivity.class));
            finish();
        }, 1200);
    }

    void lockOrientationIfPhone() {
        int sw = getResources().getConfiguration().smallestScreenWidthDp;
        if (sw < 600) {
            setRequestedOrientation(android.content.pm.ActivityInfo.SCREEN_ORIENTATION_PORTRAIT);
        }
    }

    @Override
    public void onConfigurationChanged(Configuration newConfig) {
        super.onConfigurationChanged(newConfig);
        lockOrientationIfPhone();
    }
}
