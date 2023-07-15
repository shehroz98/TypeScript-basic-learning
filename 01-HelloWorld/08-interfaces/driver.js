"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cricketcoach_1 = require("./cricketcoach");
const golfcoach_1 = require("./golfcoach");
let mycricketcoach = new cricketcoach_1.cricketcoach;
let mygolfcoach = new golfcoach_1.golfcoach;
let thecoaches = [];
thecoaches.push(mycricketcoach);
thecoaches.push(mygolfcoach);
for (let tempCoach of thecoaches) {
    console.log(tempCoach.getdailyworkout());
}
