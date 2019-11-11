const cvs = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

cvs.width = width;
cvs.height = height;


let wheel1 = new Image();
wheel1.src = "images/wheel.png";
wheel1.position = new Vector2d(0, 0);

let wheel2 = new Image();
wheel2.src = "images/wheel.png";
wheel2.position = new Vector2d(0, 0);

let car = new Image();
car.src = "images/car.png"
car.position = new Vector2d(0, 0);
car.velocity = new Vector2d(7, 0);

car.position.dy = height - 275;

let rotate = 0;

addEventListener('keydown', (evt) => {
    switch (evt.key) {
        case "ArrowRight":
            car.velocity.dx += 1;
            break;
        case "ArrowLeft":
            car.velocity.dx -= 1;   
            break;
        case "ArrowUp":
            car.velocity.dy -= 1;
            break;
        case "ArrowDown":
            car.velocity.dy += 1;
            break;
        default:
    }

    console.log(evt.key);
})
function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, width, height);
    car.position.add(car.velocity);
    ctx.drawImage(car, car.position.dx, car.position.dy);

    ctx.save();
    ctx.translate(car.position.dx + 207, car.position.dy + 193);
    if (car.velocity.dx != 0) {
        ctx.rotate(rotate);
    }
    ctx.drawImage(wheel1, -wheel1.width / 2, -wheel1.height / 2);
    ctx.restore();

    ctx.save();
    ctx.translate(car.position.dx + 750.5, car.position.dy + 202);
    if (car.velocity.dx != 0) {
        ctx.rotate(rotate);
    }
    ctx.drawImage(wheel2, -wheel1.width / 2, -wheel1.height / 2);
    ctx.restore();

    clamp();

    rotate  += car.velocity.dx / 80


}

animate();



function clamp() {
    if (car.position.dx > width) {
        car.position.dx = -car.width;
    }
    if (car.position.dx < -width) {
        car.position.dx = car.width;
    }
    if (car.position.dy > height) {
        car.position.dy = -car.height;
    }
    if (car.position.dy < -height) {
        car.position.dy = car.height;
    }
} 