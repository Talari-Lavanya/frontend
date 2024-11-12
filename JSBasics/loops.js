const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30
  };
  
  for (let key in person) {
    console.log(key + ": " + person[key]);
  }
  