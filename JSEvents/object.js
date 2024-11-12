// Create a JSON object
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  };
  
  // Access JSON object properties using dot notation
  console.log(person.firstName); // Output: John
  console.log(person.fullName()); // Output: John Doe
  