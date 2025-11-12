// index.js - simple Task Queue API (Node.js + Express)
const express = require("express");
const app = express();
app.use(express.json());

let queue = [];
let processed = [];

// Add a task to the queue
app.post("/add-task", (req, res) => {
  const { task } = req.body;
  if (!task) return res.status(400).json({ error: "task required" });
  queue.push({ id: Date.now(), task });
  return res.json({ message: "Task added", queueLength: queue.length });
});

// Get queued tasks (for demo)
app.get("/queue", (req, res) => {
  return res.json({ queue });
});

// Get processed tasks
app.get("/processed", (req, res) => {
  return res.json({ processed });
});

// Simple worker: processes one task every 3 seconds
setInterval(() => {
  if (queue.length > 0) {
    const job = queue.shift();
    // simulate work
    processed.push({ ...job, processedAt: new Date().toISOString() });
    console.log("Processed:", job);
  }
}, 3000);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
