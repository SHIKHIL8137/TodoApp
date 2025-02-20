class Task {
  constructor(public title: string, public description: string, public completed: boolean = false) {}

  markCompleted(): void {
      this.completed = true;
  }

  getDetails(): string {
      return `${this.title}: ${this.description} - ${this.completed ? "Completed" : "Pending"}`;
  }
}
export{Task}