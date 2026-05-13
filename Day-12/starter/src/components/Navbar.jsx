import { NavLink } from 'react-router-dom'

function Navbar({ isAuthenticated, onLogout }) {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/products">Products</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/dashboard">Dashboard</NavLink>
      {isAuthenticated ? <a href="#" onClick={onLogout}>Logout</a> : <NavLink to="/login">Login</NavLink>}
    </nav>
  )
}

export default Navbar
