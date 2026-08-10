# 句式大师 / SentenceMaster (Android)

「句式大师」Android 版 —— 与 Windows 端（Electron 应用）**操作逻辑完全一致**的英语学习 App。

## 特点
- **WebView 复用**：直接用原生 Android 壳（Splash + WebView）加载 Windows 端同一套 `app.js` / `styles.css` / `data/*.js`，因此交互、功能、界面与 Windows 版 100% 对齐。
- **启动页（Splash）**：中央大号 logo「句」+「句式大师」字样。
- **底部导航栏**：5 个入口（今日学习 / 智能复习 / 句式库 / 作文模板 / 我的），顺序与 Windows 端一致、大小一致无主次。
- **本地存储 + 导入/导出**：学习数据存于设备本地，支持导出/导入；**数据格式与 Windows 端互通**，Windows 端导出的备份文件可直接在手机端导入。
- **轻量**：APK 不含任何内嵌引擎，仅用系统 WebView，安装包体积小。
- **多端适配**：
  - 手机端：仅竖屏，顶部品牌栏 + 底部导航。
  - 平板端：支持竖屏/横屏；横屏时还原 Windows 端布局（顶部栏 + 左侧栏）。

## 工程结构
```
app/
  AndroidManifest.xml        # 包名 com.sentencemaster
  res/                       # 资源（布局/图标/主题）
  src/com/sentencemaster/    # Java 原生壳：SplashActivity / MainActivity / JsBridge
  assets/www/                # 复用的 Web 层（app.js / bridge.js / styles.css / data/*.js）
build_apk_linux.sh           # 裸 SDK 工具链构建脚本（CI 使用）
build_apk.py                 # Windows 本地构建脚本（参考）
.github/workflows/build.yml  # GitHub Actions：自动构建并发布 APK
```

## 构建与发布
CI 通过 GitHub Actions 自动完成：推送 `main` 分支会构建 APK 并上传为 Artifact；推送 `v*` tag 会构建并发布到 GitHub Release。

本地构建（需自备 JDK17 + Android SDK build-tools;34.0.0 + platforms;android-34）：
```bash
export ANDROID_SDK_ROOT=/path/to/android-sdk
export JAVA_HOME=/path/to/jdk17
bash build_apk_linux.sh
# 产物：SentenceMaster-<version>.apk
```

## 数据兼容说明
`JsBridge` 内嵌与 Windows 端一致的默认数据种子；`writeData` 按 `JSON.stringify(DATA)` 原样落盘，因此 Windows 端导出的 `.json` 备份可在 Android 端直接导入，反之亦然。
