import { useParams, useNavigate } from 'react-router-dom';
import { useCourses } from '../context/CourseContext';
import { useAuth } from '../context/AuthContext';

export default function CourseDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { courses } = useCourses();
  const { user, enroll, enrolledCourses } = useAuth();
  
  const course = courses.find(c => c.id === parseInt(id));

  if (!course) {
    return <div className="container card alert"><h2>Course not found!</h2></div>;
  }

  // Check if student is already enrolled
  const isEnrolled = enrolledCourses?.some(c => c.id === course.id);

  const handleEnroll = () => {
    enroll(course);
    alert(`Success! You have enrolled in: ${course.title}`);
  };

  return (
    <div className="container">
      <div className="card">
        <h1>{course.title}</h1>
        <br />
        <p><strong>Description:</strong> {course.description}</p>
        <br />
        <p><strong>Duration:</strong> {course.duration}</p>
        <br />
        <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
          <button className="btn" onClick={() => navigate('/courses')}>Back to Courses</button>
          
          {/* Only show Enroll button for Students */}
          {user?.role === 'Student' && (
            <button 
              className="btn" 
              style={{ background: isEnrolled ? '#27ae60' : '#e67e22', cursor: isEnrolled ? 'not-allowed' : 'pointer' }}
              onClick={handleEnroll}
              disabled={isEnrolled}
            >
              {isEnrolled ? ' Already Enrolled' : 'Enroll Now'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
