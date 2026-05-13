# Day 12 – Routing

## Learning Objectives

- Set up client-side routing with React Router
- Create nested routes and dynamic route parameters
- Implement protected routes for authenticated users
- Handle navigation programmatically
- Build layouts with shared navigation

## Topics Covered

- React Router v6: `BrowserRouter`, `Routes`, `Route`
- `Link` and `NavLink` for navigation
- Dynamic segments: `/users/:id` and `useParams`
- Nested routes and `<Outlet />`
- `useNavigate` for programmatic navigation
- Protected/private routes pattern
- 404 catch-all routes
- `useLocation` and `useSearchParams`

## Hands-On Task

Build a multi-page application with React Router:
1. Pages: Home, Products (list), Product Detail, About, Login, Dashboard
2. Shared layout with navigation bar and footer using `<Outlet />`
3. Product Detail uses dynamic route: `/products/:id`
4. Dashboard is a protected route — redirects to Login if not authenticated
5. Login page sets an `isAuthenticated` state (mock auth)
6. Add a 404 "Not Found" page for unmatched routes
7. Active nav links are highlighted with `NavLink`

## Practice / Homework

Add search functionality: when the user searches on the Products page, update the URL query string (`/products?search=react`). On page reload, read the search term from the URL and filter results accordingly.

## References

- [React Router Documentation](https://reactrouter.com/en/main)
- [React Router Tutorial](https://reactrouter.com/en/main/start/tutorial)
- [useParams – React Router](https://reactrouter.com/en/main/hooks/use-params)
