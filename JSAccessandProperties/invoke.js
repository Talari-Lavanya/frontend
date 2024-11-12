// Define an object with a method
const person = {
    firstName: "John",
    lastName: "Doe",
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  };
  
  // Using call() - passing arguments separately
  const person1 = {
    firstName: "Jane",
    lastName: "Smith"
  };
  console.log(person.fullName.call(person1)); // Output: Jane Smith
  
  // Using apply() - passing arguments as an array
  const person2 = {
    firstName: "Jim",
    lastName: "Brown"
  };
  console.log(person.fullName.apply(person2)); // Output: Jim Brown
  