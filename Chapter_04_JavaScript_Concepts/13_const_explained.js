const baseurl = "https://api.example.com/data";

//baseurl = "https://api.example.com/otherdata"; // This will throw a type error because baseurl is a constant

//const baseurl = "https://api.example.com/otherdata"; // This will also throw a syntax error because re-declaration is not allowed with const

let name = "Alice";
name = "Bob";
{
    let name = "Charlie";
    console.log(name); // Output: Charlie, this is a different variable in the block scope
}

// function can be recalled multiple times but a block cannot be recalled, it is executed once when the code runs and cannot be re-executed like a function can.

function say() {
    let name = "Alice";
}

say(); // This will execute the function and create a new variable 'name' with the value "Alice" each time it is called
say();

