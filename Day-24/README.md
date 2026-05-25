# Day 24 – Frontend-Backend Integration

## Learning Objectives

- Connect a React frontend to a Spring Boot backend
- Configure CORS in Spring Boot
- Implement full CRUD operations across the stack
- Handle API responses and errors in React
- Understand the request/response lifecycle in a full-stack app

## Topics Covered

- CORS (Cross-Origin Resource Sharing) configuration
- `@CrossOrigin` annotation vs global CORS config
- Axios/fetch for API calls from React
- Environment variables for API base URL
- Proxy configuration in Vite
- Full CRUD flow: React form → API call → Spring Controller → Service → Repository → MySQL
- Handling loading, success, and error states in the UI

## Hands-On Task

Connect your React frontend to your Spring Boot backend:
1. Configure CORS in Spring Boot to allow requests from `http://localhost:5173`
2. Create a React service layer with axios for API calls
3. Build a full CRUD interface:
   - List all items (GET)
   - Create new item via form (POST)
   - Edit existing item (PUT)
   - Delete item with confirmation (DELETE)
4. Add loading spinners and error messages for each operation

## Practice / Homework

Add optimistic UI updates to your delete operation — remove the item from the UI immediately, and restore it if the API call fails. Implement a toast notification system for success/error feedback.

## References

- [Spring Boot CORS Configuration](https://spring.io/guides/gs/rest-service-cors)
- [Axios Documentation](https://axios-http.com/docs/intro)
- [Vite Proxy Configuration](https://vite.dev/config/server-options.html#server-proxy)
