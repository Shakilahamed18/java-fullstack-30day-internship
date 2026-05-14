import useFetch from '../hooks/useFetch'

function PostDetail({ postId, onBack }) {
  const { data: post, loading: loadingPost } = useFetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
  const { data: comments, loading: loadingComments } = useFetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)

  if (loadingPost) return <div className="loading">Loading post...</div>

  return (
    <div className="post-detail">
      <button className="back-btn" onClick={onBack}>← Back to Posts</button>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <div className="comments">
        <h3>Comments</h3>
        {loadingComments ? <p>Loading comments...</p> : comments?.map(c => (
          <div key={c.id} className="comment">
            <div className="author">{c.name}</div>
            <div className="body">{c.body}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PostDetail
