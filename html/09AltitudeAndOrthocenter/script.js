const cvs = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

cvs.width = width;
cvs.height = height;

let A = new Point(new Vector2d(200, 200), 20, "black", "A", true);
let B = new Point(new Vector2d(400, 300), 20, "white", "B", true);
let C = new Point(new Vector2d(200, 300), 20, "gray", "C", true);

let S = new Point(new Vector2d(0, 0),20, "gold", "X", false);

let D = new Point(new Vector2d(0, 0),20, "red", "D", false);
let E = new Point(new Vector2d(0, 0),20, "green", "E", false);
let F = new Point(new Vector2d(0, 0),20, "blue", "F", false);

let L1 = new LinearFunction(0, 0);
let L2 = new LinearFunction(0, 0);
let L3 = new LinearFunction(0, 0);

let L4 = new LinearFunction(0, 0,);
let L5 = new LinearFunction(0, 0,);
let L6 = new LinearFunction(0, 0,);



function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, width, height);

    L1.defineLineWithTwoPoints(A, B);
    L2.defineLineWithTwoPoints(B, C);
    L3.defineLineWithTwoPoints(C, A);


    L4.slope = -1 / L3.slope;
    L4.intercept = B.position.dy - L4.slope * B.position.dx;

    L5.slope = -1 / L1.slope;
    L5.intercept = C.position.dy - L5.slope * C.position.dx;

    L6.slope = -1 / L2.slope;
    L6.intercept = A.position.dy - L6.slope * A.position.dx;


    D.position.dx = L5.intersect(L1).x;
    D.position.dy = L5.intersect(L1).y;

    E.position.dx = L6.intersect(L2).x;
    E.position.dy = L6.intersect(L2).y;

    F.position.dx = L4.intersect(L3).x;
    F.position.dy = L4.intersect(L3).y;

    S.position.dx = L6.intersect(L4).x;
    S.position.dy = L6.intersect(L4).y;

A.draw(ctx), B.draw(ctx), C.draw(ctx), D.draw(ctx), F.draw(ctx), E.draw(ctx), S.draw(ctx);
L1.draw(ctx), L2.draw(ctx), L3.draw(ctx), L4.draw(ctx), L5.draw(ctx), L6.draw(ctx);
}





animate();