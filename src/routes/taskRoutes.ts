import express from "express";
import { getTasks, addTask, completeTask } from "../controllers/taskController";

const router = express.Router();

router.get("/", getTasks);
router.post("/add", addTask);
router.post("/complete/:title", completeTask);

export default router;
