# Day 22 – MySQL Fundamentals

## Learning Objectives

- Understand relational database concepts and terminology
- Design normalized database schemas
- Write essential SQL statements (DDL and DML)
- Apply primary keys, foreign keys, and constraints
- Connect MySQL to a Spring Boot application

## Topics Covered

- Relational model: tables, rows, columns
- Data types in MySQL (INT, VARCHAR, TEXT, DATE, BOOLEAN, etc.)
- Primary keys and auto-increment
- Foreign keys and referential integrity
- Normalization (1NF, 2NF, 3NF)
- SQL: CREATE, INSERT, SELECT, UPDATE, DELETE
- WHERE, ORDER BY, LIMIT, GROUP BY
- Spring Boot `application.properties` for MySQL connection

## Hands-On Task

Design and implement a database schema for a simple blog application:
1. Create a `users` table with id, username, email, and created_at
2. Create a `posts` table with id, title, content, author_id (FK), and created_at
3. Create a `comments` table with id, body, post_id (FK), user_id (FK), and created_at
4. Insert sample data and write queries to fetch posts with their authors and comment counts

## Practice / Homework

Write SQL queries to:
- Find all posts by a specific user
- Count comments per post
- Find users who have never posted
- Get the 5 most recent posts with author names

## References

- [MySQL Documentation](https://dev.mysql.com/doc/refman/8.0/en/)
- [SQL Tutorial – W3Schools](https://www.w3schools.com/sql/)
- [Spring Boot MySQL Configuration](https://spring.io/guides/gs/accessing-data-mysql)
