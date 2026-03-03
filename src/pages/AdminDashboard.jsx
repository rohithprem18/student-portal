import { useState } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { useCourses } from '../context/CourseContext';
import { useAuth } from '../context/AuthContext';

export const AddCourse = () => {
  const { addCourse } = useCourses();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ title: '', description: '', duration: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    addCourse(formData);
    navigate('/courses');
  };

  return (
    <div>
      <h3>Add a New Course</h3>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem', maxWidth: '400px' }}>
        <input required type="text" placeholder="Course Title" value={formData.title} onChange={(e) => setFormData({...formData, title: e.target.value})} style={{ padding: '0.5rem' }} />
        <textarea required placeholder="Course Description" value={formData.description} onChange={(e) => setFormData({...formData, description: e.target.value})} style={{ padding: '0.5rem', minHeight: '80px' }} />
        <input required type="text" placeholder="Duration (e.g., 4 Weeks)" value={formData.duration} onChange={(e) => setFormData({...formData, duration: e.target.value})} style={{ padding: '0.5rem' }} />
        <button type="submit" className="btn">Save Course</button>
      </form>
    </div>
  );
};

export const ManageUsers = () => {
  const { allEnrollments } = useAuth();

  return (
    <div>
      <h3>Global Course Enrollments</h3>
      {allEnrollments.length === 0 ? (
        <p style={{ marginTop: '1rem', color: '#7f8c8d' }}>No students have enrolled in any courses yet.</p>
      ) : (
        <div style={{ marginTop: '1rem', overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', background: '#fff', border: '1px solid #ddd' }}>
            <thead>
              <tr style={{ background: '#2c3e50', color: 'white' }}>
                <th style={{ padding: '0.8rem', borderBottom: '1px solid #ddd' }}>Student Username</th>
                <th style={{ padding: '0.8rem', borderBottom: '1px solid #ddd' }}>Enrolled Course</th>
              </tr>
            </thead>
            <tbody>
              {allEnrollments.map((entry, idx) => (
                <tr key={idx}>
                  <td style={{ padding: '0.8rem', borderBottom: '1px solid #ddd' }}><strong>{entry.username}</strong></td>
                  <td style={{ padding: '0.8rem', borderBottom: '1px solid #ddd' }}>{entry.course.title}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default function AdminDashboard() {
  return (
    <div className="container">
      <div className="card">
        <h1>Admin Control Panel</h1>
        <div className="nested-nav">
          <NavLink to="add-course">Add New Course</NavLink>
          <NavLink to="manage-users">Manage Enrollments</NavLink>
        </div>
        <div style={{ padding: '1.5rem', background: '#f9f9f9', borderRadius: '4px' }}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
