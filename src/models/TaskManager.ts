import { Task } from "./Task";

 class TaskManager {
    private tasks: Task[] = [];

    addTask(task: Task): void {
        this.tasks.push(task);
    }

    getTasks(): Task[] {
        return this.tasks;
    }

    completeTask(title: string): boolean {
        const task = this.tasks.find(t => t.title === title);
        if (task) {
            task.markCompleted();
            return true;
        }
        return false;
    }
}

export {TaskManager}
