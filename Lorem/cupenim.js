// Define a constructor function
function MyClass() {
    // Constructor logic
}

// Add useVlSizeChannel method to MyClass prototype
MyClass.prototype.useVlSizeChannel = function() {
    console.log("Using VL size channel in MyClass");
};

// Create an instance of MyClass
let obj = new MyClass();

// Call the method on the instance
obj.useVlSizeChannel(); // Output: Using VL size channel in MyClass
