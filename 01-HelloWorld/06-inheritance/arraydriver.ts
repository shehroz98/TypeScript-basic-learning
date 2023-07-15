import { shape } from "./shape";
import { circle } from "./circle";
import { rectangle } from "./rectangle";

let myshape=new shape(5,10);
console.log(myshape);
let mycircle=new circle(10,20,50);
console.log(mycircle);
let myrectangle=new rectangle(20,40,60,80);
console.log(myrectangle);

let theshapes: shape[]=[];
theshapes.push(myshape);
theshapes.push(myrectangle);
theshapes.push(mycircle);

for(let allShapes of theshapes){
    console.log(allShapes)
}
