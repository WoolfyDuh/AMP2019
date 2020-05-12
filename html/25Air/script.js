const cvs = document.getElementById('canvas');
const ctx = cvs.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;


function Animate(){
    requestAnimationFrame(Animate);
    ctx.clearRect(0,0, cvs.width, cvs.height);
  
}

//Animate();
