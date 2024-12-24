//toString()
let numbers = [1,2,3,4]
console.log(numbers);
console.log(numbers.toString());

//Join()
let names = ["Shiva","Reddy"]
console.log(names.join()); //Returns array as a string with default seperator Comma(,).
console.log(names.join("_")); // now instead of comma it will use _

//pop() 
let Names = ["Shiva","Akash","Anusha","Arjun"]
console.log("Initial Names:" + Names);
let removedElement = Names.pop(); // Removes last element of array and returns it
console.log("Removed Element :" + removedElement);
console.log("Names after removing :" + Names); //Overrites original after removal.

//push()
let countries = ["India","China","Germany"]
console.log("Countries Now:" + countries);
// Adds at end of an array and returns total length of array after adding new element.
console.log(countries.push("Japan","Russia")); //Add n number of elementes comma seperated
console.log("Countries Later:" + countries);

//shift()
let fruits = ["Apple","Mango","Banana"];
console.log(fruits.shift()); //Removes first element in the array and returns it.
console.log(fruits);

//unshift()
let veggies = ["Brinjal","Potato","Cucumber"]
console.log(veggies.unshift("Tomato","Beans")); //Adds elements at starting of the array and returns length of array after adding.
console.log(veggies);

//concat()
let items = fruits.concat(veggies) // joins the arrays, you can add n number of arrays comma seperated
console.log(items);

//sort()
let evenNumbers = [8,12,6,24,18]
console.log("Before Sort:" + evenNumbers);
let sortedEvenNumbers = evenNumbers.sort(); // Default sort() sorts elements as strings based on Unicode values
console.log("After normal Sort:" + sortedEvenNumbers);

console.log("Using custom compare");
let sortedNumbersAsc = evenNumbers.sort((a,b)=> a-b); //Need to use custom compare function for numbers
console.log(sortedNumbersAsc);
let sortedNumbersDesc = evenNumbers.sort((a,b)=> b-a); 
console.log(sortedNumbersDesc);








