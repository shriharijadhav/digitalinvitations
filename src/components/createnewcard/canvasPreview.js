// canvasPreview.js
export function canvasPreview(image, canvas, crop, scale = 1, rotate = 0) {
    const ctx = canvas.getContext('2d');
  
    if (!ctx) {
      throw new Error('No 2d context');
    }
  
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    const pixelRatio = window.devicePixelRatio;
  
    canvas.width = crop.width * scaleX * pixelRatio;
    canvas.height = crop.height * scaleY * pixelRatio;
  
    ctx.scale(pixelRatio, pixelRatio);
    ctx.imageSmoothingQuality = 'high';
  
    const centerX = image.naturalWidth / 2;
    const centerY = image.naturalHeight / 2;
  
    ctx.save();
    ctx.translate(-crop.x * scaleX, -crop.y * scaleY);
    ctx.translate(centerX, centerY);
    ctx.scale(scale, scale);
    ctx.rotate((rotate * Math.PI) / 180);
    ctx.translate(-centerX, -centerY);
    ctx.drawImage(image, 0, 0, image.naturalWidth, image.naturalHeight);
    ctx.restore();
  }
  