export class books{
    constructor(private _name: string , private _author: string ){

    }
    public get author(): string {
        return this._author;
    }
    public set author(value: string) {
        this._author = value;
    }
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }
    
}
