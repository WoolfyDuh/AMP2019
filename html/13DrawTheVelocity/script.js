
const cvs = document.getElementById('canvas');
const ctx = cvs.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;


let A = new DPoint(new Vector2d(1, 0), new Vector2d(3, 4), new Vector2d(0, 1), 20, "purple");

function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, width, height);
    A.draw(ctx);
    A.update();
    A.vel.draw(ctx, A.pos, "#00ffe4", 5);
}
animate();