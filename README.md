# 🧠 DevFlow Forum App (Backend)

A fully-featured NestJS backend API for a developer discussion forum. It supports user registration and authentication, post creation, comment threads, post/comment likes, and user profile insights.

---

## ✨ Features

- ✅ **User Authentication**  
  - Register & login using JWT  
  - AuthGuard-protected profile routes  

- ✅ **Forum Posts**  
  - Authenticated users can create and view posts  
  - Posts support comment threads and likes  

- ✅ **Comments**  
  - Authenticated users can comment on posts  
  - Comments support likes  

- ✅ **Likes System**  
  - Users can like posts and comments  
  - Duplicate likes by the same user are prevented  

- ✅ **User Profile & Aggregates**  
  - Profile includes total posts, comments, likes given  
  - Includes authored posts/comments  

---

## 📁 Project Structure

src/
├── auth/ # Registration, login, JWT strategy
│ ├── auth.controller.ts
│ ├── auth.service.ts
│ ├── auth.module.ts
│ ├── dto/
│ └── jwt.strategy.ts

├── users/ # User entity, profile, and repo access
│ ├── users.controller.ts
│ ├── users.service.ts
│ ├── user.entity.ts
│ └── user.module.ts

├── posts/ # Post CRUD and likes
│ ├── posts.controller.ts
│ ├── posts.service.ts
│ ├── post.entity.ts
│ ├── post.module.ts
│ └── post-like.entity.ts

├── comments/ # Comment CRUD
│ ├── comment.controller.ts
│ ├── comment.service.ts
│ ├── comment.entity.ts
│ ├── comment.module.ts

├── comment-likes/ # Likes for comments
│ ├── comment-likes.controller.ts
│ ├── comment-likes.service.ts
│ ├── comment-likes.entity.ts
│ ├── comment-likes.module.ts

├── likes/ # Main likes module (aggregator)
│ ├── likes.controller.ts
│ ├── likes.module.ts
│ └── likes.service.ts

├── app.module.ts # Root module
└── main.ts # Entry point


---

## 🧪 API Overview

| Endpoint | Method | Auth | Description |
|----------|--------|------|-------------|
| `/auth/register` | POST | ❌ | Register new user |
| `/auth/login`    | POST | ❌ | Login, returns JWT |
| `/users/profile` | GET  | ✅ | Get logged-in user with stats |
| `/users/:id`     | GET  | ❌ | Get public profile of a user by ID |
| `/posts`         | POST | ✅ | Create post |
| `/posts`         | GET  | ❌ | Get all posts |
| `/comments/:postId` | POST | ✅ | Comment on a post |
| `/comments/:postId` | GET  | ❌ | Get comments for a post |
| `/likes/posts/:postId` | POST | ✅ | Like a post |
| `/likes/comments/:commentId` | POST | ✅ | Like a comment |

---

## 🧰 Tech Stack

- [NestJS](https://nestjs.com/)
- [TypeORM](https://typeorm.io/)
- [PostgreSQL](https://www.postgresql.org/)
- [Passport JWT](https://docs.nestjs.com/security/authentication)
- [Thunder Client](https://www.thunderclient.com/) for API testing

---

## ⚙️ Installation & Setup

```bash
# 1. Clone the repo
git clone https://github.com/JayaChandraDadi/devflow-forum-app.git
cd devflow-forum-app/backend

# 2. Install dependencies
npm install

# 3. Create your environment config
touch .env
#.env file
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=postgres
DB_NAME=devflow

JWT_SECRET=supersecretkey123
# Start the backend server
npm run start:dev
