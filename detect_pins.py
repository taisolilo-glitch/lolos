import json
import sys

def ensure_install(package_name, import_name=None):
    try:
        __import__(import_name or package_name)
    except Exception:
        import subprocess, sys
        subprocess.check_call([sys.executable, '-m', 'pip', 'install', package_name])

# install OpenCV (package name) but import as cv2
ensure_install('opencv-python-headless', 'cv2')
ensure_install('numpy')

import cv2
import numpy as np

import os

candidates = ['mapa-dots.jpg', 'mapa-dots.png', 'mapa-dots.jpeg']
IMG = None
for c in candidates:
    if os.path.exists(c):
        IMG = c
        break

if IMG is None:
    # try any file starting with mapadot
    for f in os.listdir('.'):
        if f.lower().startswith('mapa') and ('dot' in f or 'dots' in f):
            IMG = f
            break

if IMG is None:
    print(json.dumps({'error': 'Could not find mapa-dots image in folder'}))
    sys.exit(1)

img = cv2.imread(IMG)
if img is None:
    print(json.dumps({'error': f'Could not open {IMG}'}))
    sys.exit(1)

h, w = img.shape[:2]
hsv = cv2.cvtColor(img, cv2.COLOR_BGR2HSV)

lower1 = np.array([0, 100, 50])
upper1 = np.array([10, 255, 255])
lower2 = np.array([170, 100, 50])
upper2 = np.array([180, 255, 255])

mask1 = cv2.inRange(hsv, lower1, upper1)
mask2 = cv2.inRange(hsv, lower2, upper2)
mask = cv2.bitwise_or(mask1, mask2)

# clean noise
kernel = np.ones((5,5), np.uint8)
mask = cv2.morphologyEx(mask, cv2.MORPH_OPEN, kernel)
mask = cv2.morphologyEx(mask, cv2.MORPH_CLOSE, kernel)

cnts, _ = cv2.findContours(mask, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)

centroids = []
for c in cnts:
    area = cv2.contourArea(c)
    if area < 20:
        continue
    M = cv2.moments(c)
    if M['m00'] == 0:
        continue
    cx = int(M['m10']/M['m00'])
    cy = int(M['m01']/M['m00'])
    centroids.append((cx, cy))

if not centroids:
    print(json.dumps({'error': 'No red dots detected'}))
    sys.exit(1)

# sort top-to-bottom then left-to-right
centroids.sort(key=lambda p: (p[1], p[0]))

results = []
for cx, cy in centroids:
    left = round(cx / w * 100, 2)
    top = round(cy / h * 100, 2)
    results.append({'top': top, 'left': left})

print(json.dumps({'image': IMG, 'width': w, 'height': h, 'pins': results}, indent=2))
