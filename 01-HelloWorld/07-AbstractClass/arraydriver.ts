import { shape } from "./shape";
import { circle } from "./circle";
import { rectangle } from "./rectangle";

let mycircle=new circle(10,20,50);
let myrectangle=new rectangle(20,40,60,80);
console.log(mycircle.calculate());
console.log(myrectangle.calculate());
let theshapes: shape[]=[];
theshapes.push(myrectangle);
theshapes.push(mycircle);

for(let allShapes of theshapes){
    console.log(allShapes.getinfo());
    console.log(allShapes.calculate());
    console.log();
}
