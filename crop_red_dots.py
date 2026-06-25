from PIL import Image

img = Image.open('mapa-dots.png')
width, height = img.size
cropped = img.crop((0, 0, width, int(height * 0.92)))
cropped.save('mapa-dots-cropped.png')
print('cropped', img.size, '->', cropped.size)
