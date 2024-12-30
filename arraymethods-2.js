const numbers = [1,3,4,5,7,10]
const numbersNew = [2,4,6,8,10]

//find() - returns first element that satisfies the condition
const result = numbers.find(number => number > 2);
console.log(result);

//some() - returns true if condition true for atleast one element.
const evenNumber = numbers.some(number=>number % 2 == 0)
console.log(evenNumber);
const dividedBySix = numbers.some(number=>number % 6 ==0)
console.log(dividedBySix);

//every() - all elements needs to satisfy the condition
const allEvenNumbers = numbers.every(number=>number % 2 == 0)
console.log(allEvenNumbers);
const allAreEvenNumbers = numbersNew.every(number=>number % 2 == 0)
console.log(allAreEvenNumbers);

//includes() - checks if element includes and returns true or false
const hasElement = numbers.includes(4);
console.log(hasElement);





