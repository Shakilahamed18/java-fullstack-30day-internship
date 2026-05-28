# Day 27 – Advanced Features

## Learning Objectives

- Implement server-side pagination and sorting
- Build search and filtering functionality
- Handle file uploads in Spring Boot
- Serve and display uploaded files in React
- Optimize API responses for large datasets

## Topics Covered

- Spring Data `Pageable` and `Page<T>`
- `@RequestParam` for sorting and filtering
- Specification API for dynamic queries
- `@RequestPart` and `MultipartFile` for file uploads
- File storage strategies (local filesystem, cloud)
- Serving static files from Spring Boot
- React file upload with preview
- Debounced search input in React

## Hands-On Task

Add advanced features to your application:
1. Implement paginated listing with page size, page number, and sort parameters
2. Add a search endpoint that filters by multiple fields (title, author, date range)
3. Build a file upload feature:
   - Backend: accept file uploads, validate type/size, store on disk
   - Frontend: file input with drag-and-drop, preview before upload, progress bar
4. Display uploaded images/files in the frontend

## Practice / Homework

Implement a "export to CSV" feature that exports filtered data as a downloadable CSV file. Add a button in the React UI that triggers the download.

## References

- [Spring Data Pagination and Sorting](https://docs.spring.io/spring-data/jpa/reference/repositories/query-methods-details.html#repositories.special-parameters)
- [Spring Boot File Upload](https://spring.io/guides/gs/uploading-files)
- [JPA Specifications](https://docs.spring.io/spring-data/jpa/reference/jpa/specifications.html)
