# Task Queue API — Final Year Project

This project demonstrates asynchronous task processing using Node.js and Express.js.  
It simulates an event-driven backend where tasks are queued and processed in the background — similar to architectures used in real-world CRM or messaging systems like DoubleTick.io.

---

## 🎯 Objective
To understand and implement backend systems that use asynchronous and event-driven task handling to improve performance and scalability.

---

## ⚙️ Features
- **POST /add-task** → Add a task to the queue  
- **GET /queue** → View pending tasks  
- **GET /processed** → View processed tasks  
- Background worker automatically processes queued tasks at regular intervals

---

## 🧠 Tech Stack
Node.js | Express.js | JavaScript

---

## 🚀 How to Run Locally
1. Clone the repository  
   ```bash
   git clone https://github.com/kapish28/task-queue-api.git
   cd task-queue-api
