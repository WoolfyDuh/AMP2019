
class Point {
    constructor(position, radius, color, label) {
        this.position = position;
        this.radius = radius;
        this.color = color || "honeydew";
        this.label = label || "";

    }

    draw(context) {
        context.beginPath();
        context.strokeStyle = "hotpink";
        context.fillStyle = this.color;
        context.arc(this.position.dx, this.position.dy, this.radius, 0, 2 * Math.PI);
        context.stroke();
        context.fill();
        context.closePath();
        context.fillStyle = "blue";
        context.font = "20px Calibri";
        context.fillText(this.label, this.position.dx - 20, this.position.dy - this.radius - 10);
    }
}
