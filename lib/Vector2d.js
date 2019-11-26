class Vector2d {
    constructor(dx, dy) {
        this.dx = dx;
        this.dy = dy;
    }

    get magnitude() {
        return Math.sqrt(this.dx * this.dx + this.dy * this.dy);
    }
    angle(){
        return Math.atan2(this.dy,this.dx);
    }

    differenceVector(a, b) {
        this.dx = a.dx - b.dx;
        this.dy = a.dy - b.dy;
    }
    sumVector(a,b){
        this.dx = a.dx + b.dx;
        this.dy = a.dy + b.dy;
    }

    add(vector){
        this.dx += vector.dx;
        this.dy += vector.dy;
    }

    draw(ctx, pos, color, scale) {
        let shaftHeight = 10;
        //let shaftWidth = 100;
        let shaftWidth = this.magnitude * scale;
        let arrowHeight = 20;
        let arrowWidth = 20;

        ctx.fillStyle = color || "black";

        ctx.save();
        ctx.translate(pos.dx, pos.dy);
        ctx.rotate(this.angle)

        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(0, shaftHeight / 2);
        ctx.lineTo(shaftWidth, shaftHeight / 2);
        ctx.lineTo(shaftWidth, arrowHeight / 2);
        ctx.lineTo(shaftWidth + arrowWidth, 0);
        ctx.lineTo(shaftWidth, -arrowHeight / 2);
        ctx.lineTo(shaftWidth, -shaftHeight / 2);
        ctx.lineTo(0, -shaftHeight / 2);
        ctx.closePath();
        ctx.stroke();
        ctx.fill();

        ctx.restore();
    }
}