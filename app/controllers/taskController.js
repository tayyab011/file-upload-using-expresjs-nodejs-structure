import { UPLOAD_FOLDER } from "../config/config.js";
import { moveFile } from "../utility/moveFile.js";

// Create

export const createTask = async (req, res) => {
  return res.json({ message: "Task created successfully" });
};

// Read
export const readTask = async (req, res) => {
  return res.json({ message: "Task read successfully" });
};

// Update
export const updateTask = async (req, res) => {
  return res.json({ message: "Task update successfully" });
};

// Delete
export const deleteTask = async (req, res) => {
  return res.json({ message: "Task delete successfully" });
};

export const demo6 = async (req, res) => {
  let myFile = req.files["myFile"];
  let myFilePath = UPLOAD_FOLDER(myFile.name);
  await moveFile(myFile, myFilePath);
  return res.json({ message: "successfully moved file" });
};
