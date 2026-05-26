console.log(greeting); // Output: undefined, due to hoisting, the variable 'greeting' is hoisted but not initialized

var greeting = "Hello, World!";
// In JavaScript, variable and function declarations are hoisted to the top of their containing scope during the compilation phase. This means that you can access variables and functions before they are declared in the code. However, only the declarations are hoisted, not the initializations. Therefore, if you try to access a variable before it has been initialized, it will return undefined.


console.log(greeting);

// Behind the scenes:

// var greeting;              <-- hoisted with undefined
// console.log(greeting);    <-- undefined
// greeting = "Hello!";      <-- assignment stays in place
// console.log(greeting);    <-- "Hello!"


// var a;
console.log(a);
var a = "Pramod";
console.log(a);