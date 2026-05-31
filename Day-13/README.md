# Day 13 – Consuming APIs

## Learning Objectives

- Fetch data from REST APIs using fetch and axios
- Handle loading, success, and error states in the UI
- Implement data fetching patterns in React
- Cancel requests on component unmount
- Build a reusable data-fetching hook

## Topics Covered

- `fetch` API: GET, POST, headers, response handling
- Axios: installation, instance creation, interceptors
- Loading states: spinners, skeletons
- Error handling: try/catch, error boundaries
- `useEffect` for data fetching on mount
- AbortController for request cancellation
- Custom `useFetch` hook pattern
- Optimistic updates and cache invalidation basics

## Hands-On Task

Build a post viewer that fetches data from JSONPlaceholder API:
1. Fetch and display a list of posts from `https://jsonplaceholder.typicode.com/posts`
2. Show a loading spinner while fetching
3. Display an error message if the request fails (simulate with bad URL)
4. Click a post to fetch and show its comments
5. Add a "Create Post" form that POSTs to the API
6. Implement a custom `useFetch(url)` hook that returns `{ data, loading, error }`

## Practice / Homework

Add retry logic to your `useFetch` hook — if a request fails, automatically retry up to 3 times with exponential backoff (1s, 2s, 4s). Show the retry count to the user.

## References

- [Fetch API – MDN](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [Axios Documentation](https://axios-http.com/docs/intro)
- [React Data Fetching Patterns](https://react.dev/reference/react/useEffect#fetching-data-with-effects)

## How to Run

```bash
cd Day-13/starter
npm install
npm run dev
```

Open http://localhost:5173 in your browser.
