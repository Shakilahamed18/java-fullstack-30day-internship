# Day 20 – DTOs & Validation

## Learning Objectives

- Understand why DTOs are used instead of exposing entities directly
- Create request and response DTOs
- Apply Bean Validation annotations for input validation
- Map between entities and DTOs
- Return clean, consistent API responses

## Topics Covered

- DTO pattern: separating API contract from internal model
- Request DTOs vs Response DTOs
- Bean Validation: `@NotNull`, `@NotBlank`, `@Size`, `@Min`, `@Max`, `@Email`, `@Pattern`
- `@Valid` annotation in controller parameters
- `BindingResult` for accessing validation errors
- Manual mapping vs MapStruct/ModelMapper
- Consistent API response envelope (data, message, errors)
- Hiding sensitive fields from API responses

## Hands-On Task

Add DTOs and validation to your Product API:
1. Create `ProductRequestDTO` with validation annotations:
   - name: required, 2-100 characters
   - description: optional, max 500 characters
   - price: required, positive number
   - category: required
2. Create `ProductResponseDTO` (excludes internal fields)
3. Create a mapping utility to convert between entity and DTOs
4. Update controller to accept `@Valid ProductRequestDTO`
5. Handle validation errors gracefully — return field-level error messages
6. Create a generic `ApiResponse<T>` wrapper for all responses

## Practice / Homework

Create a `UserRegistrationDTO` with validations: username (3-20 chars, alphanumeric), email (valid format), password (min 8 chars, must contain number and special char). Write tests that verify each validation rule.

## References

- [Bean Validation – Baeldung](https://www.baeldung.com/spring-boot-bean-validation)
- [Jakarta Bean Validation Spec](https://jakarta.ee/specifications/bean-validation/)
- [DTO Pattern – Baeldung](https://www.baeldung.com/java-dto-pattern)
