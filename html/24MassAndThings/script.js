const cvs = document.getElementById('canvas');
const ctx = cvs.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let A, B, diff;

A = new DPoint(new Vector2d(0,0), new Vector2d(1,2), new Vector2d(0,0), 20, "lime", "A");
B = new DPoint(new Vector2d(500,500), new Vector2d(-1,-2), new Vector2d(0,0), 100, "hotpink", "B");

A.mass = A.radius * A.radius;
B.mass = B.radius * B.radius;

diff = new Vector2d(1,1);

function Animate(){
    requestAnimationFrame(Animate);
    ctx.clearRect(0,0, cvs.width, cvs.height);
    A.update();
    B.update();

    diff.differenceVector(B.pos, A.pos);
    
    A.draw(ctx);
    B.draw(ctx);
    
    if(diff.magnitude < A.radius + B.radius)
    diff.draw(ctx, A.pos, 10, "red");
    else{
        diff.draw(ctx, A.pos, 10, "blue");   
    }
}

Animate();