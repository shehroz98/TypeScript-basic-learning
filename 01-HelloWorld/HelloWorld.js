console.log("hello world");
console.log("java");
console.log("programmer");
//defining variables
var Found = true;
var firstName = "Shehroz";
var lastName = "Amir";
var Grade = 4.0;
var Age = "twenty four";
Age = 24;
console.log(Found);
console.log("hi " + firstName + " " + lastName + "  " + "welcome");
console.log("your age is:");
console.log(Age);
console.log("hi ".concat(firstName, " ").concat(lastName, " your grade is ").concat(Grade));
// loop
for (var i = 0; i < 5; i++) {
    console.log(i);
}
//array
var rollno = [5, 5, 6, 7, 8, 9];
var total = 0;
rollno.push(5);
//loop with array 
for (var i = 0; i < rollno.length; i++) {
    console.log(rollno[i]);
    total = rollno[i] + total;
    console.log(total);
}
var avg = total / rollno.length;
console.log(avg);
//Simplified array with conditions
var sports = ["cricket", "football", "baseball"];
for (var _i = 0, sports_1 = sports; _i < sports_1.length; _i++) {
    var temp = sports_1[_i];
    if (temp == "cricket") {
        console.log("".concat(temp, " is my favourite"));
    }
    else {
        console.log(temp);
    }
    //Growable array
    var sports2 = ["cricket", "football", "baseball"];
    sports2.push("tennis");
    for (var _a = 0, sports2_1 = sports2; _a < sports2_1.length; _a++) {
        var temp2 = sports2_1[_a];
        console.log(temp2);
    }
}
