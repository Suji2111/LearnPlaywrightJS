var a = 10; // Global Scope
console.log(a); // Output: 10, accessible anywhere in the code

function printHello() {
    console.log("Hello, World!");
    var a = 20; //Local Scope
    console.log(a);
    if (true) {
        var a = 30; // This will re-assign the same variable 'a' within the function scope
        console.log(a);
    }
    console.log("F ->", a);

}

console.log("G ->", a); // Output: 10, still the global variable 'a' is accessible here 

printHello(); // Calling the function to execute its code


// This will print 30, as var is function-scoped and the same variable '