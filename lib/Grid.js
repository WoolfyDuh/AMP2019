class Grid{
    constructor(dx,dy,xmod,ymod){
        this.dx = 20 || dx;
        this.dy = 20 ||dy;
        this.xmod = 100 || xmod;
        this.ymod = 100 || ymod;
    }
    draw(ctx){
        for (let y = 0; y < cvs.height; y+=this.dy){
            ctx.beginPath();
            ctx.lineWidth = 3;
            ctx.strokeStyle ="#03fc80";
            ctx.moveTo(0,y);
            ctx.lineTo(cvs.width,y);
            ctx.closePath();
            ctx.stroke();
        }
        for (let y = 0; y < cvs.height; y += this.dy) {
            ctx.beginPath();
            if (y % this.ymod == 0) {
                ctx.lineWidth = 5;
            }
            else {
                ctx.lineWidth = 2;
            }
            ctx.strokeStyle = "#ff0044";
            ctx.moveTo(0, y);
            ctx.lineTo(cvs.width, y);
            ctx.closePath();
            ctx.stroke();
        }
        for (let x = 0; x < cvs.width; x += this.dx) {
            ctx.beginPath();
            ctx.lineWidth = 2;
            ctx.strokeStyle ="#03fcd3";
            ctx.moveTo(x,0);
            ctx.lineTo(x, cvs.width);
            ctx.closePath();
            ctx.stroke();
        }
        for(let x = 0; x < cvs.width; x+=this.dx){
            ctx.beginPath();
            if(x%this.xmod == 0){
                ctx.lineWidth = 5;
            } 
            else{
                ctx.lineWidth = 2;
            }
            ctx.strokeStyle ="#dbfc03";
            ctx.moveTo(x,0);
            ctx.lineTo(x,cvs.height);
            ctx.closePath();
            ctx.stroke();
        }
    }
}