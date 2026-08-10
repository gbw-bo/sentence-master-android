#!/usr/bin/env python3
"""用裸 Android SDK 工具（aapt2 / d8 / zipalign / apksigner）构建并签名 APK。
不依赖 Gradle。工具链位于 /d/android-build。"""
import os, sys, shutil, subprocess, zipfile

ROOT = "/d/SentenceMasterAndroid"
APP = os.path.join(ROOT, "app")
SDK = "/d/android-build/android-sdk"
JDK = "/d/android-build/jdk"
BT = os.path.join(SDK, "build-tools", "34.0.0")
PLATFORM_JAR = os.path.join(SDK, "platforms", "android-34", "android.jar")
AAPT2 = os.path.join(BT, "aapt2.exe")
D8 = os.path.join(BT, "d8.bat")
ZIPALIGN = os.path.join(BT, "zipalign.exe")
APKSIGNER = os.path.join(BT, "apksigner.bat")
JAVA = os.path.join(JDK, "bin", "java.exe")
KEYTOOL = os.path.join(JDK, "bin", "keytool.exe")
BUILD = os.path.join(APP, "build")
KEYSTORE = os.path.join(BUILD, "release.keystore")
ALIAS = "sm"
STOREPASS = "SentenceMaster2026"
APP_VER = "1.4.3"

def log(*a):
    print("[build]", " ".join(str(x) for x in a), flush=True)

def run(cmd):
    log("RUN:", cmd)
    r = subprocess.run(cmd, shell=True)
    if r.returncode != 0:
        log("FAILED rc=", r.returncode)
        sys.exit(1)

def main():
    os.makedirs(BUILD, exist_ok=True)
    # 1. aapt2 compile
    res_zip = os.path.join(BUILD, "res.zip")
    run(f'"{AAPT2}" compile --dir "{os.path.join(APP, "res")}" -o "{res_zip}"')
    # 2. aapt2 link
    unsigned = os.path.join(BUILD, "app-unsigned.apk")
    gen = os.path.join(BUILD, "gen")
    shutil.rmtree(gen, ignore_errors=True)
    os.makedirs(gen, exist_ok=True)
    run(f'"{AAPT2}" link -o "{unsigned}" -I "{PLATFORM_JAR}" '
        f'--manifest "{os.path.join(APP, "AndroidManifest.xml")}" '
        f'-A "{os.path.join(APP, "assets")}" --java "{gen}" '
        f'"{res_zip}"')
    # 3. javac
    classes = os.path.join(BUILD, "classes")
    shutil.rmtree(classes, ignore_errors=True)
    os.makedirs(classes, exist_ok=True)
    src_dir = os.path.join(APP, "src")
    srcs = []
    for root, _, files in os.walk(src_dir):
        for f in files:
            if f.endswith(".java"):
                srcs.append(os.path.join(root, f))
    gen_srcs = []
    for root, _, files in os.walk(gen):
        for f in files:
            if f.endswith(".java"):
                gen_srcs.append(os.path.join(root, f))
    run(f'"{JAVA}" -encoding UTF-8 -source 17 -target 17 -cp "{PLATFORM_JAR}" '
        f'-d "{classes}" ' + " ".join(f'"{s}"' for s in srcs + gen_srcs))
    # 4. d8 -> dex
    dex = os.path.join(BUILD, "classes.dex")
    run(f'"{D8}" --release --lib "{PLATFORM_JAR}" --output "{dex}" "{classes}"')
    # 5. 注入 classes.dex
    nodx = os.path.join(BUILD, "app-nodx.apk")
    tmp = os.path.join(BUILD, "unzip")
    shutil.rmtree(tmp, ignore_errors=True)
    os.makedirs(tmp, exist_ok=True)
    with zipfile.ZipFile(unsigned) as z:
        z.extractall(tmp)
    shutil.copy(dex, os.path.join(tmp, "classes.dex"))
    with zipfile.ZipFile(nodx, "w", zipfile.ZIP_DEFLATED) as z:
        for root, _, files in os.walk(tmp):
            for f in files:
                fp = os.path.join(root, f)
                z.write(fp, os.path.relpath(fp, tmp))
    shutil.rmtree(tmp, ignore_errors=True)
    # 6. zipalign
    aligned = os.path.join(BUILD, "app-aligned.apk")
    run(f'"{ZIPALIGN}" -p 4 "{nodx}" "{aligned}"')
    # 7. 生成 keystore（如不存在）
    if not os.path.exists(KEYSTORE):
        run(f'"{KEYTOOL}" -genkeypair -v -keystore "{KEYSTORE}" -alias {ALIAS} '
            f'-keyalg RSA -keysize 2048 -validity 10000 '
            f'-storepass {STOREPASS} -keypass {STOREPASS} '
            f'-dname "CN=SentenceMaster, OU=Dev, O=SentenceMaster, L=CN, S=CN, C=CN"')
    # 8. 签名
    out = os.path.join(ROOT, f"SentenceMaster-{APP_VER}.apk")
    if os.path.exists(out):
        os.remove(out)
    run(f'"{APKSIGNER}" sign --ks "{KEYSTORE}" --ks-key-alias {ALIAS} '
        f'--ks-pass pass:{STOREPASS} --key-pass pass:{STOREPASS} '
        f'--out "{out}" "{aligned}"')
    log("APK ->", out, "size=", os.path.getsize(out))

if __name__ == "__main__":
    main()
