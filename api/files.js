import express from "express";
const router = express.Router();
export default router;

import {
  getAllFiles
} from "../db/queries/files.js";

router.get("/", async (req, res) => {
  const allFiles = await getAllFiles();
  res.send(allFiles);
});