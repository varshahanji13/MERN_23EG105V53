# BLOGAPP

A full-stack Blog Application built using the MERN Stack (MongoDB, Express.js, React.js, Node.js).  
The application allows users to register, login, read blogs, create articles, manage profiles, and perform role-based operations for users, authors, and admins.

---

# Features

## User Features
- User Registration & Login
- JWT Authentication
- Read Blog Articles
- View Single Article
- User Profile Management
- Protected Routes

## Author Features
- Create New Articles
- Edit Existing Articles
- Manage Personal Blogs
- Author Profile

## Admin Features
- Manage Users & Authors
- Authorization Middleware
- Secure API Access

## Additional Features
- Image Upload using Cloudinary
- File Upload using Multer
- REST API Architecture
- Responsive Frontend UI
- Error Handling

---

# Tech Stack

## Frontend
- React.js
- Vite
- Axios
- React Router
- CSS

## Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- Multer
- Cloudinary

---

# Project Structure

```bash
BLOGAPP
│
├── Backend
│   ├── APIs
│   ├── config
│   ├── middlewares
│   ├── models
│   ├── services
│   ├── server.js
│   └── .env
│
├── Frontend
│   ├── public
│   ├── src
│   │   ├── assets
│   │   ├── components
│   │   ├── store
│   │   ├── styles
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── vite.config.js
