import dotenv from "dotenv";
dotenv.config(); // Load env variables FIRST

import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import dbPool from "./config/db.js";

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

// Health check route
app.get("/", (req, res) => {
  res.json({
    message: "Hospital Management System Backend is running.",
    status: "healthy",
    timestamp: new Date().toISOString(),
  });
});

// Database health check
app.get("/health/db", async (req, res) => {
  try {
    const client = await dbPool.connect();
    client.release();
    res.json({ database: "connected" });
  } catch (error) {
    res.status(500).json({ database: "disconnected", error: error.message });
  }
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    error: "Something went wrong!",
    message: process.env.NODE_ENV === "development" ? err.message : undefined,
  });
});

app.listen(port, () => {
  console.log(`✅ Server running on http://localhost:${port}`);
});
