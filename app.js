import express from "express";
import filesRouter from "./api/files.js";
import foldersRouter from "./api/folders.js";
const app = express();
export default app;

app.use(express.json());

app.get("/", (req, res, next) => {
  res.send("You have arrived at Damian's Filez API!");
});

app.use("/files", filesRouter);
app.use("/folders", foldersRouter);

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send("Oops!  Something went wrong.");
});
