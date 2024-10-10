# Video Download Server

This project is a video download server application with a React frontend and a Node.js/Express backend. The backend handles user authentication, file uploads, and serves as an API for managing video files. The frontend provides a user interface for interacting with these features.

## Table of Contents
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Docker Setup (Optional)](#docker-setup-optional)
- [Folder Structure](#folder-structure)
- [Endpoints](#endpoints)
- [Contributing](#contributing)
- [License](#license)

---

## Project Structure
```directories
video-download-server/ 
├── backend/ # Node.js/Express backend 
│   │ 
│   ├── server.js # Main backend server file 
│   │  
│   ├── package.json # Backend dependencies and scripts
│   │ 
│   └── uploads/ # Directory where uploaded files are stored
└── frontend/ # React frontend
    ├── src/ # Frontend source code
    └── package.json # Frontend dependencies and scripts
```

## Prerequisites
- **Node.js** (version 14.x or higher)
- **npm** (comes with Node.js) or **yarn**
- **Docker** (optional, if using Docker for containerization)

## Installation

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/video-download-server.git
cd video-download-server
```

### 2. Backend Setup
#### 1. Navigate to the backend directory:
```bash
cd backend
```

#### 2. Install the backend dependencies:
```bash
npm install
```

#### 3. Create an ```uploads``` folder in the ```backend``` directory:
```bash
mkdir uploads
```

#### 4. Start the backend server:
```bash
npm start
```
The backend server should now be running at http://localhost:5001.

### 3. Frontend Setup
#### 1. In a new terminal window, navigate to the frontend directory:
```bash
cd ../frontend
```

#### 2. Install the frontend dependencies:
```bash
npm install
```

#### 3. Start the frontend development server:
```bash
npm start
```
The frontend should now be running at http://localhost:3000.

## Running the Application
**1. Backend:** Ensure the backend server is running at http://localhost:5001.

**1. Frontend:** Navigate to http://localhost:3000 in your browser. The frontend application should be fully functional and able to interact with the backend server.

## Folder Structure
### Backend
The backend uses Express for building a REST API, and it contains the following main files:
- server.js: Main file where the Express server is configured and started.
- uploads/: Directory for storing uploaded video files.
- package.json: Lists backend dependencies and scripts.



### Frontend
The frontend is built with React, and it contains the following main files:
- src/: Source code for the React application.
- package.json: Lists frontend dependencies and scripts.

## Endpoints
### Backend
- GET /files: Retrieves a list of uploaded files.
- POST /upload: Allows users to upload a new file.
- POST /login: Authenticates the user and provides access to the application.
### Frontend
- /: Home page with options to view and interact with uploaded videos.
- /login: Login page for user authentication.
- /admin: Admin dashboard for managing files and user interactions.

## License
This project is open source and available under the [MIT License]().

This `README.md` file includes:
- **Installation Instructions** for both the backend and frontend, as well as optional Docker setup.
- **Project Structure** that explains the folder layout.
- **Endpoints** for quick reference on available backend routes.

Replace placeholders like `your-username` with the appropriate details for your repository before adding it to your project. This setup should make it easy for collaborators or users to get the project running and understand its structure.
