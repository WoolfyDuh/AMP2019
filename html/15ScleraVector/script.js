
const cvs = document.getElementById('canvas');
const ctx = cvs.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let BCheck = true;

let A = new Point(new Vector2d(200,300),20,"green","A",true);
let B = new Point(new Vector2d(500,600),20,"red","B",true);

let C = new DPoint(new Vector2d(200,300),new Vector2d(0,0), new Vector2d(0,0),15,"Lime","C");

//let F = new LinearFunction(1,1);


function Animate(){
    requestAnimationFrame(Animate);
    ctx.clearRect(0,0,cvs.width,cvs.height);
    drawLineAB();
    A.draw(ctx);
    B.draw(ctx);
    C.draw(ctx);

    C.pos.draw(ctx, new Vector2d(0, 0), 1, "white");
    B.position.draw(ctx, new Vector2d(0, 0), 1, "white");

    if(C.vel.magnitude <= 0.3 ){
        BCheck = !BCheck;
        console.log("SWITCHI");
    }


    console.log(C.vel.magnitude);


    if  (BCheck){
    C.vel.differenceVector(B.position,C.pos);
    C.vel.scalMul(0.01);
    }
    if(!BCheck){
    C.vel.differenceVector(A.position,C.pos);
    C.vel.scalMul(0.01);
    }

    C.update();
    C.vel.draw(ctx,C.pos,10, "White");
    // F.defineLineWithTwoPoints(A, B)
    // F.draw(ctx);
}

Animate();

function drawLineAB(){
    ctx.beginPath();
    ctx.strokeStyle = "HotPink";
    ctx.setLineDash([5, 15]);
    ctx.moveTo(A.position.dx, A.position.dy);
    ctx.lineTo(B.position.dx, B.position.dy);
    ctx.closePath();
    ctx.stroke();
    ctx.setLineDash([0]);
}
