

//To create this "ng g interface task/task --type=model"
//After that create the taskservice using "ng g service task/task"

export interface Task {
    id?: number;
    taskName: string;
    description: string;
    completed: boolean;
}
