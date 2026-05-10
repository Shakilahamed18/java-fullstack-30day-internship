# Day 09 – State & Hooks

## Learning Objectives

- Manage component state with the `useState` hook
- Handle side effects with `useEffect`
- Understand the component lifecycle in functional components
- Implement controlled inputs with state
- Avoid common pitfalls with hooks (stale closures, infinite loops)

## Topics Covered

- `useState`: initializing, updating, and reading state
- State immutability: why never mutate state directly
- Updating objects and arrays in state
- `useEffect`: running side effects, dependency array
- Cleanup functions in `useEffect`
- Component lifecycle: mount, update, unmount
- Rules of hooks (top-level only, React functions only)
- Multiple state variables vs single state object

## Hands-On Task

Build a stopwatch/timer application:
1. Display hours, minutes, seconds in a formatted view
2. Start, Stop, and Reset buttons
3. Use `useState` for the elapsed time and running state
4. Use `useEffect` with `setInterval` for the timer tick
5. Properly clean up the interval on stop/unmount
6. Add a "Lap" feature that records lap times in an array

## Practice / Homework

Build a simple digital clock that displays the current time and updates every second. Add a toggle to switch between 12-hour and 24-hour format using state.

## References

- [useState – React Docs](https://react.dev/reference/react/useState)
- [useEffect – React Docs](https://react.dev/reference/react/useEffect)
- [Synchronizing with Effects](https://react.dev/learn/synchronizing-with-effects)
