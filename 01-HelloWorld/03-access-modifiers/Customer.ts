class firstcustomer{
    private _firstname: string;
    public get firstname(): string 
    {
        return this._firstname;
    }
    public set firstname(value: string)
    {
        this._firstname = value;
    }
    private _lastname: string;
   public set lastname(value:string)
   {
    this._lastname = value;
   }
   public get lastname(): string{
    return this._lastname
   }

constructor(first:string, last:string){
    this._firstname=first;
    this._lastname=last
}
}
let myfirstcustomer= new firstcustomer("hassan","irfan");
console.log(mycustomer);
