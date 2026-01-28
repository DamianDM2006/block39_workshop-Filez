import express from "express";
const router = express.Router();
export default router;

import {
  getAllFolders
} from "../db/queries/folders.js";

router.get("/", async (req, res) => {
  const allFolders = await getAllFolders();
  res.send(allFolders);
});