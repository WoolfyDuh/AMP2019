const cvs = document.getElementById('canvas');
const ctx = cvs.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let dots = fillDots();


function Animate(){
    requestAnimationFrame(Animate);
    ctx.clearRect(0,0,cvs.width,cvs.height);

    dots.map((dot)=>{
        dot.update();
        dot.draw(ctx);
        
        dots.map((otherDot)=>{
            if(dot.index != otherDot.index){
                dot.nexPos.sumVector(dot.pos, dot.vel); 
                let distance = new Vector2d(1,1);
                distance.differenceVector(otherDot.pos,dot.nexPos);
                if(distance.magnitude < dot.radius + otherDot.radius){
                    // dot.color = "red";
                    // otherDot.color = "red";
                    
                    dot.rad.dx = distance.dx;
                    dot.rad.dy = distance.dy;
                    otherDot.rad.dx = distance.dx;
                    otherDot.rad.dy = distance.dy;

                    dot.tan.perpendicular(dot.rad);
                    otherDot.tan.perpendicular(otherDot.rad);
                    
                    dot.rad.normalized();
                    otherDot.rad.normalized();

                    let temp = new Vector2d(1,1);
                    temp.dx = dot.rad.dx;
                    temp.dy = dot.rad.dy;

                    dot.rad.dx = otherDot.rad.dx;
                    dot.rad.dy = otherDot.rad.dy;

                    otherDot.rad.dx = temp.dx;
                    otherDot.rad.dy = temp.dx;

                    dot.vel.sumVector(dot.rad,dot.tan);
                    otherDot.vel.sumVector(otherDot.rad,otherDot.tan);  
                    
                    
                   // distance.draw(ctx, dot.pos, 10 , "hotpink");
                } else{
                    dot.color = "white";
                    otherDot.color = "white";
                }
            }
        });
    });
}

Animate();

function fillDots(){
    let arr = [];
    let amountOfDots = 20;
    let columnWidth = 100;
    let rowHeight = 100;
    let dotsInRow = 5;

    for(let i = 0; i < amountOfDots; i++){
        let x = columnWidth /2 + i % dotsInRow * columnWidth;
        let y = rowHeight / 2 + Math.floor(i/dotsInRow) * rowHeight;

        let dot = new DPoint(new Vector2d(x,y), new Vector2d(rng(-2, 2),rng(-2, 2)), new Vector2d(0,0), 10, "white", "" + i);
        dot.nexPos = new Vector2d(1,1);
        dot.index = i;
        dot.rad = new Vector2d(1,1);
        dot.tan = new Vector2d(1,1);

        arr.push(dot);
    }
    
    return arr;
}
function rng(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}