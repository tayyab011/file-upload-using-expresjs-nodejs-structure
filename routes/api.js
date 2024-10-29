import express from "express";
const router = express.Router();
import * as taskController from "../app/controllers/taskController.js";

// Create Route
router.post("/createTask", taskController.createTask);

// Read Route
router.get("/readTask", taskController.readTask);

// Update Route
router.put("/updateTask", taskController.updateTask);

// Delete Route
router.delete("/deleteTask", taskController.deleteTask);
router.post("/demo6", taskController.demo6);

export default router;
