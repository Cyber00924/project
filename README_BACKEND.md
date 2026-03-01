# Backend Setup Guide

## MongoDB Atlas Configuration

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free account or sign in
3. Create a new cluster (free tier available)
4. Click "Connect" on your cluster
5. Choose "Connect your application"
6. Copy the connection string
7. Replace `<password>` with your database user password
8. Update `.env.local` with your connection string

## Environment Variables

Update `.env.local` with:
```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/outlier?retryWrites=true&w=majority
JWT_SECRET=your_secure_random_string_here
NEXT_PUBLIC_API_URL=http://localhost:3000/api
```

## API Endpoints

### Authentication
- `POST /api/auth/login` - User login
  ```json
  { "email": "user@example.com", "password": "password123" }
  ```

### Users
- `POST /api/users` - Create new user
  ```json
  { "name": "John Doe", "email": "john@example.com", "password": "pass123", "role": "parent" }
  ```
- `GET /api/users` - Get all users

### Courses
- `POST /api/courses` - Create new course
- `GET /api/courses` - Get all courses
- `GET /api/courses?category=communication` - Filter by category

### Progress
- `POST /api/progress` - Update user progress
- `GET /api/progress?userId=123` - Get user progress

### Talent Showcase (NEW)
- `POST /api/showcase` - Create new showcase item
  ```json
  {
    "creatorId": "userId",
    "title": "My Artwork",
    "description": "Beautiful painting",
    "category": "artwork",
    "price": 25,
    "isForSale": true,
    "images": ["url1", "url2"],
    "tags": ["colorful", "abstract"]
  }
  ```
- `GET /api/showcase` - Get all showcase items
- `GET /api/showcase?category=artwork` - Filter by category
- `GET /api/showcase?creatorId=123` - Get items by creator
- `GET /api/showcase/[id]` - Get single item (increments views)
- `PUT /api/showcase/[id]` - Update showcase item
- `DELETE /api/showcase/[id]` - Delete showcase item
- `POST /api/showcase/[id]/like` - Like an item

## Database Models

### User
- name, email, password, role (parent/child/therapist/admin)

### Course
- title, description, category, difficulty, content array

### Progress
- userId, courseId, completedLessons, score, completionPercentage

### TalentShowcase (NEW)
- creatorId, title, description, category (artwork/craft/music/writing/digital/other)
- images, price, isForSale, likes, views, tags, status

## Testing the API

Use tools like Postman or curl to test endpoints:
```bash
curl -X POST http://localhost:3000/api/users \
  -H "Content-Type: application/json" \
  -d '{"name":"Test User","email":"test@example.com","password":"test123","role":"parent"}'
```
