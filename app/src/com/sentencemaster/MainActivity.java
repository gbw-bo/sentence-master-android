package com.sentencemaster;

import android.app.Activity;
import android.content.Intent;
import android.content.res.Configuration;
import android.net.Uri;
import android.os.Bundle;
import android.view.View;
import android.webkit.WebChromeClient;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.webkit.ValueCallback;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Locale;

public class MainActivity extends Activity {
    private WebView webView;
    private JsBridge bridge;
    private static final int REQ_EXPORT = 1001;
    private static final int REQ_IMPORT = 1002;
    private String pendingExportJson = "";

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
                    + org.json.JSONObject.quote("{\"ok\":false,\"msg\":\"无法打开保存对话框\"}") + ")");
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
                    + org.json.JSONObject.quote("{\"ok\":false,\"msg\":\"无法打开选择文件\"}") + ")");
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
                        + org.json.JSONObject.quote("{\"ok\":false,\"msg\":\"已取消导出\"}") + ")");
            }
        } else if (requestCode == REQ_IMPORT) {
            if (resultCode == RESULT_OK && data != null && data.getData() != null) {
                String r = bridge.handleImportUri(data.getData());
                bridge.eval("window.__smResolveImport(" + r + ")");
            } else {
                bridge.eval("window.__smResolveImport("
                        + org.json.JSONObject.quote("{\"ok\":false,\"msg\":\"已取消导入\"}") + ")");
            }
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
