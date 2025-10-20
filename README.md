# 🎬 NetflixGPT

A Netflix-inspired web application powered by React, Redux, and Firebase with GPT-enhanced search functionality. Users can browse movies from TMDB, watch trailers, and get smart movie recommendations.

---

## 🚀 Features

### 🔑 Authentication
- Login / Sign Up with Firebase Authentication
- Redirect logic:
  - Redirect to **Browse** page after login
  - Redirect to **Login** page if user is not authenticated
- Profile management (update display name & profile picture)
- Sign Out functionality

### 🎥 Browse Page (After Authentication)
- **Header** with navigation
- **Main Movie**:
  - Autoplay & muted trailer in background
  - Title & description overlay
- **Movie Suggestions**:
  - Multiple movie lists (Popular, Upcoming, Top Rated, etc.)
  - Movie cards with posters (TMDB Image CDN)

### 🤖 NetflixGPT (AI Search)
- GPT-powered search bar
- Smart movie recommendations based on user queries

### 🔧 App Architecture
- Redux store setup with `userSlice` and `movieSlice`
- Custom hooks for fetching:
  - Now Playing Movies
  - Popular, Upcoming, Top Rated Movies
  - Trailer videos
- Clean file organization & constants for reusable values

---

## 🛠️ Tech Stack

- **Frontend:** React, TailwindCSS, Redux Toolkit
- **Backend / Auth:** Firebase Authentication
- **Database & Deployment:** Firebase
- **API:** TMDB (The Movie Database API), YouTube Embed API
- **Other Tools:** React Router, Custom Hooks, useRef, useEffect

---

## 📦 Project Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/your-username/netflix-gpt.git
cd netflix-gpt
