import { Request, Response } from "express";
import { Task } from "../models/Task";
import { TaskManager } from "../models/TaskManager";

const taskManager = new TaskManager();

const getTasks = (req: Request, res: Response) => {
    res.render("index", { tasks: taskManager.getTasks() });
};

const addTask = (req: Request, res: Response) => {
    const { title, description } = req.body;
    if (title && description) {
        taskManager.addTask(new Task(title, description));
    }
    res.redirect("/");
};

const completeTask = (req: Request, res: Response) => {
    const { title } = req.params;
    taskManager.completeTask(title);
    res.redirect("/");
};


export{
  completeTask,
  addTask,
  getTasks
}