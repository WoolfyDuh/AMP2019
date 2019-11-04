const cvs = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

cvs.width = width;
cvs.height = height;


let mouse = {};
let arrows = [];

let Aerrow = new Arrow(new Vector2d(cvs.width/2,cvs.height/2),"hotpink",0);
let F1 = new LinearFunction(0,0);

function animate() {
    requestAnimationFrame(animate);
   
    ctx.clearRect(0, 0, width, height);
    let dx = mouse.x - Aerrow.pos.dx;
    let dy = mouse.y - Aerrow.pos.dy; 
    Aerrow.angle = Math.atan2(dy, dx);
    Aerrow.draw(ctx);

}

animate();

addEventListener('mousemove',(evt)=>{
mouse.x = evt.clientX;
mouse.y = evt.clientY;
});