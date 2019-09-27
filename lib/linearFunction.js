class LinearFunction{
constructor(slope, intercept){
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
}
