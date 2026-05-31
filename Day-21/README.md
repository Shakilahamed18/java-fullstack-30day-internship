# Day 21 – Error Handling & Testing

## Learning Objectives

- Implement global exception handling in Spring Boot
- Configure structured logging with SLF4J and Logback
- Document APIs using Swagger/OpenAPI
- Test REST endpoints with Postman
- Write meaningful error responses for API consumers

## Topics Covered

- `@ControllerAdvice` and `@ExceptionHandler`
- Custom exception classes
- HTTP status codes and error response bodies
- SLF4J logging levels and best practices
- Springdoc OpenAPI / Swagger UI setup
- Postman collections and environment variables

## Hands-On Task

Build a global exception handler for your Spring Boot application that:
1. Catches `ResourceNotFoundException` and returns 404 with a JSON error body
2. Catches `ValidationException` and returns 400 with field-level errors
3. Catches all unexpected exceptions and returns 500 with a generic message
4. Logs each exception with appropriate log levels

Add Swagger UI to your application and verify all endpoints are documented.

## Practice / Homework

Create a Postman collection that tests all your API endpoints, including cases that trigger each custom exception. Export the collection as JSON and add it to your project.

## References

- [Spring Boot Exception Handling](https://spring.io/blog/2013/11/01/exception-handling-in-spring-mvc)
- [Springdoc OpenAPI](https://springdoc.org/)
- [SLF4J Manual](https://www.slf4j.org/manual.html)

## How to Run

```bash
cd Day-21/starter
mvn spring-boot:run
```

- API runs at http://localhost:8080
- Swagger UI: http://localhost:8080/swagger-ui.html (interactive API docs)
- H2 Console: http://localhost:8080/h2-console
- Test error handling:
  - `curl http://localhost:8080/api/products/999` → 404 with structured error response
  - `curl http://localhost:8080/api/products` → 200 with product list
