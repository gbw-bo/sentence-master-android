#!/usr/bin/env python3
"""从电脑端图标 build/icon.png 生成 Android 各密度启动图标（纯 stdlib：PNG 解码 + 双线性缩放 + PNG 编码）。"""
import zlib, struct, os, sys

SRC = r"D:/AI/WorkBuddy/英语软件开发区/EnglishSentenceMaster/build/icon.png"
SIZES = {'hdpi': 72, 'xhdpi': 96, 'xxhdpi': 144, 'xxxhdpi': 192}
BASE = "D:/SentenceMasterAndroid/app/res/mipmap-"

# ---------- PNG 解码 ----------
def decode_png(path):
    raw = open(path, 'rb').read()
    assert raw[:8] == b'\x89PNG\r\n\x1a\n'
    pos = 8
    w = h = bitd = ct = 0
    idat = b''
    while pos < len(raw):
        ln = struct.unpack('>I', raw[pos:pos+4])[0]
        typ = raw[pos+4:pos+8]
        data = raw[pos+8:pos+8+ln]
        if typ == b'IHDR':
            w, h, bitd, ct, comp, filt, inter = struct.unpack('>IIBBBBB', data)
        elif typ == b'IDAT':
            idat += data
        elif typ == b'IEND':
            break
        pos += 12 + ln
    assert bitd == 8 and ct in (6, 2) and comp == 0 and filt == 0 and inter == 0
    channels = 4 if ct == 6 else 3
    stride = w * channels
    dec = zlib.decompress(idat)
    out = bytearray(w * h * 4)
    prev = bytearray(stride)
    p = 0
    for y in range(h):
        ft = dec[p]; p += 1
        line = bytearray(dec[p:p+stride]); p += stride
        if ft == 1:
            for i in range(channels, stride):
                line[i] = (line[i] + line[i-channels]) & 0xff
        elif ft == 2:
            for i in range(stride):
                line[i] = (line[i] + prev[i]) & 0xff
        elif ft == 3:
            for i in range(stride):
                a = line[i-channels] if i >= channels else 0
                line[i] = (line[i] + ((a + prev[i]) >> 1)) & 0xff
        elif ft == 4:
            for i in range(stride):
                a = line[i-channels] if i >= channels else 0
                b = prev[i]
                c = prev[i-channels] if i >= channels else 0
                pa, pb, pc = abs(b-c), abs(a-c), abs(a+b-2*c)
                pr = a if (pa <= pb and pa <= pc) else (b if pb <= pc else c)
                line[i] = (line[i] + pr) & 0xff
        for x in range(w):
            for c in range(channels):
                out[(y*w+x)*4+c] = line[x*channels+c]
        if channels == 3:
            for x in range(w):
                out[(y*w+x)*4+3] = 255
        prev = line
    return w, h, bytes(out)

# ---------- 双线性缩放（alpha 预乘避免黑边） ----------
def premultiply(px):
    n = len(px)
    out = bytearray(n)
    for i in range(0, n, 4):
        a = px[i+3] / 255.0
        out[i] = round(px[i] * a)
        out[i+1] = round(px[i+1] * a)
        out[i+2] = round(px[i+2] * a)
        out[i+3] = px[i+3]
    return out

def bilinear(px, sw, sh, dw, dh):
    px = premultiply(px)
    out = bytearray(dw * dh * 4)
    sx, sy = sw / dw, sh / dh
    for y in range(dh):
        fy = y * sy
        y0 = int(fy); y1 = min(y0 + 1, sh - 1)
        wy = fy - y0
        for x in range(dw):
            fx = x * sx
            x0 = int(fx); x1 = min(x0 + 1, sw - 1)
            wx = fx - x0
            o = (y * dw + x) * 4
            for c in range(4):
                v = (px[(y0*sw+x0)*4+c] * (1-wx) * (1-wy)
                     + px[(y0*sw+x1)*4+c] * wx * (1-wy)
                     + px[(y1*sw+x0)*4+c] * (1-wx) * wy
                     + px[(y1*sw+x1)*4+c] * wx * wy)
                out[o+c] = round(v)
    # 反预乘
    for i in range(0, len(out), 4):
        a = out[i+3] / 255.0
        if a > 0.004:
            out[i] = min(255, round(out[i] / a))
            out[i+1] = min(255, round(out[i+1] / a))
            out[i+2] = min(255, round(out[i+2] / a))
    return bytes(out)

# ---------- PNG 编码 ----------
def write_png(path, size, rgba):
    def chunk(typ, data):
        c = typ + data
        return struct.pack(">I", len(data)) + c + struct.pack(">I", zlib.crc32(c) & 0xffffffff)
    raw = bytearray()
    for y in range(size):
        raw.append(0)
        raw += rgba[y*size*4:(y+1)*size*4]
    with open(path, 'wb') as f:
        f.write(b'\x89PNG\r\n\x1a\n')
        f.write(chunk(b'IHDR', struct.pack(">IIBBBBB", size, size, 8, 6, 0, 0, 0)))
        f.write(chunk(b'IDAT', zlib.compress(bytes(raw), 9)))
        f.write(chunk(b'IEND', b''))

# ---------- 主流程 ----------
sw, sh, px = decode_png(SRC)
print('source decoded:', sw, 'x', sh)
for d, s in SIZES.items():
    out = bilinear(px, sw, sh, s, s)
    p = BASE + d + "/ic_launcher.png"
    os.makedirs(os.path.dirname(p), exist_ok=True)
    write_png(p, s, out)
    print('wrote', p, s, 'px,', os.path.getsize(p), 'bytes')
print('done')
