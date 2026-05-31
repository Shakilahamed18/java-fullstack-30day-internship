# Day 17 – REST Controllers

## Learning Objectives

- Build RESTful API endpoints with Spring Boot
- Handle different HTTP methods (GET, POST, PUT, DELETE)
- Work with path variables, query parameters, and request bodies
- Return appropriate HTTP status codes
- Structure API responses consistently

## Topics Covered

- `@RestController` vs `@Controller`
- `@RequestMapping` and method-specific annotations (`@GetMapping`, `@PostMapping`, etc.)
- `@PathVariable` for URL path segments
- `@RequestParam` for query string parameters
- `@RequestBody` for JSON request bodies
- `ResponseEntity` for full control over HTTP responses
- HTTP status codes: 200, 201, 204, 400, 404, 500
- JSON serialization with Jackson

## Hands-On Task

Build a Product REST API with full CRUD:
1. `GET /api/products` — list all products (with optional search query param)
2. `GET /api/products/{id}` — get single product by ID
3. `POST /api/products` — create a new product (accept JSON body)
4. `PUT /api/products/{id}` — update an existing product
5. `DELETE /api/products/{id}` — delete a product
6. Return proper status codes (201 for create, 204 for delete, 404 for not found)
7. Use an in-memory `ArrayList` for storage (no database yet)

## Practice / Homework

Add pagination support to the `GET /api/products` endpoint. Accept `page` and `size` query parameters and return a paginated response with metadata (total items, total pages, current page).

## References

- [Spring Web MVC – Controllers](https://docs.spring.io/spring-framework/reference/web/webmvc/mvc-controller.html)
- [Building REST Services with Spring](https://spring.io/guides/tutorials/rest)
- [ResponseEntity – Baeldung](https://www.baeldung.com/spring-response-entity)

## How to Run

```bash
cd Day-17/starter
mvn spring-boot:run
```

- API runs at http://localhost:8080
- Test endpoints:
  - `curl http://localhost:8080/api/products` → List all products
  - `curl http://localhost:8080/api/products/1` → Get product by ID
  - `curl -X POST http://localhost:8080/api/products -H "Content-Type: application/json" -d '{"name":"Mouse","price":29.99,"category":"Electronics"}'` → Create product
  - `curl -X DELETE http://localhost:8080/api/products/1` → Delete product
