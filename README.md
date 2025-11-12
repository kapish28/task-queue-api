# Task Queue API

Simple Node.js + Express backend demonstrating asynchronous task handling (event-driven).

## Features
- POST /add-task  -> add a task to the queue
- GET /queue      -> view pending tasks
- GET /processed  -> view processed tasks
- Background worker processes tasks periodically

## Tech
Node.js, Express

## Run locally
1. Clone: `git clone https://github.com/<your-username>/task-queue-api.git`
2. `cd task-queue-api`
3. `npm install`
4. `npm start`
5. POST a task: `POST http://localhost:3000/add-task` with JSON body `{ "task": "Send message" }`
