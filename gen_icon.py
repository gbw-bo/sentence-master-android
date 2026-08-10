#!/usr/bin/env python3
"""生成各密度启动图标 PNG（品牌圆角方块 + 白色圆点），无需任何图像库。"""
import zlib, struct, os

BRAND = (79, 70, 229, 255)   # #4f46e5
WHITE = (255, 255, 255, 255)

def make_icon(size):
    buf = bytearray(size * size * 4)
    r = size * 0.30
    cx = cy = size / 2.0
    corner = size * 0.22
    for y in range(size):
        for x in range(size):
            dx = min(x, size - 1 - x)
            dy = min(y, size - 1 - y)
            inside = True
            if dx < corner and dy < corner:
                cxc = corner if x < corner else size - 1 - corner
                cyc = corner if y < corner else size - 1 - corner
                if (x - cxc) ** 2 + (y - cyc) ** 2 > corner * corner:
                    inside = False
            idx = (y * size + x) * 4
            if not inside:
                buf[idx] = buf[idx+1] = buf[idx+2] = buf[idx+3] = 0
                continue
            col = BRAND
            if (x - cx) ** 2 + (y - cy) ** 2 <= r * r:
                col = WHITE
            buf[idx] = col[0]; buf[idx+1] = col[1]; buf[idx+2] = col[2]; buf[idx+3] = col[3]
    return bytes(buf)

def write_png(path, size, rgba):
    def chunk(typ, data):
        c = typ + data
        return struct.pack(">I", len(data)) + c + struct.pack(">I", zlib.crc32(c) & 0xffffffff)
    raw = bytearray()
    for y in range(size):
        raw.append(0)
        raw += rgba[y * size * 4:(y + 1) * size * 4]
    idat = zlib.compress(bytes(raw), 9)
    with open(path, 'wb') as f:
        f.write(b'\x89PNG\r\n\x1a\n')
        f.write(chunk(b'IHDR', struct.pack(">IIBBBBB", size, size, 8, 6, 0, 0, 0)))
        f.write(chunk(b'IDAT', idat))
        f.write(chunk(b'IEND', b''))

SIZES = {'hdpi': 72, 'xhdpi': 96, 'xxhdpi': 144, 'xxxhdpi': 192}
BASE = "/d/SentenceMasterAndroid/app/res/mipmap-"
for d, s in SIZES.items():
    p = BASE + d + "/ic_launcher.png"
    os.makedirs(os.path.dirname(p), exist_ok=True)
    write_png(p, s, make_icon(s))
    print("wrote", p)
print("done")
