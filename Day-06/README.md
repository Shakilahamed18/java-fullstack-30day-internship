# Day 06 – DOM & The Web

## Learning Objectives

- Select and manipulate DOM elements with JavaScript
- Handle user events and implement event delegation
- Understand the HTTP protocol and request/response cycle
- Differentiate between REST principles and common HTTP methods
- Parse and create JSON data

## Topics Covered

- DOM tree structure and node types
- Selecting elements: `getElementById`, `querySelector`, `querySelectorAll`
- Manipulating elements: `textContent`, `innerHTML`, `classList`, `setAttribute`
- Creating/removing elements: `createElement`, `appendChild`, `remove()`
- Events: `addEventListener`, event object, bubbling/capturing
- Event delegation pattern
- HTTP basics: methods (GET, POST, PUT, DELETE), status codes, headers
- REST principles: resources, endpoints, statelessness
- JSON: `JSON.parse()`, `JSON.stringify()`, data interchange format

## Hands-On Task

Build an interactive to-do list entirely with vanilla JavaScript:
1. Add new tasks via an input field and button (or Enter key)
2. Mark tasks as complete (strikethrough + checkbox)
3. Delete tasks with a remove button
4. Filter tasks: All / Active / Completed
5. Display a count of remaining tasks
6. Use event delegation on the task list container

No frameworks — pure DOM manipulation only.

## Practice / Homework

Using the browser's `fetch` API, make a GET request to `https://jsonplaceholder.typicode.com/posts`, parse the JSON response, and dynamically render the first 10 post titles as a list in the DOM.

## References

- [MDN DOM Introduction](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)
- [MDN Event Reference](https://developer.mozilla.org/en-US/docs/Web/Events)
- [HTTP Overview – MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview)
