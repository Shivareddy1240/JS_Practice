//Variable name can contain letters,numbers,_,$
//Start with letter,_,$
//case-sensitive
//Dont use keywords as variable names

let name; //Undefined
console.log(name);

let firstname = "Shiva Reddy"
console.log(firstname);

//Declaring and Assignments
let id,address,designation;
id= 1;
address = "Hyderabad";
designation = "Manager";
firstname = "Shiva"; // Updating
console.log(firstname,id,address,designation);

//case-sensitive - below two are seperate variables
let myname = "Shiva";
console.log(myname);
let Myname = "Shiva";
console.log(Myname);

//must start with letter,_ or $
let s1 = "season1";
let _season = "season2";
let $season = "season3";
// let 1season = "Season"; Not allowed
console.log(s1,_season,$season);

//Good practice of variable names
let firstName = "Shiva"
let first_name = "Shiva"


//let vs const vs var
let city = "Hyderabad";
let pincode;
pincode = 500072;

var number = 1;
var counter;
counter = 10;

//must assign the value at the time of delcaration
const pi = 3.14;
//Reassignment not possible
// pi = 4; Not possible

console.log(city,pincode,number,pi,counter);



