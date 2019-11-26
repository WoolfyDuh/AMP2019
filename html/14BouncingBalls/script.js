
const cvs = document.getElementById('canvas');
const ctx = cvs.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let A = new DPoint(new Vector2d(200, 200), new Vector2d(5, 4), new Vector2d(0, 0), 15, "hotpink", "uwu")

function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, width, height);
    A.update();
    A.draw(ctx)

    console.log(A.vel.angle())
}

animate();