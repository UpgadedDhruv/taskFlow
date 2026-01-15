# Task Management Web Application

A fully functional, scalable web application with user authentication, task management, and dashboard features built with modern technologies.

## 📋 Project Overview

This is a complete assignment project featuring:
- **Frontend**: React.js with Tailwind CSS for responsive UI
- **Backend**: Node.js/Express with MongoDB
- **Authentication**: JWT-based authentication with bcrypt password hashing
- **Features**: User registration/login, task CRUD operations, search & filter, responsive design

## 🚀 Features Implemented

### ✅ Authentication
- User registration with validation
- Secure login with JWT tokens
- Password hashing using bcrypt
- Protected routes requiring authentication
- Logout functionality

### ✅ Dashboard
- Display user's tasks
- Create new tasks
- Edit task titles
- Mark tasks as completed/pending
- Delete tasks
- Search tasks by title
- Filter by status (All/Pending/Completed)
- Task statistics (Total, Completed, Pending)

### ✅ UI/UX
- Responsive design (mobile, tablet, desktop)
- Beautiful gradient backgrounds
- Form validation with error messages
- Loading states and error handling
- Intuitive user interface with Tailwind CSS

### ✅ Security
- Password hashing (bcrypt)
- JWT token authentication
- Protected API routes
- Authorization checks (users can only access their own tasks)
- Server-side validation

## 📁 Project Structure

```
assignment_project/
├── backend/
│   ├── config/
│   │   └── db.js                 # MongoDB connection
│   ├── controllers/
│   │   ├── authController.js     # Auth logic with validation
│   │   └── taskController.js     # Task CRUD operations
│   ├── middleware/
│   │   └── authMiddleware.js     # JWT verification
│   ├── models/
│   │   ├── User.js               # User schema with validation
│   │   └── Task.js               # Task schema
│   ├── routes/
│   │   ├── authRoutes.js         # Auth endpoints
│   │   └── taskRoutes.js         # Task endpoints
│   ├── package.json
│   ├── server.js                 # Express server entry point
│   └── .env                      # Environment variables
│
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Home.jsx          # Landing page
│   │   │   ├── Login.jsx         # Login page with validation
│   │   │   ├── Register.jsx      # Registration page with validation
│   │   │   └── Dashboard.jsx     # Main dashboard with CRUD
│   │   ├── components/
│   │   │   ├── Navbar.jsx        # Navigation bar
│   │   │   └── protectedRoute.jsx # Route protection
│   │   ├── services/
│   │   │   └── api.js            # Axios API instance
│   │   ├── App.jsx               # Main app component
│   │   ├── index.css             # Tailwind CSS
│   │   └── main.jsx              # React entry point
│   ├── package.json
│   ├── tailwind.config.js        # Tailwind configuration
│   ├── postcss.config.js         # PostCSS configuration
│   └── vite.config.js            # Vite configuration
```

## 🛠️ Installation & Setup

### Backend Setup

1. Navigate to backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file with:
```
PORT=5000
MONGO_URI=mongodb+srv://your_mongo_connection_string
JWT_SECRET=your_jwt_secret_key
NODE_ENV=development
```

4. Start the server:
```bash
npm run server
```

The backend will run on `http://localhost:5000`

### Frontend Setup

1. Navigate to frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The frontend will run on `http://localhost:5173`

## 🔌 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
  - Body: `{ name, email, password }`
  - Returns: User info + token
  
- `POST /api/auth/login` - Login user
  - Body: `{ email, password }`
  - Returns: Token + user info

### Tasks (All require Authorization header: `Bearer <token>`)
- `POST /api/tasks` - Create task
  - Body: `{ title }`
  
- `GET /api/tasks` - Get all user's tasks
  
- `PUT /api/tasks/:id` - Update task
  - Body: `{ title?, completed? }`
  
- `DELETE /api/tasks/:id` - Delete task

## 📝 Validation

### Client-Side (React)
- Email format validation
- Password length (minimum 6 characters)
- Required field validation
- Confirmation password matching
- Real-time error display

### Server-Side (Node.js/Express)
- Email uniqueness check
- Password strength validation
- Required field validation
- Ownership verification for task operations
- MongoDB schema validation

## 🔐 Security Features

1. **Password Security**
   - Passwords hashed using bcrypt with salt rounds 10
   - Passwords never stored in plain text

2. **Authentication**
   - JWT tokens with 7-day expiration
   - Token sent in Authorization header
   - Tokens verified on protected routes

3. **Authorization**
   - Users can only access their own tasks
   - Server-side ownership verification

4. **Error Handling**
   - Generic error messages (don't expose internal details)
   - Proper HTTP status codes
   - Validation before database operations

## 📊 Database Schema

### User Model
```javascript
{
  name: String (required, min 2 chars),
  email: String (required, unique, valid format),
  password: String (required, hashed, min 6 chars),
  createdAt: DateTime,
  updatedAt: DateTime
}
```

### Task Model
```javascript
{
  title: String (required, trimmed),
  completed: Boolean (default: false),
  userId: ObjectId (reference to User),
  createdAt: DateTime,
  updatedAt: DateTime
}
```

## 🚀 Scalability & Production Readiness

### Current Implementation
- ✅ Modular code structure (controllers, routes, models)
- ✅ Error handling and validation
- ✅ JWT authentication
- ✅ Environmental configuration
- ✅ Responsive design

### Future Improvements for Production
1. **Backend**
   - Add request rate limiting
   - Implement caching (Redis)
   - Add comprehensive logging
   - Containerize with Docker
   - Add automated testing (Jest, Supertest)
   - Implement refresh tokens

2. **Frontend**
   - Add state management (Redux/Zustand)
   - Implement request caching
   - Add service workers for offline support
   - Implement error boundaries
   - Add comprehensive testing
   - Optimize bundle size

3. **Deployment**
   - Set up CI/CD pipeline (GitHub Actions)
   - Deploy to cloud (Heroku, AWS, Vercel)
   - Configure HTTPS/SSL
   - Set up database backups
   - Add monitoring and alerts

## 🧪 Testing the Application

1. **Register a new account**
   - Go to `/register`
   - Enter valid name, email, password
   - Submit

2. **Login**
   - Go to `/login`
   - Enter email and password
   - Should redirect to dashboard

3. **Create Tasks**
   - Enter task title in input
   - Click "Add Task"
   - Task appears in list

4. **Manage Tasks**
   - Check checkbox to mark as completed
   - Click Edit to modify title
   - Click Delete to remove task

5. **Search & Filter**
   - Type in search box to filter tasks
   - Use dropdown to filter by status

6. **Logout**
   - Click Logout in navbar
   - Should redirect to home page

## 📚 Key Technologies

- **Frontend**: React 19, Tailwind CSS 4, Vite, React Router 7
- **Backend**: Express.js 5, Node.js
- **Database**: MongoDB
- **Authentication**: JWT, bcryptjs
- **HTTP Client**: Axios
- **CSS**: Tailwind CSS with @tailwindcss/postcss

## 🤝 Scalability Notes

### Backend Scalability
- **Stateless Design**: Each request can be handled by any server instance
- **Database**: MongoDB is horizontally scalable with sharding
- **Authentication**: JWT tokens don't require server-side session storage
- **Middleware**: Easy to add caching, compression, rate limiting

### Frontend Scalability
- **Component-Based**: Easy to add new features
- **API Abstraction**: Single `api.js` file handles all HTTP requests
- **Protected Routes**: Centralized route protection logic
- **Error Handling**: Consistent error handling across the app

### Deployment Strategy
- Frontend: Deploy to Vercel/Netlify (Static hosting)
- Backend: Deploy to Heroku/AWS/Digital Ocean
- Database: Use managed MongoDB Atlas service
- CDN: Use for static asset delivery

## 📄 License

This project is created as part of an academic assignment.

## 👨‍💻 Author

Created with React, Express, and MongoDB
