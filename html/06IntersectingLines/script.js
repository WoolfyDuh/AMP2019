const cvs = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

cvs.width = width;
cvs.height = height;

let G = new Grid();
let A = new Point(new Vector2d(200,200),12,"vermillion","uwu",true);
let B = new Point(new Vector2d(500,500),12,"Aqua","owo",true);
let C = new Point(new Vector2d(350,350),12,"cyan","uwo",true);
let D = new Point(new Vector2d(400,400),12,"gray","owu",true);
let E = new Point(new Vector2d(1,1), 8,"#03fcc2","CRUWU",false);
let L = new LinearFunction(1,1);
let L2 = new LinearFunction(1,1);





function animate(){
    requestAnimationFrame(animate);
    ctx.clearRect(0,0,cvs.width,cvs.height);
    G.draw(ctx);
    L.defineLineWithTwoPoints(A,B);
    L2.defineLineWithTwoPoints(C,D);
    L.draw(ctx);
    L2.draw(ctx);
    A.draw(ctx);
    B.draw(ctx);
    C.draw(ctx);
    D.draw(ctx);
    E.draw(ctx);
    E.position.dx = L.intersect(L2).x;
    E.position.dy = L.intersect(L2).y;
}

animate();