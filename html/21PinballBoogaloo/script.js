const cvs = document.getElementById('canvas');
const ctx = cvs.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let grid,B;

grid = PointArray();

B = new DPoint(new Vector2d(1,1), new Vector2d(5,4), new Vector2d(0,0), 10, "hotpink", "B");
B.tan = new Vector2d(0,0);
B.rad = new Vector2d(0,0);

function Animate() {
    requestAnimationFrame(Animate);
    ctx.clearRect(0, 0, width, height);
    grid.map((ball) => {
        let distance = new Vector2d(1,1);
        distance.differenceVector(ball.position,B.pos);
        if(distance.magnitude < B.radius + ball.radius){
            ball.color = "hotpink";
            B.rad.dx = distance.dx;
            B.rad.dy = distance.dy;

            B.tan.dx = -B.rad.dy;
            B.tan.dy = B.rad.dx;

            B.rad.normalized();
            B.tan.normalized();

            B.rad.magnitude = B.rad.dot(B.vel);
            B.tan.magnitude = B.tan.dot(B.vel);

            B.rad.draw(ctx, B.pos, "red", 50);
            B.tan.draw(ctx, B.pos, "blue", 50); 

            collide();
        
        }
        else{
            ball.color = "white";
        }
        ball.draw(ctx);
    });

    B.update();
    B.draw(ctx);

}
Animate();

function rng(max) {
    return Math.floor(Math.random() * max)
}

function collide(){
    B.rad.flipMagnitude();
    B.vel.sumVector(B.rad, B.tan);
}

function PointArray(){
    let arr = [];

    let startColumnWidth = 75;
    let columnWidth = 150;

    let startRowHeight = 50;
    let rowHeight = 100;

    let numberOnRow = Math.floor(width / columnWidth);
    let amountOfPoints = Math.floor(height / rowHeight) * numberOnRow;


    for (let i = 0; i < amountOfPoints; i++) {
        let x = startColumnWidth + (i % numberOnRow) * columnWidth;
        let y = startRowHeight + (Math.floor(i / numberOnRow)) * rowHeight;
        let A = new Point(new Vector2d(x, y), 30, "white", "", false);
        arr.push(A);
    }
    return arr;
}
