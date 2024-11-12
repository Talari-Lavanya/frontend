// Existing constructor function
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  
  // Add a method to the prototype
  Person.prototype.fullName = function() {
    return this.firstName + " " + this.lastName;
  };
  
  // Adding new properties to the prototype
  Person.prototype.age = 30; // Adding a property
  
  // Create a new instance
  const person1 = new Person("John", "Doe");
  
  console.log(person1.fullName()); // Output: John Doe
  console.log(person1.age); // Output: 30
  