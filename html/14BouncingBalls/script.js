
const cvs = document.getElementById('canvas');
const ctx = cvs.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let wooo = [];
let A = new DPoint(new Vector2d(200, 200), new Vector2d(5, 4), new Vector2d(0, 1), 15, "hotpink", "uwu")

function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, width, height);
    A.update();
    A.draw(ctx)
    A.vel.draw(ctx, A.pos, "#00ffe4", 5);
    if(wooo.length < 200){
        let wot = new DPoint(new Vector2d(rng(500), 200), new Vector2d(5, 4), new Vector2d(0, 1), 15, "hotpink");
        wooo.push(wot);
    }
    for(let i = 0; i < wooo.length; i++){
        wooo[i].draw(ctx);
        wooo[i].update();
        wooo[i].label = i + 1;
        wooo[i].vel.draw(ctx, wooo[i].pos, "Lime", 5);
    }

}

animate();
function rng(max) {
    return Math.floor(Math.random() * max)
}