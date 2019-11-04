class Arrow{
    constructor(pos,color,angle){
        this.pos = pos;
        this.angle = angle|| 0;
        this.color= color ||"hotpink";
    }

    draw(ctx){
        let shaftHeight = 20;
        let shaftWidth = 100;
        let arrowHeight= 40;
        let arrowWidth = 40;

        ctx.fillStyle = this.color;

        ctx.save();

        ctx.translate(this.pos.dx,this.pos.dy);
        ctx.rotate(this.angle);

        ctx.beginPath();

        ctx.moveTo(0,0);
        ctx.lineTo(0,shaftHeight/2);
        ctx.lineTo(shaftWidth,shaftHeight/2);
        ctx.lineTo(shaftWidth,arrowHeight/2);
        ctx.lineTo(shaftWidth + arrowWidth,0);

        ctx.lineTo(shaftWidth, -arrowHeight / 2);
        ctx.lineTo(shaftWidth, -shaftHeight / 2);
        ctx.lineTo(0, -shaftHeight / 2);



        ctx.closePath();
        ctx.stroke();
        ctx.fill();


        ctx.restore();
    }
}