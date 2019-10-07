const cvs = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

cvs.width = width;
cvs.height = height;

let A = new Point(new Vector2d(200,200),12,"hotpink","A",true);
let B = new Point(new Vector2d(300,300),12,"honeydew","B",true);
let C = new Point(new Vector2d(300,400),12,"rebeccapurple","C",true);
let D = new Point(new Vector2d(0, 0), 8, "lime", "AC", false);
let E = new Point(new Vector2d(0, 0), 8, "red", "CB", false);
let F = new Point(new Vector2d(0, 0), 8, "blue", "BA", false);
let G = new Point (new Vector2d(0,0),12,"yellow","X",false);
let L = new LinearFunction(1, 1);
let L2 = new LinearFunction(1, 1);
let L3 = new LinearFunction(1, 1);
let L4 = new LinearFunction(1,1);
let L5 = new LinearFunction(1, 1);
let L6 = new LinearFunction(1, 1);

function animate(){
    requestAnimationFrame(animate);
    ctx.clearRect(0,0,cvs.width,cvs.height);
    L.getTheMedian(A, B, F);
    L2.getTheMedian(B, C, E);
    L3.getTheMedian(C, A, D);
    L.defineLineWithTwoPoints(A, B);
    L2.defineLineWithTwoPoints(C, A);
    L3.defineLineWithTwoPoints(B,C);
    L4.defineLineWithTwoPoints(D,B);
    L5.defineLineWithTwoPoints(E,A);
    L6.defineLineWithTwoPoints(F,C);
    G.position.dx = L5.intersect(L6).x;
    G.position.dy = L5.intersect(L6).y;
    A.draw(ctx), B.draw(ctx), C.draw(ctx), D.draw(ctx),E.draw(ctx),F.draw(ctx), G.draw(ctx);
    L.draw(ctx), L2.draw(ctx), L3.draw(ctx),L4.draw(ctx), L5.draw(ctx), L6.draw(ctx);
}

animate();