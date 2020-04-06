const cvs = document.getElementById('canvas');
const ctx = cvs.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let A,B, distance;

A = new DPoint(new Vector2d(2,500), new Vector2d(5,4), new Vector2d(0,0),30, "magenta", "A");
B = new DPoint(new Vector2d(1, 1), new Vector2d(5, 4), new Vector2d(0, 0), 30, "lime", "B");

A.tan = new Vector2d(1,1);
B.tan = new Vector2d(1,1);

A.rad = new Vector2d(1,1);
B.rad = new Vector2d(1,1);

function Animate(){
    requestAnimationFrame(Animate);
    ctx.clearRect(0,0,cvs.width,cvs.height);
    A.update();
    B.update();

    A.rad.differenceVector(B.pos,A.pos);
    A.tan.perpendicular(B.rad);

    A.rad.normalized();
    A.tan.normalized();

    A.rad.magnitude = A.rad.dot(A.vel);
    A.tan.magnitude = A.tan.dot(A.vel);

    B.rad.differenceVector(A.pos,B.pos);
    B.tan.perpendicular(A.rad);
    
    distance = B.rad.magnitude;

    B.rad.normalized();
    B.tan.normalized();

    B.rad.magnitude = B.rad.dot(B.vel);
    B.tan.magnitude = B.tan.dot(B.vel);

    B.rad.draw(ctx, B.pos, "red", 30);
    A.rad.draw(ctx, A.pos, "red", 30);
    B.tan.draw(ctx, B.pos, "blue", 30);
    A.tan.draw(ctx, A.pos, "blue", 30);
    B.vel.draw(ctx,B.pos,"pink",30);
    A.vel.draw(ctx,A.pos,"pink",30);

    if(distance < B.radius + A.radius){
        collide();
    }
    A.draw(ctx), B.draw(ctx);
}

Animate();

function collide(){
    B.rad.flipMagnitude();
    A.rad.flipMagnitude();
    B.vel.sumVector(B.rad, B.tan);
    A.vel.sumVector(A.rad, A.tan);
}