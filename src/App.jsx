import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';

import { Home, About, NotFound, Unauthorized } from './pages/BasicPages';
import Login from './pages/Login';
import Courses from './pages/Courses';
import CourseDetails from './pages/CourseDetails';

import StudentDashboard, { Profile, MyCourses } from './pages/StudentDashboard';
import AdminDashboard, { AddCourse, ManageUsers } from './pages/AdminDashboard';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:id" element={<CourseDetails />} />
        <Route path="/unauthorized" element={<Unauthorized />} />

        {/* Protected Routes - Student */}
        <Route element={<ProtectedRoute allowedRole="Student" />}>
          <Route path="/dashboard" element={<StudentDashboard />}>
            <Route index element={<p>Welcome to your dashboard. Please select an option above.</p>} />
            <Route path="profile" element={<Profile />} />
            <Route path="my-courses" element={<MyCourses />} />
          </Route>
        </Route>

        {/* Protected Routes - Admin */}
        <Route element={<ProtectedRoute allowedRole="Admin" />}>
          <Route path="/admin" element={<AdminDashboard />}>
            <Route index element={<p>Welcome, Admin. System operations ready.</p>} />
            <Route path="add-course" element={<AddCourse />} />
            <Route path="manage-users" element={<ManageUsers />} />
          </Route>
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
