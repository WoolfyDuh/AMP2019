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

A.rad = new Vector2d(1,1);
B.rad = new Vector2d(1, 1);

A.tan = new Vector2d(1, 1);
B.tan = new Vector2d(1, 1);

diff = new Vector2d(1,1);
let Msum,MAB,MBA,P,Q,R,S;



function Animate(){
    requestAnimationFrame(Animate);
    ctx.clearRect(0,0, cvs.width, cvs.height);
    A.update();
    B.update();


    A.rad.differenceVector(B.pos, A.pos);
    A.tan.perpendicular(B.rad);

    A.rad.normalized();
    A.tan.normalized();

    A.rad.magnitude = B.rad.dot(B.vel);
    A.tan.magnitude = B.tan.dot(B.vel);

    B.rad.differenceVector(A.pos, B.pos);
    B.tan.perpendicular(A.rad);

    B.rad.normalized();
    B.tan.normalized();

    B.rad.magnitude = B.rad.dot(B.vel);
    B.tan.magnitude = B.tan.dot(B.vel);
    diff.differenceVector(B.pos, A.pos);
    
    A.draw(ctx);
    B.draw(ctx);
    A.vel.draw(ctx, A.pos, "hotpink", 40);
    B.vel.draw(ctx, B.pos, "lime", 40);    

    A.rad.draw(ctx, A.pos, "red", 40);
    B.rad.draw(ctx, B.pos, "red", 40);   

    A.tan.draw(ctx, A.pos, "green", 20);
    B.tan.draw(ctx, B.pos, "green", 20);   

    if(diff.magnitude < A.radius + B.radius){
        Msum = A.mass + B.mass;
        MAB = A.mass - B.mass;
        MBA = B.mass - A.mass;
        
        P = new Vector2d(0,0);
        Q = new Vector2d(0,0);
        R = new Vector2d(0,0);
        S = new Vector2d(0,0);

        // P = MAB / Msum * A.rad;
        // Q = 2 * B.mass / Msum * B.rad;
        // R = 2 * A.mass / Msum * A.rad;
        // S = MBA / Msum * B.rad
        P.equals(A.rad);
        Q.equals(B.rad);
        R.equals(A.rad);
        S.equals(B.rad);

        P.scalMul(MAB / Msum);
        Q.scalMul(2 * B.mass / Msum);
        R.scalMul(2 * A.mass /Msum);
        S.scalMul(MBA / Msum);

        A.rad.sumVector(P, Q);
        B.rad.sumVector(R, S);

        A.vel.sumVector(A.rad, A.tan);
        B.vel.sumVector(B.rad, B.tan);

        }
    else{
       // diff.draw(ctx, A.pos,"blue",10);   
    }
}

Animate();