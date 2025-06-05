class Task {
    title: string;
    description: string;
    copleted: boolean = false;
    private _createdBy: string;

    constructor(title: string, description: string, createdBySome: string) {
        this.title = title;
        this.description = description;
        this._createdBy = createdBySome;
    }

    get createdBy() {
        return this._createdBy;
    }

    toggleStatus(): void {
        this.copleted = !this.copleted;
    }

    getDetails(): string {
        return `Task: ${this.title} - ${this.description} - ${this.copleted ? 'Completed' : 'Pending'}`
    }

    static createSampleTasks(): Task[] {
        const task1 = new Task('Train', 'Train today', 'Ivan');
        const task2 = new Task('Clean', 'Clean today', 'Peter');

        return [task1, task2];
    }
}

const tasks = Task.createSampleTasks();

tasks.forEach(task =>

console.log(task.getDetails()));