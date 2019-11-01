const cvs = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

cvs.width = width;
cvs.height = height;





function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, width, height);
}





animate();