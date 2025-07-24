
---

# 🎵 Spotify Clone (MERN + Clerk + Cloudinary

A full-stack Spotify clone built with the **MERN** stack (MongoDB, Express, React, Node.js), **Clerk** for authentication, **Cloudinary** for image & audio uploads, and **Tailwind CSS** for UI styling.

## ✨ Features

- 🔐 User authentication with Clerk (Sign in, Sign up, etc.)
- 🎶 Upload & stream music tracks
- 🖼 Upload album/track artwork via Cloudinary
- 🎧 Playlist & artist management
- 🔍 Search for songs, artists, and albums
- 🖥 Responsive and modern UI with Tailwind CSS
- 📝 Admin panel for managing tracks (optional)
- 💾 MongoDB for persistent data storage

---

## 🛠 Tech Stack

### Frontend:
- React.js (Vite or CRA)
- Tailwind CSS
- Clerk React SDK
- Axios

### Backend:
- Node.js + Express.js
- MongoDB with Mongoose
- Cloudinary SDK
- Clerk Express Middleware
- Multer (for file handling)

---

## 🔐 Authentication

This project uses [Clerk](https://clerk.com/) for user authentication:

- User sessions
- JWT protection for routes
- Role-based access (if needed)

> You'll need a **Clerk Publishable Key** and **Clerk Secret Key**

---

## ☁️ Cloudinary Setup

Used for hosting:

- Track cover images
- Audio files

> You'll need your **Cloud Name**, **API Key**, and **API Secret** from [Cloudinary](https://cloudinary.com/)

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/spotify-clone-mern.git
cd spotify-clone-mern


---

2. Setup Environment Variables

Create .env files in both client and server folders.

🧠 Server (/server/.env)

PORT=5000
MONGO_URI=your_mongo_connection_string
CLERK_SECRET_KEY=your_clerk_secret_key
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

🖥 Client (/client/.env)

VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
VITE_API_URL=http://localhost:5000/api


---

3. Install Dependencies

Backend

cd server
npm install

Frontend

cd ../client
npm install


---

4. Run the App

Backend

cd server
npm run dev

Frontend

cd client
npm run dev

> App runs on:
Frontend: http://localhost:5173
Backend: http://localhost:5000




---

🗂 Folder Structure

spotify-clone/
│
├── client/               # React + Tailwind + Clerk frontend
│   ├── src/
│   └── .env
│
├── server/               # Express + MongoDB + Cloudinary backend
│   ├── routes/
│   ├── controllers/
│   ├── models/
│   ├── middleware/
│   └── .env
│
└── README.md


---

✅ To-Do

[x] Clerk auth setup

[x] Upload images/audio to Cloudinary

[x] Play and stream audio

[x] Playlist and album support

[ ] Dark mode toggle

[ ] Like / Save music

[ ] Mobile responsiveness


---

🧑‍💻 Author

Built by Natnael – feel free to reach out or contribute!


---

📄 License

This project is open-source and available under the MIT License.

---


