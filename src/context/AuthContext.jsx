import { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('portal_user');
    return saved ? JSON.parse(saved) : null;
  });

  // Global enrollments array holding: { username: 'john123', course: { id: 1, title: 'React', ... } }
  const [allEnrollments, setAllEnrollments] = useState(() => {
    const saved = localStorage.getItem('portal_all_enrollments');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    if (user) localStorage.setItem('portal_user', JSON.stringify(user));
    else localStorage.removeItem('portal_user');
  }, [user]);

  useEffect(() => {
    localStorage.setItem('portal_all_enrollments', JSON.stringify(allEnrollments));
  }, [allEnrollments]);

  const login = (role, username) => { 
    setUser({ role, username: username || (role === 'Admin' ? 'Admin' : 'Anonymous Student') }); 
  };
  
  const logout = () => { setUser(null); };

  const enroll = (course) => {
    if (!user) return;
    const isEnrolled = allEnrollments.some(e => e.course.id === course.id && e.username === user.username);
    if (!isEnrolled) {
      setAllEnrollments([...allEnrollments, { username: user.username, course }]);
    }
  };

  const unenroll = (courseId) => {
    if (!user) return;
    setAllEnrollments(allEnrollments.filter(e => !(e.course.id === courseId && e.username === user.username)));
  };

  // Only expose the logged-in student's courses to keep existing pages working
  const enrolledCourses = user ? allEnrollments.filter(e => e.username === user.username).map(e => e.course) : [];

  return (
    <AuthContext.Provider value={{ user, login, logout, enroll, unenroll, enrolledCourses, allEnrollments }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
