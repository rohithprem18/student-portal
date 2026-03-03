import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Login() {
  const [role, setRole] = useState('Student');
  const [username, setUsername] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    login(role, username);
    if (role === 'Student') {
      navigate('/dashboard');
    } else if (role === 'Admin') {
      navigate('/admin');
    }
  };

  return (
    <div className="container">
      <div className="card login-form">
        <h2>System Login</h2>
        <form onSubmit={handleLogin} style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
          <label>Select Role:</label>
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="Student">Student</option>
            <option value="Admin">Admin</option>
          </select>
          <label>Username:</label>
          <input 
            required 
            type="text" 
            placeholder="e.g. john_doe" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            style={{ padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc', fontSize: '1rem' }} 
          />
          <button type="submit" className="btn">Login</button>
        </form>
      </div>
    </div>
  );
}
