import { coach } from "./coach";
export class golfcoach implements coach{
    getdailyworkout(): string {
        return "practice 100 golf shots";
    }

}