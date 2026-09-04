# -*- coding: utf-8 -*-
"""ساخت آیکون‌های PWA"""
from PIL import Image, ImageDraw, ImageFont
import os

BASE = os.path.join(os.path.dirname(os.path.abspath(__file__)), "icons")
os.makedirs(BASE, exist_ok=True)

BLUE = (37, 99, 235, 255)
DARK = (30, 64, 175, 255)
WHITE = (255, 255, 255, 255)
GOLD = (250, 204, 21, 255)


def rounded(draw, xy, r, fill):
    draw.rounded_rectangle(xy, radius=r, fill=fill)


def make_icon(size, path):
    s = size
    img = Image.new("RGBA", (s, s), (0, 0, 0, 0))
    d = ImageDraw.Draw(img)
    # پس‌زمینه با گوشه گرد
    m = int(s * 0.06)
    rounded(d, (m, m, s - m, s - m), int(s * 0.22), BLUE)

    # چت‌بابل سفید پایین
    cb_w = int(s * 0.74)
    cb_h = int(s * 0.5)
    cb_x = (s - cb_w) // 2
    cb_y = int(s * 0.3)
    rounded(d, (cb_x, cb_y, cb_x + cb_w, cb_y + cb_h), int(cb_h * 0.32), WHITE)
    # دنباله چت‌بابل
    tail = [
        (int(cb_x + cb_w * 0.22), cb_y + cb_h - 2),
        (int(cb_x + cb_w * 0.22) + int(s * 0.12), cb_y + cb_h - 2),
        (int(cb_x + cb_w * 0.22) + int(s * 0.02), int(cb_y + cb_h + s * 0.09)),
    ]
    d.polygon(tail, fill=WHITE)

    # سه نقطه گفتار (آبی)
    r = int(s * 0.045)
    cy = cb_y + cb_h // 2
    gap = int(cb_w * 0.22)
    cx = s // 2
    for dx in (-gap, 0, gap):
        d.ellipse((cx + dx - r, cy - r, cx + dx + r, cy + r), fill=BLUE)

    # حرف E کوچک بالا (نشان English) — دایره طلایی با E
    er = int(s * 0.12)
    ex = int(s * 0.76)
    ey = int(s * 0.24)
    d.ellipse((ex - er, ey - er, ex + er, ey + er), fill=GOLD)

    try:
        font = ImageFont.truetype("arial.ttf", int(er * 1.2))
    except Exception:
        font = ImageFont.load_default()
    try:
        bb = d.textbbox((0, 0), "E", font=font)
        tw, th = bb[2] - bb[0], bb[3] - bb[1]
        d.text((ex - tw / 2 - bb[0], ey - th / 2 - bb[1]), "E", font=font, fill=DARK)
    except Exception:
        d.text((ex - er * 0.4, ey - er * 0.7), "E", fill=DARK)

    img.save(path, "PNG")
    print("saved", path)


make_icon(192, os.path.join(BASE, "icon-192.png"))
make_icon(512, os.path.join(BASE, "icon-512.png"))
print("done")
