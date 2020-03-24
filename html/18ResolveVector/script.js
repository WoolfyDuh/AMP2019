const cvs = document.getElementById('canvas');
const ctx = cvs.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let L = new LinearFunction(1, 1);
let L2 = new LinearFunction(1,1);

let A = new Point(new Vector2d(500,500),20,"white","A",true);
let B = new Point(new Vector2d(600,600),20,"aliceblue","B",true);
let C = new Point(new Vector2d(550,550),15,"hotpink","C",true);
let D = new Point(new Vector2d(A.position.dx,A.position.dy),5,"white","Tan",false);

let Tan = new Vector2d(1,1);
let Vector = new Vector2d(1,1);
let Rad = new Vector2d(1,1);

function Animate() {
   requestAnimationFrame(Animate);
    ctx.clearRect(0, 0, cvs.width, cvs.height);
    A.draw(ctx);
    B.draw(ctx);
    C.draw(ctx);
    L.defineLineWithTwoPoints(A,B);
    L.draw(ctx);
   // L2.draw(ctx);

    Vector.dx = B.position.dx - A.position.dx;
    Vector.dy = B.position.dy - A.position.dy;
    Vector.draw(ctx,A.position,"white",1);

    Tan.dx = -Rad.dy;
    Tan.dy = Rad.dx;
    Tan.dot(B.position);
    Tan.draw(ctx,A.position,"white",1);

    D.position.dx = Tan.dx;
    D.position.dy = Tan.dy;
    D.draw(ctx);

    Rad.dx = C.position.dx - A.position.dx;
    Rad.dy = C.position.dy - A.position.dy;
    Rad.dot(B.position);
    Rad.draw(ctx,A.position,"white",1)


 }
Animate();

//random function cause why not
function rng(max) {
    return Math.floor(Math.random() * max)
}
