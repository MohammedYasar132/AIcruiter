# AIcuriter – AI Powered Interview Simulation Platform

AIcuriter is a **SaaS-style AI interview preparation platform** that helps users practice technical and HR interviews using AI.
Users can upload their resume, generate personalized interview questions, answer them through voice interaction, and receive AI-powered feedback.

The platform demonstrates **real-world AI SaaS architecture**, integrating **LLM APIs, authentication, payments, and scalable backend services**.

---

# 🚀 Features

### 📄 Resume Upload & Analysis

* Users upload their **resume in PDF format**
* Backend extracts text and analyzes:

  * Skills
  * Experience
  * Projects
  * Role preferences

### 🤖 AI Generated Interview Questions

* Generates **personalized interview questions** using LLM APIs
* Questions are tailored based on:

  * Resume content
  * Selected role
  * Experience level

### 🎤 Voice Based Interview Interaction

* Users answer questions using **speech recognition**
* Implemented using **Web Speech API**
* Simulates a real interview environment

### 🧠 AI Answer Evaluation

The AI evaluates candidate responses and provides feedback on:

* Technical accuracy
* Communication clarity
* Confidence level
* Answer completeness

### 💳 Credit Based Access System

* Platform follows **SaaS monetization model**
* Each interview session consumes credits
* Users can purchase additional credits

### 💰 Payment Integration

* Integrated payment gateway for credit purchases
* Secure transaction workflow
* Payment verification handled on backend

### 🔐 Authentication System

* Google authentication using Firebase
* JWT-based secure session handling
* Cookie-based authentication

### 📊 Interview Analytics

* Stores interview session data
* Tracks user performance
* Provides feedback history

---

# 🏗️ Tech Stack

## Frontend

* React.js
* Framer Motion
* Axios
* Web Speech API
* Redux Toolkit

## Backend

* Node.js
* Express.js
* MongoDB
* JWT Authentication

## AI Integration

* OpenRouter API (LLM models)

## Authentication

* Firebase Google Authentication

## Payment System

* Stripe / Razorpay

## Deployment

* Render

---

# ⚙️ System Architecture

User uploads resume
↓
Resume Parsing & Skill Extraction
↓
AI Question Generation (LLM API)
↓
Interview Session (Voice Interaction)
↓
AI Evaluation of Responses
↓
Feedback & Performance Insights

---

# 📂 Project Structure

AIcuriter
│
├── client
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── redux
│   │   ├── hooks
│   │   └── utils
│
├── server
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── middleware
│   ├── services
│   └── utils

---

# 🧑‍💻 Installation

## Clone the Repository

git clone https://github.com/your-username/aicruiter.git
cd aicruiter

---

## Install Dependencies

### Frontend

cd client
npm install

### Backend

cd server
npm install

---

## Start the Application

### Start Backend

cd server
npm run dev

### Start Frontend

cd client
npm run dev

---

# 🔐 Environment Variables

Create a `.env` file inside the **server folder**.

Example:

PORT=8000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
OPENROUTER_API_KEY=your_openrouter_api_key
STRIPE_SECRET_KEY=your_stripe_secret_key

---

# 🌐 Deployment

The project can be deployed using **Render**.

### Deployment Setup

1. Push repository to GitHub
2. Connect GitHub repository to Render
3. Deploy frontend and backend services
4. Configure environment variables
5. Connect MongoDB Atlas database

---

# 📈 Future Improvements

* AI based resume scoring
* Video interview simulation
* Detailed analytics dashboard
* AI behavioral interview analysis
* Multi-language interview support
* Recruiter dashboard for candidate screening

---

# 👨‍💻 Author

Mohammed Yasar
MERN Stack Developer | AI Applications Builder

GitHub: https://github.com/MohammedYasar132

---

# ⭐ Support

If you find this project useful, please give it a **⭐ on GitHub**.
It helps others discover the project.
