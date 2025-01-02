//Declaration - function keyword - resuable block of code
function getName(){
console.log("Shiva Reddy");
}
//Invoke
getName();

//Parameters and Arguments

//Function with parameter - name is parameter here
function greet(name){
    console.log("Hello", name); 
}
//Passing Argument to function - passing string Shiva as argument
greet("Shiva");
greet("Akash");

//return statement
//without return statement it will return undefined
function add(val1,val2){
    console.log("Sum is",val1+val2);
}

function mul(val1,val2){
    console.log("Sum is",val1*val2);
}
const num1 = 10;
const num2 = 20;
const addition =add(num1,num2);
const multiplication = mul(num1,num2);
//Here in result we receive undefined
const result = [addition,multiplication]
console.log("result without return statement:" , result);

//returning value from function
function addingNumbers(val1,val2){
    const addValue = val1 + val2;
    return addValue;
}

function multiplyNumbers(val1,val2){
    const multiplyValue = val1 * val2;
    return multiplyValue;
}
 const firstNumber = 10;
 const secondNumber = 10;
 const additionValue = addingNumbers(firstNumber,secondNumber)
 const multiplicationValue = multiplyNumbers(firstNumber,secondNumber)
 const finalResult = [additionValue,multiplicationValue]
 console.log("Final result with return statement :" , finalResult);

 //function expressions

 const addingValues = function(value1,value2) {
    return value1 + value2;
 }
 const resultValue = addingValues(100,100);
 console.log("adding values result:",resultValue);
 
 