//Loosely typed - we are not providing datatype
const number1 = 1;
const number2 = 1.5;

console.log(number1,number2);

let number3 = 1.21;
number3 = "number1"; //Loosely typed
console.log(number3);

//Opertions
console.log(number1+number2);
console.log(number1-number2);
console.log(number1*number2);
console.log(number1/number2);

let number4 = "10"
let number5 =2;

console.log(number4+number5);
console.log(number4-number5);
console.log(number4*number5);
console.log(number4/number5);

let number6 = "10";
let number7 = "10";
console.log(number6+number7);
console.log(number6 -  number7);
console.log(number6*number7);
console.log(number6/number7);

let number8 = 4;
let number9 = 2;
console.log(number8 + + number9); //4+2
// Considered as minus x minus = plus 
console.log(number8 - - number9); //So 4+2
console.log(number8 - + number9); // So 4-2

console.log(number8+=2); // this is number8 = number8+2 i.e, 4+2 = 6, So number8 value is 6.
console.log(number8-=2); //6-2 = 4
console.log(number8*=4); //4*4 = 16
console.log(number8/=2); //16/2 = 8

let number10 = "101";
let number11 = 101;

//Compares values
console.log( number10 == number11);
console.log(true == 1);
//Compares value and type
console.log( number10 === number11);
console.log(true === "1");

//Increase decrease
let number12 = 100;
number12++; //100+1
console.log(number12);
number12--; //101-1
console.log(number12);

let total = 100;
let people = 10;
let remainder = total % people

console.log(remainder);

 






