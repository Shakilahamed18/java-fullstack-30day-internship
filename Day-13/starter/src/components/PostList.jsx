import useFetch from '../hooks/useFetch'

function PostList({ onSelect }) {
  const { data: posts, loading, error } = useFetch('https://jsonplaceholder.typicode.com/posts')

  if (loading) return <div className="loading">Loading posts...</div>
  if (error) return <div className="error">Error: {error}</div>

  return (
    <ul className="post-list">
      {posts.slice(0, 20).map(post => (
        <li key={post.id} className="post-item" onClick={() => onSelect(post.id)}>
          <h3>{post.title}</h3>
          <p>{post.body.substring(0, 100)}...</p>
        </li>
      ))}
    </ul>
  )
}

export default PostList
