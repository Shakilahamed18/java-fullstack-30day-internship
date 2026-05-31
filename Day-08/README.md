# Day 08 – React Fundamentals

## Learning Objectives

- Understand what React is and why it's used
- Set up a React project with Vite
- Create functional components with JSX
- Pass data between components using props
- Compose UI from reusable component building blocks

## Topics Covered

- React overview: virtual DOM, component-based architecture
- Vite: project scaffolding, dev server, hot module replacement
- JSX syntax: expressions, attributes, fragments
- Functional components: declaration, naming conventions
- Props: passing data, prop types, default props, children
- Component composition and nesting
- Rendering expressions and conditional content in JSX
- Project structure best practices

## Hands-On Task

Create a new React project with Vite and build a profile card application:
1. Initialize with `npm create vite@latest my-app -- --template react`
2. Create components: `App`, `ProfileCard`, `Avatar`, `Badge`
3. `ProfileCard` receives props: name, role, avatar URL, skills array
4. `Avatar` displays the image with a fallback
5. `Badge` renders each skill as a styled tag
6. Render a list of 3-4 profile cards with different data

## Practice / Homework

Extract the profile card into its own file and create a `ProfileList` component that accepts an array of profile data and renders multiple `ProfileCard` components. Experiment with passing different props.

## References

- [React Official Documentation](https://react.dev/)
- [Vite Getting Started](https://vite.dev/guide/)
- [JSX in Depth – React Docs](https://react.dev/learn/writing-markup-with-jsx)

## How to Run

```bash
cd Day-08/starter
npm install
npm run dev
```

Open http://localhost:5173 in your browser.
