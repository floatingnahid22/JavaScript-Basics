// let person = "John Doe";
// document.getElementById("demo").innerHTML = person;

// let person = {
//     firstName : "John",
//     lastName  : "Doe",
//     age     : 50,
//     eyeColor  : "blue"
//   };
  
//   document.getElementById("demo").innerHTML = person.firstName + " " + person.lastName;

// JavaScript Object Using an Object Literal(For readability, simplicity and execution speed, use the object literal method.)
// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 50,
//     eyeColor: "blue"
//   };
  
//   document.getElementById("demo").innerHTML =
//   person.firstName + " is " + person.age + " years old.";

//Using the JavaScript Keyword new
const person = new Object();
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue"; 

document.getElementById("demo").innerHTML =
person.firstName + " is " + person.age + " years old.";