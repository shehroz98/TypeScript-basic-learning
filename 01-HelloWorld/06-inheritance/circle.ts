import { shape } from "./shape";

export class circle extends shape{
    constructor(x:number,y:number, private _radius: number){
        super(x,y);
    }
    public get radius(): number {
        return this._radius;
    }
    public set radius(value: number) {
        this._radius = value;
    }
 public getinfo(): string {
      return super.getinfo()+ ` radius=${this._radius}`;
 }

}