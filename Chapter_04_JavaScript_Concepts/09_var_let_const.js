var v = 10;
let l = 20;
const c = 3.14;

var browser = "Chrome";
var browser = "Firefox"; // re-declaration allowed with var

browser = "Edge"; // re-assignment allowed with var

// for, functions

var testcases = ["login", "signup", "logout"];

for (var i = 0; i < testcases.length; i++) {
    console.log("Running test: ", testcases[i]);
}

console.log("Loop counter leaked outside: ", i); // i is accessible here due to var's function scope

// Duplicate variable declaration


// Functions concept

console.log("Hi");
console.log("Hi");
console.log("Hi");


function greet() {
    console.log("Hello, welcome to JavaScript!");
}

greet(); // Calling the function to execute its code
greet(); 