// JavaScript Identifier Rules Examples

// Rule 1: Can start with a letter (a-z, A-Z)
let name = "valid";
let Name = "valid";
let myName = "valid";

// Rule 2: Can start with underscore (_)
let _name = "valid";
let _private = "valid";

// Rule 3: Can start with dollar sign ($)
let $name = "valid";
let $element = "valid";

// Rule 4: Can contain digits after the first character
let name1 = "valid";
let _123 = "valid";
let $test123 = "valid";

// Rule 5: Case-sensitive
let user = "lowercase";
let User = "uppercase";
let USER = "all uppercase";

// Rule 6: Can contain Unicode letters
let café = "valid unicode";
let 变量 = "valid unicode";
let Σ = "valid unicode";

// Rule 7: Can use Unicode escape sequences
let \u0061 = "letter a escaped";
let \u004E\u0061\u006D\u0065 = "Name escaped";

// Rule 8: Cannot start with a digit
// let 1name = "invalid"; // This would throw an error

// Rule 9: Cannot contain spaces
// let my name = "invalid"; // This would throw an error

// Rule 10: Cannot contain special characters (except _ and $)
// let my-name = "invalid"; // This would throw an error
// let my@name = "invalid"; // This would throw an error
// let my#name = "invalid"; // This would throw an error

// Rule 11: Cannot be reserved keywords
// let let = "invalid"; // This would throw an error
// let const = "invalid"; // This would throw an error
// let function = "invalid"; // This would throw an error
// let class = "invalid"; // This would throw an error
// let return = "invalid"; // This would throw an error
// let if = "invalid"; // This would throw an error

// Rule 12: Cannot be reserved keywords in strict mode
// let interface = "invalid in strict mode";
// let implements = "invalid in strict mode";
// let package = "invalid in strict mode";
// let private = "invalid in strict mode";
// let protected = "invalid in strict mode";
// let public = "invalid in strict mode";
// let static = "invalid in strict mode";

// Rule 13: Cannot be reserved future keywords
// let enum = "invalid";
// let await = "invalid in module";

// Rule 14: Cannot use consecutive Unicode escape sequences without forming valid IdentifierName
// let \u0020 = "invalid"; // space character is invalid

// Rule 15: Allowed special characters - only _ and $
let my_name = "valid underscore";
let my$name = "valid dollar";
let _$_ = "valid mixed special chars";

console.log("All valid JavaScript identifiers demonstrated above");

