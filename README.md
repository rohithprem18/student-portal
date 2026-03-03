# Student Portal - React Router v6 Assignment

![React](https://img.shields.io/badge/React-18-blue?logo=react)
![React Router](https://img.shields.io/badge/React_Router-v6-red?logo=reactrouter)
![Vite](https://img.shields.io/badge/Vite-Build_Tool-purple?logo=vite)
![Status](https://img.shields.io/badge/Status-Completed-brightgreen)

---

## Project Overview

The Student Portal is a responsive web application built with React and React Router v6. It demonstrates core routing concepts including basic navigation, dynamic routing, protected routes, nested routes, and programmatic redirection.

---

## Features Implemented

- **Navigation:** Built using `Link` and `NavLink` (no traditional anchor tags).
- **Dynamic Routing (`/courses/:id`):** Displays specific course details using the `useParams()` hook.
- **Role-Based Authentication:** Users can log in as a `Student` or `Admin`.
- **Programmatic Redirection:** Handled via the `useNavigate()` hook upon login.

### Protected Routes
- Unauthenticated users are redirected to the Login page.
- Users attempting to access the wrong dashboard receive an "Unauthorized Access" message.

### Nested Routing (via `<Outlet />`)
- **Student Dashboard**
  - Profile
  - Enrolled Courses
- **Admin Dashboard**
  - Add Course
  - Manage Enrollments

- **404 Handling:** A custom "Page Not Found" component for invalid URLs.
- **Data Persistence:** Uses LocalStorage to save courses, user sessions, and enrollments across page reloads.

---

## Screenshots

### 1. Home Page & Navigation Bar
![Home Page](image.png)

### 2. Login System & Role Selection
![Login Page](image-1.png)

### 3. Courses Page (List of 5 or More Courses)
![Courses Page](image-8.png)

### 4. Dynamic Routing (Course Details)
![Course Details](image-3.png)

### 5. Student Dashboard (Protected & Nested Routes)
![Student Dashboard](image-4.png)
![alt text](image-9.png)
![alt text](image-10.png)

### 6. Admin Dashboard (Protected & Nested Routes)
![Admin Dashboard](image-5.png)
![alt text](image-11.png)
![alt text](image-12.png)

### 7. Unauthorized Access Handling

Displays an error if a logged-in user tries to access a route not permitted for their role (for example, Student trying to access `/admin`).

![Unauthorized Access](image-6.png)

### 8. Invalid URL Handling (404 Page Not Found)
![404 Page](image-7.png)

## How to Run the Project

### Prerequisites
- Node.js (v16 or higher recommended)
- npm (comes with Node.js)

### Installation Steps

1. Clone the repository:

```bash
git clone https://github.com/rohithprem18/student-portal
```

2. Navigate into the project directory:

```bash
cd student-portal
```

3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm run dev
```

5. Open your browser and visit:

```
http://localhost:5173
```

---

## Build for Production

To create an optimized production build:

```bash
npm run build
```

---

## Conclusion

This project successfully demonstrates practical implementation of React Router v6 concepts including protected routes, nested routing, dynamic routing, and role-based access control in a structured and scalable manner.