const cvs = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

cvs.width = width;
cvs.height = height;

let point = new Point(new Vector2d(300,400),20,'yellow','1',true);

function animate(){
    requestAnimationFrame(animate);
    ctx.clearRect(0,0,cvs.width,cvs.height);
    point.draw;
}
animate();