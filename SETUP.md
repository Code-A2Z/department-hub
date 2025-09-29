# Project Setup Guide: Department Hub

## Prerequisites

Ensure you have the following installed on your system:
* [Node.js](https://nodejs.org/) (which includes npm)
* [Git](https://git-scm.com/)

# Steps
1. Clone the repository:
```bash
 git clone (https://github.com/)[your-username]/department-hub.git
cd department-hub
```
2. Backend Setup

The backend serves the API and connects to the database.
```bash
## Navigate to the backend directory
cd server/src

## Install backend dependencies
npm install

##Start the backend server
node server.js
```
The backend server should be be running(e.g., on http://localhost:5000).

3. Frontend Setup
The frontend is a React application built with Tailwind CSS.
```bash

# Navigate to client and src directory
#Install frontend dependencies:
cd client\src
npm install

Start the frontend development server
npm run dev
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\


### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

