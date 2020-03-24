const cvs = document.getElementById('canvas');
const ctx = cvs.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

//maak een int, array & DPoint
let C = new DPoint(new Vector2d(200, 300), new Vector2d(0, 0), new Vector2d(0, 0), 15, "Lime", "C");
let waypoints = [];
let index = 0;
//maak 5 waypoints en stop ze in een array
for (let i = 0; i < 5; i++) {
    let waypoint = new Point(new Vector2d(rng(cvs.width), rng(cvs.height)), 15, "white", "", true);
    waypoints.push(waypoint);
}

function Animate() {
    requestAnimationFrame(Animate);
    ctx.clearRect(0, 0, cvs.width, cvs.height);
    C.draw(ctx);
    C.pos.draw(ctx, new Vector2d(0, 0), 1, "white");
    C.vel.draw(ctx, C.pos, 10, "White");

    //drawLineAB maar het loopt door de array
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
    //draw waypoints
    for (let i = 0; i < waypoints.length - 1; i++) {
        waypoints[i].draw(ctx);
        waypoints[i].label = i ;
    }
//loop C in de waypoints array
    C.vel.differenceVector(waypoints[index].position, C.pos);
    if (C.vel.magnitude < 2) {
        index += 1;
    }
    if(index >= waypoints.length){
        index = 0;
    }
    C.vel.scalMul(0.01);
    C.update();
    //that's it
}
Animate();

//random function cause why not
function rng(max) {
    return Math.floor(Math.random() * max)
}
