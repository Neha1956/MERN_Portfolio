# MERN Portfolio Website

A modern full-stack portfolio website built with the MERN stack where users can view projects, skills, profile details, and contact the admin.

## Features

- Admin authentication
- Add, edit, and delete projects
- Manage profile information
- Upload profile image and resume
- Skills section
- Contact/message system
- Responsive UI
- Animated frontend using Framer Motion
- Admin dashboard

## Tech Stack

### Frontend
- React.js
- Tailwind CSS
- Redux Toolkit
- React Router DOM
- Axios
- Framer Motion
- React Icons

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- Multer (file upload)
- bcrypt.js

## Folder Structure

```bash
MERN_portfolio/
│── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
│── backend/
│   ├── routes/
│   ├── controllers/
│   ├── models/
│   ├── uploads/
│   └── server.js
│
└── README.md
```

## Environment Variables

Create `.env` files.


## Installation

### Clone repository

```bash
git clone https://github.com/your-username/your-repo-name.git
```

## Install frontend dependencies

```bash
cd frontend
npm install
npm run dev
```

## Install backend dependencies

```bash
cd backend
npm install
npm start
```

## API Routes

### Profile
- GET `/api/profile/get`
- PUT `/api/profile/update`

### Projects
- GET `/api/projects/get`
- POST `/api/projects/create`
- PUT `/api/projects/update/:id`
- DELETE `/api/projects/delete/:id`

### Messages
- POST `/api/messages/send`
- GET `/api/messages/get`


## Future Improvements

- Real-time messaging with Socket.io
- Dark/light mode toggle
- Blog section
- Deployment

## Author

**Neha Kumari**

- GitHub: https://github.com/Neha1956
- LinkedIn: https://linkedin.com/in/neha-kumari-cse