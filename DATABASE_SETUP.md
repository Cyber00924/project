# Database Setup Guide

## MongoDB Atlas Connection

Your MongoDB Atlas database is now configured and ready to use!

### Connection Details
- **Database Name**: `outlier-db`
- **Connection String**: Configured in `.env.local`
- **Cluster**: cluster0.5egpvkn.mongodb.net

### Database Collections

The following collections will be automatically created when data is inserted:

1. **users** - User accounts (parents, children, therapists, admins)
2. **courses** - Educational courses and lessons
3. **talentshowcases** - User-created talents (art, music, etc.)
4. **competitions** - Competitions and scholarships
5. **fundings** - Financial support opportunities
6. **gamifications** - XP, badges, achievements
7. **progresses** - User learning progress tracking

### Testing the Connection

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Visit the test endpoint:
   ```
   http://localhost:3000/api/test-db
   ```

   You should see:
   ```json
   {
     "message": "✅ Database connected successfully!",
     "database": "outlier-db",
     "status": "connected"
   }
   ```

### API Endpoints

#### Authentication
- `POST /api/auth/signup` - Create new user account
- `POST /api/auth/login` - User login

#### Example Signup Request
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "securepassword123"
}
```

#### Example Login Request
```json
{
  "email": "john@example.com",
  "password": "securepassword123"
}
```

### Models

#### User Model
```typescript
{
  name: String (required)
  email: String (required, unique)
  password: String (required, hashed)
  role: String (parent/child/therapist/admin)
  createdAt: Date
}
```

#### Competition Model
```typescript
{
  title: String
  description: String
  type: String (Competition/Scholarship)
  prize: String
  deadline: Date
  category: String
  participants: [User IDs]
}
```

#### Funding Model
```typescript
{
  title: String
  description: String
  type: String
  minAmount: Number
  maxAmount: Number
  eligibility: [String]
  applicants: [User IDs]
}
```

### Security Features

✅ Password hashing with bcrypt
✅ JWT token authentication
✅ Secure environment variables
✅ Input validation
✅ Error handling

### Next Steps

1. Test the signup/login functionality
2. Create seed data for courses and competitions
3. Implement protected routes
4. Add user dashboard
5. Connect frontend components to API

### Troubleshooting

If you see connection errors:
1. Check your internet connection
2. Verify MongoDB Atlas cluster is running
3. Ensure IP address is whitelisted in MongoDB Atlas
4. Check `.env.local` file has correct connection string

### MongoDB Atlas Dashboard

Access your database at: https://cloud.mongodb.com/
- View collections
- Monitor performance
- Manage users and permissions
- Set up backups
