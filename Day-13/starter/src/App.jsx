import { useState } from 'react'
import PostList from './components/PostList'
import PostDetail from './components/PostDetail'

function App() {
  const [selectedPostId, setSelectedPostId] = useState(null)

  return (
    <div className="app">
      <h1>Posts Viewer</h1>
      {selectedPostId ? (
        <PostDetail postId={selectedPostId} onBack={() => setSelectedPostId(null)} />
      ) : (
        <PostList onSelect={setSelectedPostId} />
      )}
    </div>
  )
}

export default App
