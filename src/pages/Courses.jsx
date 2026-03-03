import { Link } from 'react-router-dom';
import { useCourses } from '../context/CourseContext';
import { useAuth } from '../context/AuthContext';

export default function Courses() {
  const { courses } = useCourses();
  const { user, enroll, enrolledCourses } = useAuth();

  const handleEnroll = (course) => {
    enroll(course);
    alert(`Success! You enrolled in: ${course.title}`);
  };

  return (
    <div className="container">
      <h1>Available Courses</h1>
      <br />
      <div className="course-grid">
        {courses.map(course => {
          // Check if the student is already enrolled in this specific course
          const isEnrolled = enrolledCourses?.some(c => c.id === course.id);

          return (
            <div key={course.id} className="course-card">
              <h3>{course.title}</h3>
              <p style={{ marginTop: '0.5rem', color: '#666' }}>{course.duration}</p>
              
              <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem', flexWrap: 'wrap' }}>
                <Link to={`/courses/${course.id}`} className="btn">View Details</Link>
                
                {/* Only show Enroll button on the grid if logged in as Student */}
                {user?.role === 'Student' && (
                  <button 
                    className="btn" 
                    style={{ 
                      background: isEnrolled ? '#27ae60' : '#e67e22', 
                      cursor: isEnrolled ? 'not-allowed' : 'pointer',
                      border: 'none'
                    }}
                    onClick={() => handleEnroll(course)}
                    disabled={isEnrolled}
                  >
                    {isEnrolled ? ' Enrolled' : 'Enroll Now'}
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
