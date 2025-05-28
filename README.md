# 🚀 Business Nexus

Business Nexus is a professional networking platform designed to connect entrepreneurs and investors. It provides seamless collaboration, real-time communication, and a modern interface to streamline startup-investor interactions.

---

## 📋 Project Overview
Business Nexus is a full-stack application that enables users to:
- 📝 Register as an **entrepreneur** or **investor**.
- 🔍 View profiles and send **collaboration requests**.
- 💬 Communicate via a **real-time chat system** using Socket.io.

---

## 🛠 Tech Stack

### Frontend
- **Framework:** React.js (Vite)
- **Styling:** Tailwind CSS
- **Routing:** React Router
- **State Management:** Context API
- **API Integration:** Axios
- **Deployment:** Vercel

### Backend
- **Runtime & Framework:** Node.js, Express.js
- **Database:** MongoDB with Mongoose
- **Authentication:** JWT, bcrypt
- **Real-time:** Socket.io
- **Deployment:** Render

---

## 🏗 Features

### 🔒 Authentication & Authorization
- Secure registration and login with password hashing (bcrypt).
- JWT-based session management and protected routes.
- Role-based access control for Entrepreneurs and Investors.

### 📄 User Profiles
- **Entrepreneurs**: Add bio, startup description, funding needs, pitch decks.
- **Investors**: Add bio, investment interests, portfolio companies.
- Edit and update profiles with form validations.

### 🤝 Collaboration Request System
- Investors can browse entrepreneurs and send collaboration requests.
- Entrepreneurs can view incoming requests and accept/reject them.
- Request status management (Pending, Accepted, Rejected).

### 💬 Real-time Messaging (Chat)
- Real-time communication using Socket.io with a dedicated chat room per user pair.
- Chat history stored in MongoDB for persistence.
- Message alignment, timestamps, sender avatars.
- Optional: Online/offline status indicators.

### 🌐 UI/UX and Responsiveness
- Clean, modern UI with responsive design for all devices.
- Consistent styling with Tailwind CSS.
- Optional dark mode toggle and hover states for improved UX.

### 📦 Deployment & DevOps
- Frontend hosted on Vercel.
- Backend hosted on Render.
- Environment variables for API URLs, JWT secrets, and database connections.

---

> **🔗 Stay tuned for further development and enhancements!**
