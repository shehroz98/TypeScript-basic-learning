import { shape } from "./shape";

export class rectangle extends shape{


    constructor(x1:number, y1:number, private _lenght: number, private _width: number){
        super(x1,y1);
        }
public get width(): number {
    return this._width;
}
public set width(value: number) {
    this._width = value;
}
public get lenght(): number {
    return this._lenght;
}
public set lenght(value: number) {
    this._lenght = value;
}
public getinfo(): string {
    return super.getinfo()+` length=${this._lenght}, width=${this._width}`
}
calculate(): number {
    return this._lenght * this._width;
}

}