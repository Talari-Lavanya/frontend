class Counter {
    constructor() {
      let _count = 0; // Private variable
  
      // Getter for count
      this.getCount = function() {
        return _count;
      };
  
      // Setter for count
      this.setCount = function(value) {
        if (value >= 0) {
          _count = value;
        }
      };
    }
  }
  
  const counter = new Counter();
  console.log(counter.getCount()); // Output: 0
  
  counter.setCount(5); // Setting new count value
  console.log(counter.getCount()); // Output: 5
  