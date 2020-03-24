const cvs = document.getElementById('canvas');
const ctx = cvs.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let A = new Point(new Vector2d(canvas.width/2,canvas.height/2), 125, "white", "A", false );
let B = new DPoint(new Vector2d(1000,150), new Vector2d(4,5), new Vector2d(0,0), 15, "cyan", "B");

 B.tan = new Vector2d(1,1);
 B.rad = new Vector2d(1,1);

 let distance;

function Animate() {
    requestAnimationFrame(Animate);
    ctx.clearRect(0, 0, width, height);

    B.update();

    B.rad.dx = A.position.dx - B.pos.dx;
    B.rad.dy = A.position.dy - B.pos.dy;

    distance = B.rad.magnitude;
    B.rad.magnitude = 5;

    B.tan.dx = -B.rad.dx;
    B.tan.dy = B.rad.dy;
    B.tan.magnitude = 5;

    B.rad.magnitude = B.rad.dot(B.vel);
    B.tan.magnitude = B.tan.dot(B.vel);

    if(distance < B.radius + A.radius){
        B.rad.magnitude = -B.rad.magnitude;
        B.vel.sumVector(B.rad,B.tan);
    }

    A.draw(ctx);
    B.draw(ctx);

    B.rad.draw(ctx, B.pos, "red", 5);
    B.tan.draw(ctx, B.pos, "blue", 5);
    B.vel.draw(ctx, B.pos, "lime", 15);
}
Animate();

//random function cause why not
function rng(max) {
    return Math.floor(Math.random() * max)
}
