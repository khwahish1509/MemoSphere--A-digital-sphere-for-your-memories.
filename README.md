# MemoSphere - A digital-sphere-for-your-memories.
Step into the sphere of memories where every moment is timeless. Share, cherish, and connect through stories that matter most to you.
Using **React**, **Node.js**, **Express**, and **MongoDB**, this project is a comprehensive Full Stack MERN application built from start to finish. The app, called **"MemoSphere"**, is a simple social media platform that enables users to post and share interesting events from their lives.

---

## 🚀 Features
- **Post Creation**: Share memorable events with the world.
- **Interactive UI**: Built with React and styled for an engaging user experience.
- **CRUD Functionality**: Fully functional Create, Read, Update, Delete operations.
- **RESTful API**: Backend powered by Express.js and MongoDB.
- **Database Integration**: Seamless connection with MongoDB Atlas.

---

## 🛠️ Technologies Used
- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Atlas)
- **State Management**: Redux
- **Styling**: CSS/SCSS

---

## 📂 Project Structure
```plaintext
|-- client/          # React Frontend
|-- server/          # Express Backend
|-- .gitignore       # Ignored files and directories
|-- package.json     # Dependencies and scripts
|-- README.md        # Project documentation (this file)
```

---

## 🔧 Setup and Installation

### Prerequisites
Ensure you have the following installed:
- Node.js
- MongoDB (or MongoDB Atlas account)

### Steps
1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/memory-lane-mern.git
   ```

2. **Navigate to the project directory**:
   ```bash
   cd memory-lane-mern
   ```

3. **Install dependencies**:
   ```bash
   # For backend
   cd server
   npm install

   # For frontend
   cd ../client
   npm install
   ```

4. **Environment variables**:
   Create a `.env` file in the `server` folder with the following:
   ```plaintext
   MONGO_URI=your_mongo_db_connection_string
   PORT=5000
   ```

5. **Run the application**:
   ```bash
   # Start the backend
   cd server
   npm start

   # Start the frontend
   cd ../client
   npm start
   ```

6. **Open in your browser**:
   Navigate to `http://localhost:3000`

---

## 📚 Resources
- **MongoDB Atlas**: [Get Started](https://www.mongodb.com/cloud/atlas)
- **HTTP Status Codes**: [Learn More](https://www.restapitutorial.com/httpstatuscodes.html)

---

## ⭐ Contributions
Feel free to fork this repository and submit a pull request with improvements, or give it a ⭐ to show your support!
