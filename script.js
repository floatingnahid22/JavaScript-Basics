// function Person(first, last, age, eye) {
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.eyeColor = eye;
//   }
  
//   const myFather = new Person("John", "Doe", 50, "blue");
//   const myMother = new Person("Sally", "Rally", 48, "green");
  
//   document.getElementById("demo").innerHTML =
//   "My father is " + myFather.age + ". My mother is " + myMother.age; 


// function Person(first, last, age, eye) {
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.eyeColor = eye;
//     this.nationality = "English";
//   }
  
//   const myFather = new Person("John", "Doe", 50, "blue");
//   const myMother = new Person("Sally", "Rally", 48, "green");
  
//   document.getElementById("demo").innerHTML =
//   "The nationality of my father is " + myFather.nationality + ". The nationality of my mother is " + myMother.nationality;

//Using the prototype Property
// function Person(first, last, age, eye) {
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.eyeColor = eye;
//   }
  
//   Person.prototype.nationality = "English";
  
//   const myFather = new Person("John", "Doe", 50, "blue");
//   document.getElementById("demo").innerHTML =
//   "The nationality of my father is " + myFather.nationality; 


//The JavaScript prototype property also allows you to add new methods to objects constructors:

function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
  }
  
  Person.prototype.name = function() {
    return this.firstName + " " + this.lastName
  };
  
  const myFather = new Person("John", "Doe", 50, "blue");
  document.getElementById("demo").innerHTML =
  "My father is " + myFather.name(); 