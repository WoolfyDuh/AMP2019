const cvs = document.getElementById('canvas');
const ctx = cvs.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let distance = 100;

let A = new Point(new Vector2d(500,500),20,"white","A",true);
let B = new Point(new Vector2d(600,600),20,"aliceblue","B",true);
let D = new Point(new Vector2d(0,0), 10, "smokewhite", "D", true);

let C = new DPoint(new Vector2d(200, 200), new Vector2d(5, 4), new Vector2d(0, 0), 15, "lime", "C");

let F1 = new LinearFunction(1,1);
let F2 = new LinearFunction(1,1);

let Rad = new Vector2d(1,1);
let Tan = new Vector2d(1,1);

function Animate() {
requestAnimationFrame(Animate);
ctx.clearRect(0,0,width,height);
F1.defineLineWithTwoPoints(A,B);
    F2.slope = - 1 / F1.slope; //
    F2.intercept = C.pos.dy - F2.slope * C.pos.dx;
    D.position.dx = F1.intersect(F2).x;
    D.position.dy = F1.intersect(F2).y;
    let dx, dy;
    dx = D.position.dx - C.pos.dx;
    dy = D.position.dy - C.pos.dy;
    distance = Math.sqrt(dx *dx + dy*dy);
    console.log (distance);

    A.draw(ctx);
    B.draw(ctx);
    D.draw(ctx);

    C.draw(ctx);
    C.update(ctx);
    C.vel.draw(ctx, C.pos, "honeydew", 20);

    F1.draw(ctx);
    F2.draw(ctx);

    Rad.dx = D.position.dx - C.pos.dx;
    Rad.dy = D.position.dy - C.pos.dy;
    Rad.magnitude = 1;
    Rad.magnitude = Rad.dot(C.vel);
    Rad.draw(ctx, C.pos, "white", 20)

    Tan.dx = -Rad.dy;
    Tan.dy = Rad.dx;
    Tan.magnitude = 1;
    Tan.dot(C.vel);
    Tan.draw(ctx, C.pos, "white", 20);

    if(distance < 100){
        Rad.magnitude = -Rad.magnitude;
        D.vel.sumVector(Rad,Tan);
    }

 }
Animate();

//random function cause why not
function rng(max) {
    return Math.floor(Math.random() * max)
}
