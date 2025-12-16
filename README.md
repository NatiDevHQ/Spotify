In development........

# 🎵 Full-Stack Music App  

This repository contains both the **backend** (Node.js + Express + MongoDB) and the **frontend** (React + Vite + TailwindCSS) for a music application.  
It supports authentication, media uploads, and real-time features.  

---

## 🚀 Tech Stack  

### Backend  
- **Node.js** with **Express**  
- **MongoDB + Mongoose**  
- **Cloudinary** for media storage  
- **Clerk** for authentication  
- **Socket.io** for real-time communication  
- **Nodemon** for development  

### Frontend  
- **React 19** (with Vite)  
- **TailwindCSS** + **Radix UI** + **Lucide Icons**  
- **Zustand** for state management  
- **Axios** for API calls  
- **Clerk React** for authentication  
- **React Router v7** for navigation  

---

## ⚙️ Installation  

Clone the repository and install dependencies for both frontend & backend:  

```bash
# Clone repository
git clone <repo-url>
cd <repo-name>

# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install


---

🖥️ Running the App

Backend (Node.js API)

cd backend
# Development mode
npm run dev

# Production mode
npm start

➡️ The backend will run on http://localhost:5000 (or your configured port).

Frontend (React + Vite)

cd frontend
# Development mode
npm run dev

# Production build
npm run build
npm run preview

➡️ The frontend will run on http://localhost:5173 by default.


---

🌱 Database Seeding

You can populate the database with sample data:

cd backend
npm run seed:songs   # Seed sample songs
npm run seed:albums  # Seed sample albums


---

🔑 Environment Variables

Both backend and frontend require .env files.

Backend .env

PORT=5000
MONGO_URI=your-mongodb-uri
CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret
CLERK_SECRET_KEY=your-clerk-secret-key

Frontend .env

VITE_CLERK_PUBLISHABLE_KEY=your-clerk-publishable-key
VITE_API_URL=http://localhost:5000


---

✅ Features

User authentication (Clerk)

Upload and manage songs/albums (Cloudinary + MongoDB)

Real-time updates with Socket.io

Modern UI with TailwindCSS & Radix UI

State management with Zustand

Responsive & mobile-friendly



---

📜 Scripts

Backend

npm run dev → Start server with Nodemon

npm start → Start server in production

npm run seed:songs → Seed songs

npm run seed:albums → Seed albums


Frontend

npm run dev → Start development server

npm run build → Build production app

npm run preview → Preview production build

npm run lint → Lint code



---

🤝 Contributing

1. Fork the repo


2. Create a feature branch (git checkout -b feature-name)


3. Commit changes (git commit -m 'Add feature')


4. Push branch (git push origin feature-name)


5. Open a Pull Request




---

📄 License

This project is licensed under the ISC License.

