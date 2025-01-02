const person = {
 firstName : "Shiva",
 lastName : "Reddy",
 age : 35,
 education : true,
 relatives : ["Anusha","Akash"],
 greetings : function greet(){
    console.log("Hello Everyone");
 },
 wishes(){
    console.log("Happy Birthday");
 }
}

//Accessing with dot notation
console.log(person.firstName);
console.log(person.education);
console.log(person.relatives);
console.log(person.relatives[0]);

person.greetings();
person.wishes();

//Accessing with key
console.log(person["firstName"]);



