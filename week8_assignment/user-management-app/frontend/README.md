# User Management App

A full-stack User Management application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). This application allows users to create, view, update, and delete user records.

## Features

- Add new users
- View all users
- Update user details
- Delete users
- REST API integration
- MongoDB database connectivity
- Responsive user interface
- Backend deployment on Render
- Frontend deployment on Vercel

## Tech Stack

### Frontend
- React.js
- HTML
- CSS
- JavaScript
- Bootstrap (if used)

### Backend
- Node.js
- Express.js

### Database
- MongoDB Atlas

### Deployment
- Render (Backend)
- Vercel (Frontend)

## Project Structure

```text
user-management-app/
│
├── backend/
│   ├── server.js
│   ├── package.json
│   ├── routes/
│   ├── models/
│   └── .env
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
└── README.md
```

## Installation

### Clone repository

```bash
git clone https://github.com/varshahanji13/user-management-app.git
```

Move into project directory:

```bash
cd user-management-app
```

## Backend Setup

Move to backend:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Create `.env` file:

```env
PORT=4000
MONGO_URI=your_mongodb_connection_string
```

Start backend:

```bash
npm start
```

## Frontend Setup

Open another terminal:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Run frontend:

```bash
npm run dev
```

For Create React App:

```bash
npm start
```

## API Endpoints

### Get all users

```http
GET /user-api/users
```

### Add user

```http
POST /user-api/users
```

### Update user

```http
PUT /user-api/users/:id
```

### Delete user

```http
DELETE /user-api/users/:id
```


## Deployment Links

Backend:

```text
https://user-management-app-2xge.onrender.com
```

Frontend:

```text
https://user-management-app-five-mu.vercel.app
```

## Future Improvements

- User authentication
- JWT authorization
- Search functionality
- Pagination
- Profile image upload
- Role-based access control

## Author

Your Name