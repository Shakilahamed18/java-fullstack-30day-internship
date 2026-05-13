import { useNavigate } from 'react-router-dom'

function Login({ onLogin }) {
  const navigate = useNavigate()
  const handleSubmit = (e) => { e.preventDefault(); onLogin(); navigate('/dashboard') }

  return (
    <div>
      <h1>Login</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <input placeholder="Username" defaultValue="admin" />
        <input type="password" placeholder="Password" defaultValue="password" />
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login
