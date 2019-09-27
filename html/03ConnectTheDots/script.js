const cvs = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

cvs.width = width;
cvs.height = height;
let dots = [];

let point1 = new Point(new Vector2d(rng(cvs.width),rng(cvs.height)),20,'yellow','1',false);
let point2 = new Point(new Vector2d(rng(cvs.width),rng(cvs.height)),15,'green','2',false);

dots.push(point1);
dots.push(point2);
console.log(dots);
function animate(){
    requestAnimationFrame(animate);
    point1.draw(ctx);
    point2.draw(ctx);
}
animate();

function rng(max) {
    let ans = Math.floor(Math.random() * max);
    return ans;
}