#!/usr/bin/env bash
# 用裸 Android SDK 工具（aapt2 / d8 / zipalign / apksigner）在 Linux (CI) 上构建并签名 APK。
# 不依赖 Gradle。工具链由 CI 通过 sdkmanager 安装到 $ANDROID_SDK_ROOT。
set -euo pipefail

SDK="${ANDROID_SDK_ROOT:?ANDROID_SDK_ROOT not set}"
BT="$SDK/build-tools/36.0.0"
PLATFORM="$SDK/platforms/android-36"
ANDROID_JAR="$PLATFORM/android.jar"
AAPT2="$BT/aapt2"
D8="$BT/d8"
ZIPALIGN="$BT/zipalign"
APKSIGNER="$BT/apksigner"
KEYTOOL="${JAVA_HOME:?JAVA_HOME not set}/bin/keytool"
JAVAC="${JAVA_HOME}/bin/javac"

ROOT="$(cd "$(dirname "$0")" && pwd)"
APP="$ROOT/app"
BUILD="$ROOT/build"
mkdir -p "$BUILD"

APP_VER="${APP_VER:-1.4.3}"
ALIAS=sm
STOREPASS=SentenceMaster2026
KEYSTORE="$BUILD/release.keystore"
OUT="$ROOT/SentenceMaster-${APP_VER}.apk"

echo "== [1/8] compile resources =="
"$AAPT2" compile --dir "$APP/res" -o "$BUILD/res.zip"

echo "== [2/8] link =="
"$AAPT2" link -o "$BUILD/app-unsigned.apk" -I "$ANDROID_JAR" \
  --manifest "$APP/AndroidManifest.xml" \
  -A "$APP/assets" --java "$BUILD/gen" \
  "$BUILD/res.zip"

echo "== [3/8] javac (src + generated R.java) =="
rm -rf "$BUILD/classes"; mkdir -p "$BUILD/classes"
SRCS=$(find "$APP/src" -name '*.java')
GENSRCS=$(find "$BUILD/gen" -name '*.java')
"$JAVAC" -encoding UTF-8 -source 17 -target 17 -cp "$ANDROID_JAR" \
  -d "$BUILD/classes" $SRCS $GENSRCS

echo "== [4/8] d8 -> classes.dex =="
mkdir -p "$BUILD/dex"
CLS=$(find "$BUILD/classes" -name '*.class')
"$D8" --release --min-api 24 --lib "$ANDROID_JAR" --output "$BUILD/dex" $CLS

echo "== [5/8] inject classes.dex into apk =="
python3 - "$BUILD/app-unsigned.apk" "$BUILD/dex/classes.dex" "$BUILD/app-nodx.apk" <<'PY'
import sys, zipfile, shutil, os
unsigned, dex, out = sys.argv[1], sys.argv[2], sys.argv[3]
tmp = os.path.join(os.path.dirname(out), "_unzip")
if os.path.exists(tmp): shutil.rmtree(tmp)
os.makedirs(tmp)
with zipfile.ZipFile(unsigned) as z:
    z.extractall(tmp)
shutil.copy(dex, os.path.join(tmp, "classes.dex"))
with zipfile.ZipFile(out, "w", zipfile.ZIP_DEFLATED) as z:
    for root, _, files in os.walk(tmp):
        for f in files:
            fp = os.path.join(root, f)
            z.write(fp, os.path.relpath(fp, tmp))
shutil.rmtree(tmp)
PY

echo "== [6/8] zipalign =="
"$ZIPALIGN" -p 4 "$BUILD/app-nodx.apk" "$BUILD/app-aligned.apk"

echo "== [7/8] keystore =="
if [ ! -f "$KEYSTORE" ]; then
  "$KEYTOOL" -genkeypair -v -keystore "$KEYSTORE" -alias "$ALIAS" \
    -keyalg RSA -keysize 2048 -validity 10000 \
    -storepass "$STOREPASS" -keypass "$STOREPASS" \
    -dname "CN=SentenceMaster, OU=Dev, O=SentenceMaster, L=CN, S=CN, C=CN"
fi

echo "== [8/8] sign =="
rm -f "$OUT"
"$APKSIGNER" sign --ks "$KEYSTORE" --ks-key-alias "$ALIAS" \
  --ks-pass pass:"$STOREPASS" --key-pass pass:"$STOREPASS" \
  --out "$OUT" "$BUILD/app-aligned.apk"

echo "APK -> $OUT  size=$(stat -c%s "$OUT")"
