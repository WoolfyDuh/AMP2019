class LinearFunction{
constructor(slope, intercept,){
    this.slope = slope;
    this.intercept = intercept;
}
y(x){
    return x * this.slope + this.intercept;
}

defineLineWithTwoPoints(A,B){
    this.slope = (B.position.dy - A.position.dy) / (B.position.dx - A.position.dx);
    this.intercept = A.position.dy - A.position.dx * this.slope;
    console.log( this.slope, this.intercept);
}
draw(ctx){
    ctx.beginPath();
    ctx.lineWidth = 6;
    ctx.strokeStyle ="#ea00ff";
    ctx.moveTo(0,this.y(0));
    ctx.lineTo(width,this.y(width));
    ctx.closePath();
    ctx.stroke();
}
intersect(Cr){
let val = {};
val.x = (this.intercept - Cr.intercept)/(Cr.slope - this.slope);
val.y = this.slope * val.x + this.intercept;
return val
}
}
