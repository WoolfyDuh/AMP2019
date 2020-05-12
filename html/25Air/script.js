const cvs = document.getElementById('canvas');
const ctx = cvs.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let air = MakeAirArr();

function Animate(){
    requestAnimationFrame(Animate);
    ctx.clearRect(0,0, cvs.width, cvs.height);
  
    air.map(mol =>{
        mol.update();
        mol.draw(ctx);
    air.map(othermol =>{
        let distance = new Vector2d(0,0);
        mol.rad.differenceVector(othermol.pos, mol.pos);
        othermol.rad.differenceVector(mol.pos, othermol.pos);
        
        mol.rad.normalized();
        othermol.rad.normalized();
        
        mol.rad.perpendicular(mol.rad);
        othermol.rad.perpendicular(othermol.rad);
        
        mol.rad.magnitude = mol.rad.dot(mol.vel);
        othermol.rad.magnitude = othermol.rad.dot(othermol.vel);

        distance.differenceVector(othermol.pos, mol.pos);
        //distance.draw(ctx, mol.pos, 1, "white");
        if(distance.magnitude < mol.radius + othermol.radius){
            if(mol.index != othermol.index){
                //mol.vel.magnitude= 0;
                //console.log("col", mol.index, othermol.index);
               

               let Msum = mol.mass + othermol.mass;
               let MAB = mol.mass - othermol.mass;
               let MBA = othermol.mass - mol.mass;

               let P = new Vector2d(0, 0);
               let Q = new Vector2d(0, 0);
               let R = new Vector2d(0, 0);
               let S = new Vector2d(0, 0);

                P.equals(mol.rad);
                Q.equals(othermol.rad);
                R.equals(mol.rad);
                S.equals(othermol.rad);

                P.scalMul(MAB / Msum);
                Q.scalMul(2 * othermol.mass / Msum);
                R.scalMul(2 * mol.mass / Msum);
                S.scalMul(MBA / Msum);

                mol.rad.sumVector(P, Q);
                othermol.rad.sumVector(R, S);

                mol.vel.sumVector(mol.rad, mol.tan);
                othermol.vel.sumVector(othermol.rad, othermol.tan);

            
            }
        }
    });
    });

}

Animate();

function MakeAirArr(){
 let arr = [];
 let numberOfMols = 12;
 let numberOnRow = 3;
 let columnWidth = 125;
 let rowHeight = 125;

 for(let i = 0; i < numberOfMols; i++){
     let foo = rng(0.5, 10);
     let color = "rgba(" + 255 + "," + 0 + "," + 111 + ","+ ((foo / 10)* 1) +")";
     let x = columnWidth / 2 + i % numberOnRow * columnWidth;
     let y = rowHeight / 2 + Math.floor(i / numberOnRow) * rowHeight;
     let mol = new DPoint(new Vector2d(x, y), new Vector2d(rng(-5, 5), rng(-5, 5)), new Vector2d(0,0), foo * 5, color, " ");
     mol.mass = foo;
     mol.index = i;
     mol.tan = new Vector2d(0,0);
     mol.rad = new Vector2d(0,0);
     arr.push(mol);
 }

 return arr;
}
function rng(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}       