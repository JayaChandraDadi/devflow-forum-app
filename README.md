# DevFlow Forum App (Backend)

A NestJS-based backend for a forum-style application, supporting user registration, login via JWT, and protected profile routes.

---

## 🚀 Features

- ✅ User Registration
- ✅ User Login with JWT Authentication
- ✅ Protected Profile Endpoint
- 📦 Built with NestJS + TypeORM
- 🛡️ JWT Auth with Passport Strategy
- 🧪 Thunder Client / Postman tested APIs

---

## 📂 Project Structure

src/
├── auth/
│ ├── auth.controller.ts
│ ├── auth.service.ts
│ ├── auth.module.ts
│ ├── dto/
│ └── jwt.strategy.ts
├── users/
│ ├── users.controller.ts
│ ├── users.service.ts
│ ├── user.entity.ts
│ └── user.module.ts
├── app.module.ts
---

## ⚙️ Installation

```bash
git clone https://github.com/JayaChandraDadi/devflow-forum-app.git
cd devflow-forum-app/backend
npm install
Create a .env file in the backend folder:
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=postgres
DB_NAME=devflow
JWT_SECRET=supersecretkey123
