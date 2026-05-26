let a = 10; // Global Scope
console.log(a); // Output: 10, accessible anywhere in the code

function printHello() {
    console.log("Hello, World!");
    let a = 20; //Local Scope
    console.log(a);
    if (true) {
        let a = 30;
        console.log(a); // 30, as let is block-scoped 

    }
    console.log("F ->", a);
}

console.log("G ->", a);

printHello(); // Calling the function to execute its code