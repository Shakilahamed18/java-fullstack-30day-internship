-- Practice queries for Day 22

-- All posts by a specific user
SELECT p.title, p.created_at FROM posts p
JOIN users u ON p.author_id = u.id WHERE u.username = 'alice';

-- Count comments per post
SELECT p.title, COUNT(c.id) as comment_count FROM posts p
LEFT JOIN comments c ON c.post_id = p.id GROUP BY p.id, p.title;

-- Users who never posted
SELECT u.username FROM users u
LEFT JOIN posts p ON p.author_id = u.id WHERE p.id IS NULL;

-- 5 most recent posts with author
SELECT p.title, u.username, p.created_at FROM posts p
JOIN users u ON p.author_id = u.id ORDER BY p.created_at DESC LIMIT 5;
