import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <h2>Student Portal</h2>
      <div className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/courses">Courses</NavLink>
        
        {user?.role === 'Student' && <NavLink to="/dashboard">Dashboard</NavLink>}
        {user?.role === 'Admin' && <NavLink to="/admin">Admin Panel</NavLink>}
        
        {!user ? (
          <NavLink to="/login">Login</NavLink>
        ) : (
          <button className="btn-logout" onClick={handleLogout}>Logout ({user.role})</button>
        )}
      </div>
    </nav>
  );
}
