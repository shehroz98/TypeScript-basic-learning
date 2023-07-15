import { coach } from "./coach";
import { cricketcoach } from "./cricketcoach";
import { golfcoach } from "./golfcoach";

let mycricketcoach =new cricketcoach;
let mygolfcoach= new golfcoach;

let thecoaches: coach[]=[];
thecoaches.push(mycricketcoach);
thecoaches.push(mygolfcoach);
for(let tempCoach of thecoaches){
    console.log(tempCoach.getdailyworkout());
}
