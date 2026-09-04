# -*- coding: utf-8 -*-
"""
وب اپ آموزش مکالمه انگلیسی — مخصوص موبایل (PWA)
اجرا:  python server.py
سپس در مرورگر موبایل (همان Wi-Fi):  http://IP-سیستم:5050
"""

import os
import socket
import sys

if os.name == "nt":
    os.system("")
    try:
        sys.stdout.reconfigure(encoding="utf-8", errors="replace")
        sys.stderr.reconfigure(encoding="utf-8", errors="replace")
    except Exception:
        pass

from flask import Flask, jsonify, send_from_directory

BASE = os.path.dirname(os.path.abspath(__file__))
app = Flask(__name__, static_folder=os.path.join(BASE, "static"), static_url_path="/static")


@app.route("/")
def index():
    return send_from_directory(os.path.join(BASE, "static"), "index.html")


@app.route("/manifest.json")
def manifest():
    return send_from_directory(BASE, "manifest.json", mimetype="application/manifest+json")


@app.route("/sw.js")
def service_worker():
    return send_from_directory(BASE, "sw.js", mimetype="application/javascript")


@app.route("/icons/<path:name>")
def icons(name):
    return send_from_directory(os.path.join(BASE, "icons"), name)


@app.route("/api/health")
def health():
    return jsonify({"ok": True})


def get_lan_ip():
    s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
    try:
        s.connect(("8.8.8.8", 80))
        return s.getsockname()[0]
    except Exception:
        return "127.0.0.1"
    finally:
        s.close()


if __name__ == "__main__":
    ip = get_lan_ip()
    print("=" * 52)
    print("  اپلیکیشن آموزش مکالمه انگلیسی")
    print("=" * 52)
    print("  روی موبایل (همان Wi-Fi) این آدرس را باز کنید:")
    print(f"  http://{ip}:5050")
    print("=" * 52)
    app.run(host="0.0.0.0", port=5050, debug=False)
