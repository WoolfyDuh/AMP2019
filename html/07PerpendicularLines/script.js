const cvs = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

cvs.width = width;
cvs.height = height;

let A = new Point(new Vector2d(200,300),12,"blue","ok",true);
let B = new Point(new Vector2d(200, 400), 12, "red", "ko", true);
let C = new Point(new Vector2d(200, 500),12, "gray","kk",true);
let D = new Point(new Vector2d(200,200),12,"white","oo",true);
let L = new LinearFunction(1, 1);
let M = new LinearFunction(1,1);



function animate(){
requestAnimationFrame(animate);
ctx.clearRect(0, 0, cvs.width, cvs.height);
L.defineLineWithTwoPoints(A, B);

 M.slope = - 1 / L.slope; //
 M.intercept = D.position.dy - M.slope * D .position.dx;//
A.draw(ctx);
B.draw(ctx);
C.draw(ctx);
D.draw(ctx);
L.draw(ctx);
M.draw(ctx);
    C.position.dx = L.intersect(M).x;
    C.position.dy = L.intersect(M).y;

}
animate();