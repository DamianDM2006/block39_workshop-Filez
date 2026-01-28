import express from "express";
const router = express.Router();
export default router;

import {
  getAllFolders,
  getSpecificFolderWithFiles
} from "../db/queries/folders.js";

import { createFile } from "../db/queries/files.js";

router.get("/", async (req, res) => {
  const allFolders = await getAllFolders();
  res.send(allFolders);
});

router.param("id", async (req, res, next, id) => {
  const folder = await getSpecificFolderWithFiles(id);
  if (!folder) return res.status(404).send("Folder not found.");

  req.folder = folder;
  next();
});

router.get("/:id", async (req, res) => {
  res.send(req.folder);
});

router.post("/:id/files", async (req, res) => {
  if (!req.body) return res.status(400).send("Request Body is required.");

  const { name, size } = req.body;
  if (!name || !size)
    return res.status(400).send("Request Body requires: name, size");

  const file = await createFile(name, size, req.folder.id);
  res.status(201).send(file);
});