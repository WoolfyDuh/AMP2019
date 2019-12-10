
const cvs = document.getElementById('canvas');
const ctx = cvs.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;


let C = new DPoint(new Vector2d(200,300),new Vector2d(0,0), new Vector2d(0,0),15,"Lime","C");
let waypoints = [];


function Animate(){
    requestAnimationFrame(Animate);
    ctx.clearRect(0,0,cvs.width,cvs.height);
    C.draw(ctx);
    C.pos.draw(ctx, new Vector2d(0, 0), 1, "white");


    C.update();
    C.vel.draw(ctx,C.pos,10, "White");

    if(waypoints.length < 5){
        let waypoint = new Point(new Vector2d(rng(cvs.width),rng(cvs.height)),15,"white","",true);
        waypoints.push(waypoint);
    }
    ctx.beginPath();
    ctx.strokeStyle = "AliceBlue";
    ctx.setLineDash([5, 15]);
    ctx.moveTo(waypoints[0].position.dx, waypoints[0].position.dy);
    for (i = 1; i < waypoints.length; i++) {
        ctx.lineTo(waypoints[i].position.dx, waypoints[i].position.dy);
    }
    ctx.closePath();
    ctx.stroke();
    ctx.setLineDash([0]);
    for(let i =0; i < waypoints.length -1; i++){
        waypoints[i].draw(ctx);
        waypoints[i].label = i;
    }

    // if(C.vel.magnitude <= 0.3 ){
    //     BCheck = !BCheck;
    //     console.log("SWITCHI");
    // }

    // if  (BCheck){
    // C.vel.differenceVector(B.position,C.pos);
    // C.vel.scalMul(0.01);
    // }
    // if(!BCheck){
    // C.vel.differenceVector(A.position,C.pos);
    // C.vel.scalMul(0.01);
    // }

    if(C.vel.magnitude <=0.3){
        C.vel.differenceVector(waypoints[i].position + 1,C.pos);
    }
    C.vel.differenceVector(waypoints[0],C.pos);
    C.vel.scalMul(0.01);
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

function drawLineWaypoints(){
    ctx.beginPath();
    ctx.strokeStyle = "AliceBlue";
    ctx.setLineDash([5, 15]);
    ctx.moveTo(waypoints[0].position.dx,waypoints[0].position.dy);
    for(i=0; i < waypoints.length; i++){
        ctx.lineTo(waypoints[i].position.dx,waypoints[i].position.dy);
    }
    ctx.closePath();
    ctx.stroke();
    ctx.setLineDash([0]);
}

function rng(max) {
    return Math.floor(Math.random() * max)
}