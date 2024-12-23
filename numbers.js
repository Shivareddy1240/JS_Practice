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




