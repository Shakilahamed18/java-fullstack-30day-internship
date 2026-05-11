# Day 10 – Lists & Forms

## Learning Objectives

- Render dynamic lists with `.map()` and proper keys
- Implement conditional rendering patterns
- Build controlled form components
- Handle form submission and validation
- Manage form state for multiple inputs

## Topics Covered

- Rendering lists: `.map()` with `key` prop
- Why keys matter for React's reconciliation
- Conditional rendering: ternary, `&&`, early return
- Controlled components: input value tied to state
- Handling multiple form inputs with a single handler
- Form submission: `onSubmit`, `preventDefault()`
- Basic client-side validation patterns
- Select, checkbox, radio button handling in React

## Hands-On Task

Build a contact manager application:
1. Display a list of contacts (name, email, phone) from state
2. Add a form to create new contacts with validation:
   - Name: required, minimum 2 characters
   - Email: required, valid email format
   - Phone: optional, numeric only
3. Show validation errors below each field
4. Conditionally render "No contacts yet" when the list is empty
5. Add a delete button for each contact
6. Add a search/filter input that filters the displayed list in real-time

## Practice / Homework

Add an "edit" feature to the contact manager: clicking an edit button populates the form with that contact's data, changes the submit button to "Update", and saves the changes back to the list.

## References

- [Rendering Lists – React Docs](https://react.dev/learn/rendering-lists)
- [Responding to Events – React Docs](https://react.dev/learn/responding-to-events)
- [Controlled Components – React Docs](https://react.dev/learn/sharing-state-between-components)
