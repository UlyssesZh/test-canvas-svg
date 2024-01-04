import { Image } from 'canvas';

const img = new Image();
await new Promise((resolve, reject) => {
	img.onload = resolve;
	img.onerror = reject;
	img.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" version="1.1"></svg>';
});
console.log(img);
