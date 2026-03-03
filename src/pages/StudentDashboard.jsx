import { NavLink, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export const Profile = () => {
  const { user } = useAuth();
  return (
    <div>
      <h3>My Profile</h3>
      <p style={{ marginTop: '1rem' }}><strong>Role:</strong> {user.role}</p>
      <p><strong>Username:</strong> {user.username}</p>
      <p><strong>Status:</strong> Active</p>
    </div>
  );
};

export const MyCourses = () => {
  const { enrolledCourses, unenroll } = useAuth();

  return (
    <div>
      <h3>Enrolled Courses</h3>
      {enrolledCourses.length === 0 ? (
        <p style={{ marginTop: '1rem', color: '#7f8c8d' }}>You are not enrolled in any courses yet.</p>
      ) : (
        <ul style={{ marginTop: '1rem', padding: 0, listStyle: 'none' }}>
          {enrolledCourses.map(course => (
            <li key={course.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#fff', padding: '1rem', marginBottom: '0.5rem', borderRadius: '4px', border: '1px solid #ddd' }}>
              <span><strong>{course.title}</strong> - {course.duration}</span>
              <button 
                onClick={() => unenroll(course.id)} 
                style={{ background: '#e74c3c', color: 'white', border: 'none', padding: '0.4rem 0.8rem', borderRadius: '4px', cursor: 'pointer' }}
              >
                Unenroll
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default function StudentDashboard() {
  return (
    <div className="container">
      <div className="card">
        <h1>Student Dashboard</h1>
        <div className="nested-nav">
          <NavLink to="profile">My Profile</NavLink>
          <NavLink to="my-courses">Enrolled Courses</NavLink>
        </div>
        <div style={{ padding: '1.5rem', background: '#f9f9f9', borderRadius: '4px' }}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
