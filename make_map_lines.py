import cv2
import numpy as np

source = 'mapa.jpg'
dest = 'mapa-lines.png'

img = cv2.imread(source, cv2.IMREAD_GRAYSCALE)
if img is None:
    raise SystemExit(f'Could not open {source}')

# Smooth the image while preserving edges
img = cv2.GaussianBlur(img, (5, 5), 0)

# Increase contrast and apply adaptive thresholding
thresh = cv2.adaptiveThreshold(
    img,
    255,
    cv2.ADAPTIVE_THRESH_MEAN_C,
    cv2.THRESH_BINARY_INV,
    15,
    10,
)

# Remove small noise and strengthen lines
kernel = cv2.getStructuringElement(cv2.MORPH_RECT, (3, 3))
thresh = cv2.morphologyEx(thresh, cv2.MORPH_CLOSE, kernel, iterations=1)
thresh = cv2.morphologyEx(thresh, cv2.MORPH_OPEN, kernel, iterations=1)

# Thin lines slightly to keep detail but remove fuzz
thresh = cv2.erode(thresh, cv2.getStructuringElement(cv2.MORPH_RECT, (2, 2)), iterations=1)

# Convert to RGB for browser display
result = cv2.cvtColor(thresh, cv2.COLOR_GRAY2BGR)
cv2.imwrite(dest, result)
print(f'Saved {dest} ({result.shape[1]}x{result.shape[0]})')
