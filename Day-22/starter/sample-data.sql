USE blog_db;

INSERT INTO users (username, email, password_hash) VALUES
('alice', 'alice@example.com', '$2a$10$placeholder1'),
('bob', 'bob@example.com', '$2a$10$placeholder2'),
('charlie', 'charlie@example.com', '$2a$10$placeholder3');

INSERT INTO posts (title, content, author_id) VALUES
('Getting Started with Spring Boot', 'Spring Boot makes it easy...', 1),
('React Hooks Explained', 'Hooks let you use state...', 1),
('MySQL Best Practices', 'Always consider normalization...', 2),
('REST API Design', 'A well-designed REST API...', 3);

INSERT INTO comments (body, post_id, user_id) VALUES
('Great article!', 1, 2),
('Very helpful, thanks!', 1, 3),
('Learned a lot.', 2, 2),
('More on useEffect please?', 2, 3),
('So important!', 3, 1);
