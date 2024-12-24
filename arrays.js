let names = ["shiva","akash","arjun"]
console.log(names);

//Accessing all elements and index
names.forEach((value,index) =>{
console.log(`Index:  ${index}, Value:  ${value}`);
});

//accessing with index - index starts from 0.
console.log("Second name is:" + names[1]);

//Assignment
names[1] = "Anusha";
console.log("Changed second name is:" + names[1]);

//Spread Oprator - Expands  iterable elements into individual elements
//Expanding array
//Copying an array
//Merging arrays
console.log(...names);

const copyNames = [...names];
console.log("Copied from names array:" + copyNames);


const numbers1 = [1,2,3]
const numbers2 = [4,5,6]
const mergedNumbers = [...numbers1,...numbers2]
console.log(mergedNumbers);

//Length
console.log(names.length);




