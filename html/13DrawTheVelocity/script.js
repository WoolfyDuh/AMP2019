
const cvs = document.getElementById('canvas');
const ctx = cvs.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;


let A = new DPoint(new Vector2d(0, 0), new Vector2d(3, 4), new Vector2d(0, 0), 20, "purple");

function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, width, height);
    A.draw(ctx);
    A.update();
    A.vel.draw(ctx, A.pos, "red", 5);
}
animate();