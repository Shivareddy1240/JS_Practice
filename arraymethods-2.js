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

//slice() - returns a shallow copy of a portion
const copiedNumbers = numbers.slice(0,2); // this consider end index as 2-1 = 1 i.e(start index - 0, end - 1)
console.log(numbers);
console.log(copiedNumbers);

//map() - loop through each element and creates an array with the result
const existingNumbers = [1,2,3];
const mappedNumbers = numbers.map(num => num * 2);
console.log(mappedNumbers);

//filter() - creates new array with elements that met the test condition
const oddNumbers = numbers.filter(num => num % 2 != 0)
console.log(oddNumbers);

//reduce() - applies reducer on each element of the array. Will give single output value
const sumOfNumbers = numbers.reduce((total,num) => total + num,0); //Initial value is 0
console.log(sumOfNumbers);
const newSumOfNumbers = numbers.reduce((total,num) => total + num,10);  //Initial value is 10
console.log(newSumOfNumbers);

//indexOf() - returns first index of element found, if not returns -1, We can also provide from index to search for the element
const fruits = ['banana','apple','grapes','orange','apple']
const indexOfApple = fruits.indexOf('apple',2); //Here we are giving from index 2 so it will check the element from that index. 
const appleIndex = fruits.indexOf('apple'); // Not provided any index
console.log(indexOfApple);
console.log(appleIndex);

//lastIndexOf() - returns last index of element found, if not returns -1.
const colours = ['red','blue','white','yellow','blue','green']
const colourLastFound = colours.lastIndexOf('blue');
console.log(colourLastFound);

//reverse() - reverses the order - inplace
console.log(colours);
console.log(colours.reverse());















