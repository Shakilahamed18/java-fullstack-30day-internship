# Day 29 – Capstone Build

## Learning Objectives

- Design and build a complete full-stack application from scratch
- Apply all concepts learned throughout the internship
- Implement authentication, CRUD operations, and relationships
- Practice project planning and time management
- Write clean, maintainable, and well-structured code

## Topics Covered

- Project planning and feature scoping
- Database schema design with relationships
- Full-stack architecture (React + Spring Boot + MySQL)
- Authentication and authorization with JWT
- RESTful API design
- Responsive UI with React and Tailwind CSS
- Error handling and validation across the stack

## Hands-On Task

Build a complete application — choose one:

**Option A: Task Management App**
- User registration and login
- Create, edit, delete, and organize tasks
- Task categories/labels with ManyToMany relationships
- Due dates, priority levels, and status tracking
- Filter and search tasks

**Option B: Blog Platform**
- User authentication with roles (author, reader, admin)
- Create, edit, publish, and delete posts
- Comments system with nested replies
- Tags/categories for posts
- Search and pagination

**Requirements for either option:**
- At least 3 database tables with relationships
- JWT authentication
- Full CRUD on the primary resource
- Input validation and error handling
- Responsive React frontend

## Practice / Homework

Write a brief technical document (1-2 pages) describing your application's architecture, database schema, API endpoints, and any design decisions you made. This will be used for your Day 30 presentation.

## References

- [Spring Boot Best Practices](https://docs.spring.io/spring-boot/reference/)
- [React Documentation](https://react.dev/)
- [REST API Design Best Practices](https://restfulapi.net/)

## How to Run the Capstone (Full-Stack Task Manager)

This is a complete full-stack application with React frontend and Spring Boot backend communicating via REST API.

### Prerequisites
- Java 17+
- Maven
- Node.js 18+

### Step 1: Start the Backend

```bash
cd Day-29/capstone/backend
mvn spring-boot:run
```

Wait until you see `Started TaskManagerApplication`. Backend runs at http://localhost:8080.

**Backend URLs:**
- API: http://localhost:8080/api/tasks, http://localhost:8080/api/categories
- Swagger UI: http://localhost:8080/swagger-ui.html
- H2 Console: http://localhost:8080/h2-console (JDBC URL: `jdbc:h2:mem:taskdb`, user: `sa`)

### Step 2: Start the Frontend (in a new terminal)

```bash
cd Day-29/capstone/frontend
npm install
npm run dev
```

Frontend runs at http://localhost:5173.

### Step 3: Open the App

Go to http://localhost:5173 in your browser.

**What you can do:**
- View pre-seeded tasks with categories, priorities, and due dates
- Create new tasks with the "+ New Task" button
- Edit tasks by clicking "Edit"
- Delete tasks with confirmation
- Click the circle icon to cycle status: To Do → In Progress → Done
- Filter tasks by status, priority, or category
- Search tasks by title or description
- Manage categories (add/delete) from the Categories page

### Architecture

```
React (localhost:5173)  →  Vite Proxy  →  Spring Boot (localhost:8080)  →  H2 Database
     |                                          |
  Axios HTTP                              REST Controllers
  React Router                            Service Layer
  Tailwind CSS                            JPA Repositories
```
