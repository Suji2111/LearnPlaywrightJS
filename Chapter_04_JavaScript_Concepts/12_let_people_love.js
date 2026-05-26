//let - Block-scoped variable declaration
//let is a block-scoped variable declaration, which means it is only accessible within the block (enclosed by {}) in which it is declared. It does not allow for re-declaration within the same scope, but it does allow for re-assignment.

let name = "Alice";
console.log(name); // Output: Alice 

//let name = "Bob"; // This will cause an error because re-declaration is not allowed with let

// syntax error: Identifier 'name' has already been declared

let testStatus = "pending";

if (testStatus === "pending") {
    let executionTime = "10:00 AM";
    console.log("Inside block:", executionTime); // Output: Inside block, execution time: 10:00 AM
}

//console.log(executionTime); // Reference error : This will cause an error because execution Time is not accessible outside the block