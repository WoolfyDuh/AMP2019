const cvs = document.getElementById('canvas');
const ctx = cvs.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

//declare a Point, DPoint & Int array
let waypoints = [];
let followers = [];
let indexA = [];



//make 5 Points and push them into waypoints
for (let i = 0; i < 5; i++) {
    let waypoint = new Point(new Vector2d(rng(cvs.width), rng(cvs.height)), 15, "white", "", true);
    waypoints.push(waypoint);
}
//make DPoints and push them into followers
for (i = 0; i < waypoints.length; i++) {
    let follower = new DPoint(new Vector2d(rng(cvs.width), rng(cvs.height)), new Vector2d(0, 0), new Vector2d(0, 0), 12, "HotPink", "");
    followers.push(follower);
}
// make an array of Ints
for (i = 0; i < followers.length; i++) {
    let FINdex = i;
    indexA.push(FINdex);
}



function Animate() {
   requestAnimationFrame(Animate);
    ctx.clearRect(0, 0, cvs.width, cvs.height);

    //visualize waypoints path
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
    for (let i = 0; i < waypoints.length; i++) {
        waypoints[i].draw(ctx);
        waypoints[i].label = i ;
    }
    //draw followers
    for (let i = 0; i < 5; i++){
        followers[i].draw(ctx);
        followers[i].label = i;
       
    }
//loop Follower array in the waypoints array
    for(i = 0; i < followers.length; i++){
        followers[i].vel.differenceVector(waypoints[indexA[i]].position, followers[i].pos);
   

    if(followers[i].vel.magnitude < 2){
      indexA[i] += 1;
    }
    if (indexA[i] >= waypoints.length) {
        indexA[i] = 0;
    }

        followers[i].vel.scalMul(0.01);
        followers[i].update();
 
    }
    //that's it
}
Animate();

//random function cause why not
function rng(max) {
    return Math.floor(Math.random() * max)
}
