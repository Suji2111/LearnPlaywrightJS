var a = 10;

//Var is function-scoped, which means it is accessible throughout the entire function in which it is declared, or globally if declared outside of any function. It allows for re-declaration and re-assignment.

console.log(a); //global scope, accessible anywhere in the code

function printHello() {
    console.log("Hello, World!");
    var a = 20; //local scope, accessible only within this function
    console.log(a);
    if (true) {
        var a = 30;
        console.log(a); // This will print 30, as var is function-scoped and the same variable 'a' is being re-assigned within the function scope
    }
}
printHello(); // Calling the function to execute its code

// var == flipper, no trustworthy, can cause bugs due to its function scope and re-declaration/re-assignment capabilities.
// It is generally recommended to use let and const for better code clarity and maintainability.    
