# Quick Start Guide

Get the Task Management application up and running in minutes!

## ⚡ Quick Setup

### Prerequisites
- Node.js 18+ installed
- MongoDB account (free at mongodb.com)
- npm or yarn

### 1️⃣ Backend Setup (2 minutes)

```bash
# Navigate to backend
cd backend

# Install dependencies
npm install

# Create .env file
echo "PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
NODE_ENV=development" > .env

# Start server
npm run server
```

✅ Backend running at `http://localhost:5000`

### 2️⃣ Frontend Setup (2 minutes)

```bash
# Navigate to frontend (new terminal)
cd frontend

# Install dependencies
npm install

# Start dev server
npm run dev
```

✅ Frontend running at `http://localhost:5173`

## 🎯 First Steps

1. **Go to Home Page**: http://localhost:5173
2. **Click "Get Started"** → Register an account
3. **Login** with your credentials
4. **Create Tasks** and manage them!

## 📝 Test Credentials

```
Email: demo@example.com
Password: Demo@123
```

Note: Create your own account for testing

## 🔑 Key Features to Try

### Authentication
- ✅ Register new account with validation
- ✅ Login with email/password
- ✅ Logout safely
- ✅ Protected routes

### Task Management
- ✅ Add new tasks
- ✅ Mark tasks as completed
- ✅ Edit task titles (click on task)
- ✅ Delete tasks
- ✅ Search tasks
- ✅ Filter by status (All/Pending/Completed)

## 🚨 Common Issues & Solutions

### Issue: Cannot connect to database
```
Error: connection refused
```
**Solution:**
1. Check MongoDB connection string in `.env`
2. Ensure MongoDB Atlas cluster is active
3. Verify IP address is whitelisted in MongoDB

### Issue: Port 5000 already in use
```
Error: listen EADDRINUSE :::5000
```
**Solution:**
```bash
# Change PORT in .env to another port
PORT=5001

# Or kill process using port 5000
# Windows: netstat -ano | findstr :5000
# Mac/Linux: lsof -i :5000
```

### Issue: CORS errors in frontend
```
Error: Access to XMLHttpRequest blocked by CORS
```
**Solution:**
- Check backend is running
- Verify API URL in `frontend/src/services/api.js`
- Default should be: `http://localhost:5000/api`

### Issue: Token not persisting after refresh
**Solution:**
- Check browser localStorage
- Open DevTools → Application → localStorage
- Verify `token` key exists after login

## 📚 File Organization

```
✅ All important files already created:

Backend (Ready to deploy)
├── ✅ Validated controllers (auth, tasks)
├── ✅ Protected routes with auth middleware
├── ✅ MongoDB models with validation
├── ✅ Error handling

Frontend (Ready to deploy)
├── ✅ Responsive pages (Home, Login, Register, Dashboard)
├── ✅ Form validation
├── ✅ Beautiful UI with Tailwind CSS
├── ✅ Protected routes
└── ✅ API integration
```

## 🌐 API Endpoints Summary

```
POST   /api/auth/register      - Register user
POST   /api/auth/login         - Login user
POST   /api/tasks              - Create task
GET    /api/tasks              - Get all tasks
PUT    /api/tasks/:id          - Update task
DELETE /api/tasks/:id          - Delete task
```

All task endpoints require Bearer token in headers.

## 📊 Database Setup

### MongoDB Free Tier
1. Go to [mongodb.com/cloud/atlas](https://mongodb.com/cloud/atlas)
2. Create free account
3. Create cluster
4. Add database user
5. Copy connection string to `.env`

### Connection String Format
```
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/dbname?retryWrites=true&w=majority
```

## 🔒 Security Features Already Implemented

✅ Password hashing (bcrypt)
✅ JWT authentication
✅ Protected API routes
✅ Form validation (client + server)
✅ Error handling
✅ Input sanitization

## 📈 Performance Optimization

✅ Responsive design
✅ Optimized API calls
✅ Error boundaries
✅ Loading states
✅ Search & filter

## 🚀 Next Steps After Running

1. **Test the App**
   - Create account
   - Add tasks
   - Test search/filter
   - Edit and delete tasks

2. **Explore Code**
   - Check backend logic in `/controllers`
   - Review frontend components in `/pages`
   - Study API integration in `/services/api.js`

3. **Deploy to Production**
   - See [README.md](./README.md) for deployment instructions
   - Check [SCALING_GUIDE.md](./SCALING_GUIDE.md) for production setup

4. **Add More Features**
   - Task categories/tags
   - Due dates
   - Notifications
   - Sharing tasks

## 💡 Tips

- **Reset Database**: Delete all tasks from MongoDB Atlas UI
- **Check Logs**: Look at browser console (F12) and server terminal
- **API Testing**: Use Postman to test endpoints directly
- **Database Inspection**: Use MongoDB Atlas UI to view data

## 📞 Getting Help

### Check Documentation
1. [README.md](./README.md) - Full project documentation
2. [API_DOCUMENTATION.md](./API_DOCUMENTATION.md) - API reference
3. [SCALING_GUIDE.md](./SCALING_GUIDE.md) - Production deployment

### Debug Mode
```bash
# Backend - Enable detailed logging
NODE_ENV=development npm run server

# Frontend - Open DevTools (F12)
# Check Console, Network, and Storage tabs
```

## ✨ Success Indicators

✅ Backend server starts without errors
✅ Frontend loads at localhost:5173
✅ Can register and login
✅ Can create/edit/delete tasks
✅ Tasks persist after page refresh
✅ No console errors

## 🎉 You're All Set!

Congratulations! Your Task Management application is ready to use. Explore the features and enjoy!

For any questions or issues, refer to the comprehensive documentation files in the project root.

---

**Happy Task Managing! 🚀**
