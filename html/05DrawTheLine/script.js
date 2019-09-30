const cvs = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

cvs.width = width;
cvs.height = height;


let f = new LinearFunction(1,1);


let A = new Point(new Vector2d(200, 200), 20, "cyan","uwu",true);
let B = new Point(new Vector2d(500, 300), 20, "honeydew","owo",true);


function animate(){
requestAnimationFrame(animate);
ctx.clearRect(0,0,cvs.width,cvs.height);
    A.draw(ctx); 
    B.draw(ctx);
    f.defineLineWithTwoPoints(A, B);
    for (let x = 0; x < width; x += 10) {
        let point = new Point(new Vector2d(x, f.y(x)), 10, "pink");
        point.draw(ctx);
    }
}
animate();
