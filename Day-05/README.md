# Day 05 – Modern JavaScript ES6+

## Learning Objectives

- Use arrow functions and understand lexical `this`
- Apply destructuring for arrays and objects
- Work with ES6 modules (import/export)
- Handle asynchronous operations with Promises and async/await
- Use template literals, spread/rest operators, and default parameters

## Topics Covered

- Arrow functions: syntax, implicit return, lexical `this`
- Destructuring: arrays, objects, nested, default values
- Spread operator (`...`) for arrays and objects
- Rest parameters in functions
- Template literals and tagged templates
- Default and named function parameters
- ES6 Modules: `export`, `import`, named vs default exports
- Promises: creation, `.then()`, `.catch()`, `Promise.all()`
- `async/await`: syntax, error handling with try/catch
- Optional chaining (`?.`) and nullish coalescing (`??`)

## Hands-On Task

Refactor the Day 04 student manager to use modern ES6+ features:
1. Convert all functions to arrow functions where appropriate
2. Use destructuring in function parameters and return values
3. Split the code into modules (e.g., `students.js`, `utils.js`, `index.js`)
4. Add an async function that simulates fetching student data (use `setTimeout` wrapped in a Promise)
5. Use `Promise.all` to "fetch" multiple students concurrently
6. Apply optional chaining for safe property access

## Practice / Homework

Create an async utility module that provides: `delay(ms)`, `retry(fn, attempts)`, and `timeout(promise, ms)`. Write tests for each using `async/await`.

## References

- [ES6 Features Overview](https://es6-features.org/)
- [MDN async/await](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Promises)
- [JavaScript Modules – MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
