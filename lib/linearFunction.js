class LinearFunction{
constructor(slope, intercept, medianX, medianY,){
    this.slope = slope;
    this.intercept = intercept;
    this.medianX = medianX;
    this.medianY = medianY;
}
y(x){
    return x * this.slope + this.intercept;
}

defineLineWithTwoPoints(A,B){
    this.slope = (B.position.dy - A.position.dy) / (B.position.dx - A.position.dx);
    this.intercept = A.position.dy - A.position.dx * this.slope;

}
draw(ctx){
    ctx.beginPath();
    ctx.lineWidth = 3;
    ctx.strokeStyle ="#63f7ba";
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

   getTheMedian(A,B,C){
       C.position.dx = this.medianX;
       C.position.dy = this.medianY;
       this.medianX = (A.position.dx + B.position.dx) /2;
       this.medianY = (A.position.dy + B.position.dy) / 2;
   }
}
