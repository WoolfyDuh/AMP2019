const cvs = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

cvs.width = width;
cvs.height = height;


let points = [];

//let B = new Point(new Vector2d(400,500),150,"rgba(50,30,200,0.3)");

//B.draw(ctx);

function animate(){
    requestAnimationFrame(animate);
    let color = "rgba(" + rng(255) + "," + rng(255) + "," + rng(255) + "," + "0.2" + ")";
    let A = new Point(new Vector2d(rng(width), rng(height)), rng(50),color);
    //A.draw(ctx);
    points.push(A);

    for(let i = 0; i<points.length; i++){
        points[i].radius++;
        points[i].draw(ctx);
        if (points[i].radius >= 150 ) {
            points.splice(i,1);
        }
    }


}
animate();

function rng(max){
    let ans = Math.floor(Math.random()*max);
    return ans;
}