const cvs = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

cvs.width = width;
cvs.height = height;

let dots = [];



function rng(max) {
    return Math.floor(Math.random() * max)
}

function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, width, height);
    if (dots.length < 4) {
        let dot = new Point(new Vector2d(rng(width), rng(height)), 10,"#42f5bf");
        dots.push(dot);
    }
    ctx.beginPath();
    ctx.moveTo(dots[0].position.dx, dots[0].position.dy);

    for (let i = 0; i < dots.length; i++) {
        ctx.lineTo(dots[i].position.dx, dots[i].position.dy);
        ctx.lineWidth = 5;
        ctx.fillStyle = "#f2ff00";
        ctx.strokeStyle = "#4bf542";
    }

    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    for (let i = 0; i < dots.length; i++) {
        dots[i].draw(ctx);
        dots[i].label = i + 1;
    }

}

animate();