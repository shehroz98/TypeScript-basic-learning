
console.log("hello world");
console.log("java");
console.log("programmer");
//defining variables
let Found: boolean= true;
let firstName: String="Shehroz";
let lastName:String="Amir";
let Grade:Number=4.0;
let Age:any="twenty four";
Age=24;

console.log(Found);
console.log("hi "+ firstName +" "+ lastName+ "  "+ "welcome");
console.log("your age is:");
console.log(Age);
console.log(`hi ${firstName} ${lastName} your grade is ${Grade}`);

// loop
for(let i=0; i<5; i++){
    console.log(i);
}

//array
let rollno: number[]=[5,5,6,7,8,9];
let total:number=0;
rollno.push(5);

//loop with array 
for(let i=0; i<rollno.length; i++){
    console.log(rollno[i]);
    total = rollno[i] + total;
    console.log(total);
}
let avg:number=total/rollno.length;
console.log(avg);

//Simplified array with conditions
let sports:string[]=["cricket","football", "baseball"];
for(let temp of sports){
    if(temp=="cricket"){
console.log(`${temp} is my favourite`);    
}
else{
    console.log(temp);
}

//Growable array
let sports2 :string[]=["cricket","football", "baseball"];
sports2.push("tennis");
for(let temp2 of sports2)
{
    console.log(temp2);
}
}