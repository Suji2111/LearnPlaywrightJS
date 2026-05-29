# LearnPlaywrightJS

A learning project for JavaScript fundamentals and Playwright end-to-end testing.

## Covered Concepts

### Chapter 01 — Basics
- **Console Output:** Using `console.log()` to print messages and values
- **Variables:** Declaring variables with `let`
- **Loops:** Using `for` loops for iteration
- **Functions:** Creating and invoking functions
- **Process Object:** Accessing Node.js environment info (`process.platform`, `process.version`, `process.arch`)
- **Hot Code Reloading:** Running JavaScript efficiently with iterative execution

### Chapter 02 — JavaScript Concepts
- **Variable Declarations:** Using `var` to declare variables
- **Variable Reassignment:** Updating variable values after declaration
- **Basic Data Handling:** Working with simple values in JavaScript

### Chapter 03 — Identifiers & Literals
- **Identifier Rules:**
  - Can start with a letter (`a-z`, `A-Z`), underscore (`_`), or dollar sign (`$`)
  - Can contain digits after the first character
  - Are case-sensitive (`name`, `Name`, and `NAME` are different)
  - Cannot start with a digit
  - Cannot contain spaces
  - Cannot contain special characters (only `_` and `$` are allowed)
  - Cannot be reserved keywords (e.g., `let`, `const`, `function`, `class`, `return`)
- **Naming Conventions:**
  - `camelCase` — commonly used for variables and functions
  - `PascalCase` — used for classes and constructors
  - `snake_case` — lowercase words separated by underscores
  - `UPPER_SNAKE_CASE` — used for constants
  - `flatcase` / `UPPERFLATCASE` — all lowercase or all uppercase with no separators
  - `Hungarian notation` — prefix indicates variable type
  - `kebab-case` — **not valid** for JavaScript identifiers
- **Comments:**
  - Single-line comments (`//`)
  - Multi-line comments (`/* ... */`)
  - JSDoc-style comments (`/** ... */`)

### Chapter 04 — JavaScript Concepts (Hoisting)
- **Variable Hoisting (`var`):** How `var` declarations are hoisted to the top of their scope and initialized with `undefined`
- **Function Hoisting:** How functions are hoisted within their containing scope
- **`let` Hoisting & TDZ:** Understanding the Temporal Dead Zone (TDZ) where `let` variables cannot be accessed before declaration
- **Block-Scoped Hoisting:** How block-scoped variables behave inside `if` blocks and other block statements
- **`const` Declarations:** Using `const` for immutable bindings and its hoisting behavior
- **Differences between `var`, `let`, and `const`:** When and why to use each declaration type

### Chapter 05 — Literals
- **String Literals:** Creating strings with single (`'`) and double (`"`) quotes
- **Numeric Literals:** Integers, negative numbers, zero, hexadecimal (`0x`), octal (`0o`), and scientific notation (`1e6`)
- **Boolean Literals:** `true` and `false` values
- **Null Literal:** Using `null` to explicitly represent "no value"
- **Undefined:** Variables declared but not assigned automatically get `undefined`
- **`typeof` Operator:** Checking the data type of a value or variable
- **Template Literals:** Using backticks (`` ` ``) for string interpolation, multi-line strings, and embedded expressions

### Chapter 06 — Operators
- **Assignment Operators:** Using `=` to assign values to variables
- **Arithmetic Operators:** Addition (`+`), subtraction (`-`), multiplication (`*`), division (`/`), modulus (`%`), and exponentiation (`**`)
- **Comparison Operators:** Loose (`==`) vs strict (`===`) equality, greater than (`>`), less than (`<`), greater than or equal (`>=`), less than or equal (`<=`), and not equal (`!=`, `!==`)
- **Logical Operators:** AND (`&&`), OR (`||`), and NOT (`!`)
- **String Concatenation:** Combining strings with the `+` operator
- **Ternary Operator:** Conditional expressions with `condition ? valueIfTrue : valueIfFalse`
- **Increment & Decrement Operators:** Pre (`++a`, `--a`) and post (`a++`, `a--`) increment/decrement
- **Nullish Coalescing Operator (`??`):** Providing default values for `null` or `undefined`
- **Type Operator (`typeof`):** Checking the data type of values and variables

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or later recommended)
- npm or yarn

### Installation

Install project dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

## Running Tests

Run all tests:

```bash
npx playwright test
```

Run tests in headed mode (to see the browser):

```bash
npx playwright test --headed
```

Run tests in a specific browser:

```bash
npx playwright test --project=chromium
```

## Project Structure

```
├── Chapter_01_Basics/                  # Chapter 1 - JavaScript Basics
│   ├── 01_Basics.js
│   ├── 02_JS.js
│   ├── 03_JS_Commands.js
│   └── 04_JS_HotCode.js
├── Chapter_02_Javascript_Concepts/     # Chapter 2 - Core JavaScript Concepts
│   └── 05_JS_Basics.js
├── Chapter_03_Identifier_Literals/     # Chapter 3 - Identifiers, Literals & Comments
│   ├── 06_Identifier_rules.js
│   ├── 07_Identifier_Part2.js
│   ├── 08_Comments.js
│   ├── JS_Identifier_rules.js
│   ├── VS_Code_Keyboard_Shortcuts_Windows.md
│   └── VS_Code_Keyboard_Shortcuts_tableformat_Windows.md
├── Chapter_04_JavaScript_Concepts/     # Chapter 4 - Hoisting & Variable Declarations
│   ├── 16_Hoisting.js
│   ├── 17_Hoisting_functions.js
│   ├── 18_Let_Hoisting.js
│   ├── 19_Hoisting_block.js
│   ├── 20_Let_Const.js
│   └── Jr_QA.js
├── Chapter_05_Literal/                 # Chapter 5 - Literals & Data Types
│   ├── 22_Literal.js
│   ├── 24_null.js
│   ├── 25_Literal_all.js
│   ├── 27_String.js
│   └── 28_Template_literal.js
├── Chapter_06_Operators/                 # Chapter 6 - Operators
│   ├── 30_Operator.js
│   ├── 31_Arithmetic_OP.js
│   ├── 32_Modulus_Op.js
│   ├── 33_Expo_op.js
│   ├── 34_IQ.js
│   ├── 35_Comparison_Op.js
│   ├── 36_Comparison_loose.js
│   ├── 37_IQ_Loose_strict.js
│   ├── 38_Confusing_Comparison.js
│   ├── 39_Logical_Op.js
│   ├── 40_String_Con_Op.js
│   ├── 41_Ternary_Op.js
│   ├── 42_Type_Op.js
│   ├── 43_Incre_Decre_Op.js
│   ├── 44_Null_Op.js
│   ├── 45_Post_Increment.js
│   ├── 46_IQ_Increment_D.js
│   ├── 47_Advanced_ID.js
│   ├── Task_01.js
│   └── Task_02.js
├── tests/                                # Playwright test files
├── playwright.config.js                  # Playwright configuration
├── package.json                          # Project dependencies
└── README.md                             # This file
```

## Configuration

Playwright configuration is managed in `playwright.config.js`. Update this file to change default browsers, timeouts, reporters, and other settings.

## Learn More

- [Playwright Documentation](https://playwright.dev/)
- [API Reference](https://playwright.dev/docs/api/class-playwright)
- [MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
