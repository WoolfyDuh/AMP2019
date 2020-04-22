const cvs = document.getElementById('canvas');
const ctx = cvs.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let A, B;

A = new DPoint(new Vector2d(0,0), new Vector2d(1,2), new Vector2d(0,0), 10, "lime", "A");
B = new DPoint(new Vector2d(500,500), new Vector2d(-1,-2), new Vector2d(0,0), 50, "hotpink", "B");

function Animate(){
    requestAnimationFrame(Animate);
    ctx.clearRect(0,0, cvs.width, cvs.height);
    A.update();
    B.update();
    
    A.draw(ctx);
    B.draw(ctx);
}

Animate();