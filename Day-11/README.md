# Day 11 – Composition

## Learning Objectives

- Lift state up to share data between sibling components
- Create reusable, composable component patterns
- Use the Context API to avoid prop drilling
- Understand when to use context vs props vs state management
- Design component interfaces for maximum reusability

## Topics Covered

- Lifting state up: shared state in parent components
- Component composition patterns: container/presentational
- Children prop and render props
- `useContext` hook and `createContext`
- Context Provider and Consumer pattern
- When to use Context (theme, auth, locale) vs when not to
- Custom hooks for shared logic

## Hands-On Task

Build a shopping cart with context:
1. Create a `CartContext` with `CartProvider`
2. Implement actions: add item, remove item, update quantity, clear cart
3. Build components: `ProductList`, `ProductCard`, `Cart`, `CartItem`, `CartSummary`
4. `ProductList` and `Cart` are siblings — both access cart state via context
5. `CartSummary` shows total items and total price
6. Add a theme toggle (light/dark) using a separate `ThemeContext`

## Practice / Homework

Extract the cart logic into a custom hook `useCart()` that encapsulates all cart operations. Components should only call `useCart()` instead of using `useContext` directly.

## References

- [Sharing State Between Components – React Docs](https://react.dev/learn/sharing-state-between-components)
- [useContext – React Docs](https://react.dev/reference/react/useContext)
- [Passing Data Deeply with Context](https://react.dev/learn/passing-data-deeply-with-context)

## How to Run

```bash
cd Day-11/starter
npm install
npm run dev
```

Open http://localhost:5173 in your browser.
