import { createContext, useState, useContext, useEffect } from 'react';
import { coursesData as initialCourses } from '../data/courses';

const CourseContext = createContext();

export const CourseProvider = ({ children }) => {
  // Load from local storage, or fallback to default data
  const [courses, setCourses] = useState(() => {
    const saved = localStorage.getItem('portal_courses');
    return saved ? JSON.parse(saved) : initialCourses;
  });

  // Save to local storage whenever courses change
  useEffect(() => {
    localStorage.setItem('portal_courses', JSON.stringify(courses));
  }, [courses]);

  const addCourse = (newCourse) => {
    setCourses([{ id: Date.now(), ...newCourse }, ...courses]); 
  };

  return (
    <CourseContext.Provider value={{ courses, addCourse }}>
      {children}
    </CourseContext.Provider>
  );
};

export const useCourses = () => useContext(CourseContext);
