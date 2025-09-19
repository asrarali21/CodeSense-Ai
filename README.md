# Minimal AI

A minimal, fast code‑review assistant.
## Technologies Used
- React
- Node.js,
- Express,
- Mongoose (MongoDB),
- AI: Google Gemini

## Clone & Setup
Prerequisites: Node 18+, npm, a MongoDB URI, and a Gemini API key.

1) Clone
```bash
git clone https://github.com/asrarali21/Minimal-Ai.git
cd Minimal Ai
```

2) Backend
```bash
cd backend
npm install
```
Create backend/.env:
```properties
MONGODB_URI=your-mongodb-uri
ACCESS_TOKEN_SECRET=change-me
REFRESH_TOKEN_SECRET=change-me
ACCESS_TOKEN_EXPIRY=1d
REFRESH_TOKEN_EXPIRY=7d
PORT=8000
CORS_ORIGIN=http://localhost:5173
GEMINI_API_KEY=your-gemini-key
NODE_ENV=development
```
Run:
```bash
npm run dev   # or: node index.js
```

3) Frontend
```bash
cd ../frontend
npm install
```
Create frontend/.env:
```properties
VITE_API_URL=http://localhost:8000
```
Run:
```bash
npm run dev
```
