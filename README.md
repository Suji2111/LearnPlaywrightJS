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
