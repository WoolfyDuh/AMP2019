const cvs = document.getElementById('canvas');
const ctx = cvs.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let A = new Point(new Vector2d(canvas.width / 2 , canvas.height / 2), 50, "cyan", "A", false);
let B = new DPoint(new Vector2d(canvas.width / 2 + 150, canvas.height / 2 - 100), new Vector2d(rng(-2, 2),rng(-2, 2)), new Vector2d(0,0), 10, "LightGray", "B");


function Animate(){
    //requestAnimationFrame(Animate);
    ctx.clearRect(0,0, cvs.width, cvs.height);
    B.acc.differenceVector(A.position, B.pos);
    B.acc.normalized();
    B.update();
    B.draw(ctx);
    
    A.draw(ctx);
    B.acc.draw(ctx, B.pos, "Lime", 1);
}

setInterval(Animate, 15);


function rng(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}       