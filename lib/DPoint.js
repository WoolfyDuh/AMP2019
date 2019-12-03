class DPoint{
    constructor(pos,vel,acc,radius,color,label){
        this.pos = pos;
        this.vel = vel;
        this.acc = acc;
        this.radius = radius;
        this.color = color || "honeydew";
        this.label = label || "";
    }
    
    update() {
        this.vel.add(this.acc);
        this.pos.add(this.vel);

        if (this.pos.dx > cvs.width - this.radius) {
            this.vel.dx = - Math.abs(this.vel.dx);
            this.pos.dy = cvs.height - this.radius;
        }
        if (this.pos.dy > cvs.height - this.radius) {
            this.vel.dy = - Math.abs(this.vel.dy)
        }
        if (this.pos.dx < 0 + this.radius) {
            this.vel.dx = Math.abs(this.vel.dx);
        }
        if (this.pos.dy < 0 + this.radius) {
            this.vel.dy = Math.abs(this.vel.dy);
        }
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.strokeStyle = "hotpink";
        ctx.fillStyle = this.color;
        ctx.arc(this.pos.dx, this.pos.dy, this.radius, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.fill();
        ctx.closePath();
        ctx.fillStyle = "blue";
        ctx.font = "20px Calibri";
        ctx.fillText(this.label, this.pos.dx - 20, this.pos.dy - this.radius - 10);
    }
}