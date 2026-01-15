# API Documentation

## Base URL
```
http://localhost:5000/api
```

## Authentication
All protected endpoints require an `Authorization` header:
```
Authorization: Bearer <jwt_token>
```

---

## Auth Endpoints

### 1. Register User
**Endpoint:** `POST /auth/register`

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "SecurePassword123"
}
```

**Success Response (201):**
```json
{
  "message": "User registered successfully",
  "user": {
    "id": "user_id_here",
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

**Error Responses:**
- `400` - Validation errors
  ```json
  { "message": "All fields are required" }
  ```
- `400` - Duplicate email
  ```json
  { "message": "Email already registered" }
  ```
- `500` - Server error
  ```json
  { "message": "Server error during registration" }
  ```

**Validation Rules:**
- Name: minimum 2 characters
- Email: valid email format
- Password: minimum 6 characters

---

### 2. Login User
**Endpoint:** `POST /auth/login`

**Request Body:**
```json
{
  "email": "john@example.com",
  "password": "SecurePassword123"
}
```

**Success Response (200):**
```json
{
  "message": "Login successful",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "user_id_here",
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

**Error Responses:**
- `400` - Missing fields
  ```json
  { "message": "Email and password are required" }
  ```
- `401` - Invalid credentials
  ```json
  { "message": "Invalid email or password" }
  ```
- `500` - Server error
  ```json
  { "message": "Server error during login" }
  ```

**Token Details:**
- Expires in: 7 days
- Algorithm: HS256
- Store in: localStorage on client

---

## Task Endpoints

All task endpoints require authentication (Bearer token).

### 1. Create Task
**Endpoint:** `POST /tasks`

**Headers:**
```
Authorization: Bearer <token>
Content-Type: application/json
```

**Request Body:**
```json
{
  "title": "Complete project documentation"
}
```

**Success Response (201):**
```json
{
  "message": "Task created successfully",
  "task": {
    "_id": "task_id_here",
    "title": "Complete project documentation",
    "completed": false,
    "userId": "user_id_here",
    "createdAt": "2024-01-15T10:30:00Z",
    "updatedAt": "2024-01-15T10:30:00Z"
  }
}
```

**Error Responses:**
- `400` - Empty title
  ```json
  { "message": "Task title is required" }
  ```
- `500` - Server error
  ```json
  { "message": "Error creating task" }
  ```

---

### 2. Get All Tasks
**Endpoint:** `GET /tasks`

**Headers:**
```
Authorization: Bearer <token>
```

**Success Response (200):**
```json
[
  {
    "_id": "task_id_1",
    "title": "Complete project documentation",
    "completed": false,
    "userId": "user_id_here",
    "createdAt": "2024-01-15T10:30:00Z",
    "updatedAt": "2024-01-15T10:30:00Z"
  },
  {
    "_id": "task_id_2",
    "title": "Deploy to production",
    "completed": true,
    "userId": "user_id_here",
    "createdAt": "2024-01-14T15:20:00Z",
    "updatedAt": "2024-01-15T09:15:00Z"
  }
]
```

**Error Responses:**
- `500` - Server error
  ```json
  { "message": "Error fetching tasks" }
  ```

---

### 3. Update Task
**Endpoint:** `PUT /tasks/:id`

**Headers:**
```
Authorization: Bearer <token>
Content-Type: application/json
```

**URL Parameters:**
- `id`: Task ID (MongoDB ObjectId)

**Request Body (at least one field required):**
```json
{
  "title": "Updated task title",
  "completed": true
}
```

**Success Response (200):**
```json
{
  "message": "Task updated successfully",
  "task": {
    "_id": "task_id_here",
    "title": "Updated task title",
    "completed": true,
    "userId": "user_id_here",
    "createdAt": "2024-01-15T10:30:00Z",
    "updatedAt": "2024-01-15T14:45:00Z"
  }
}
```

**Error Responses:**
- `404` - Task not found
  ```json
  { "message": "Task not found" }
  ```
- `403` - Not authorized
  ```json
  { "message": "Not authorized to update this task" }
  ```
- `400` - Empty title
  ```json
  { "message": "Task title cannot be empty" }
  ```
- `500` - Server error
  ```json
  { "message": "Error updating task" }
  ```

---

### 4. Delete Task
**Endpoint:** `DELETE /tasks/:id`

**Headers:**
```
Authorization: Bearer <token>
```

**URL Parameters:**
- `id`: Task ID (MongoDB ObjectId)

**Success Response (200):**
```json
{
  "message": "Task deleted successfully"
}
```

**Error Responses:**
- `404` - Task not found
  ```json
  { "message": "Task not found" }
  ```
- `403` - Not authorized
  ```json
  { "message": "Not authorized to delete this task" }
  ```
- `500` - Server error
  ```json
  { "message": "Error deleting task" }
  ```

---

## HTTP Status Codes

| Code | Meaning |
|------|---------|
| 200 | Success |
| 201 | Created |
| 400 | Bad Request / Validation Error |
| 401 | Unauthorized / Invalid Credentials |
| 403 | Forbidden / Not Authorized |
| 404 | Not Found |
| 500 | Internal Server Error |

---

## Example Usage with cURL

### Register
```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "password": "SecurePass123"
  }'
```

### Login
```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "john@example.com",
    "password": "SecurePass123"
  }'
```

### Create Task
```bash
curl -X POST http://localhost:5000/api/tasks \
  -H "Authorization: Bearer <token>" \
  -H "Content-Type: application/json" \
  -d '{
    "title": "My first task"
  }'
```

### Get Tasks
```bash
curl -X GET http://localhost:5000/api/tasks \
  -H "Authorization: Bearer <token>"
```

### Update Task
```bash
curl -X PUT http://localhost:5000/api/tasks/task_id \
  -H "Authorization: Bearer <token>" \
  -H "Content-Type: application/json" \
  -d '{
    "completed": true
  }'
```

### Delete Task
```bash
curl -X DELETE http://localhost:5000/api/tasks/task_id \
  -H "Authorization: Bearer <token>"
```

---

## Error Handling

All error responses follow this format:
```json
{
  "message": "Error description"
}
```

The API provides meaningful error messages to help with debugging:
- **Validation errors** return `400` status with specific field errors
- **Authentication errors** return `401` status
- **Authorization errors** return `403` status
- **Not found errors** return `404` status
- **Server errors** return `500` status

---

## Rate Limiting & Best Practices

For production deployment, implement:
- Rate limiting (e.g., 100 requests per 15 minutes)
- Request throttling for bulk operations
- Caching for frequently accessed resources
- API versioning for backward compatibility

---

## Testing with Postman

1. **Import Collection** - Use the endpoints above in Postman
2. **Set Up Environment** - Create variables for `base_url` and `token`
3. **Authentication** - After login, use the returned token in subsequent requests
4. **Test Workflows** - Create test sequences for complete user flows

Example Postman workflow:
1. Register → Get user data
2. Login → Get token
3. Create task → Get all tasks
4. Update task → Get updated task
5. Delete task → Verify deletion
