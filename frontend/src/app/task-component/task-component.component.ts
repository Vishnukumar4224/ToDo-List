

//create this with "ng g c taskService"

import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task/task.service';
import { Task } from '../task/task.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-component',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './task-component.component.html',
  styleUrl: './task-component.component.css'
})
export class TaskComponentComponent implements OnInit{

  constructor(private taskService: TaskService){}
  ngOnInit(): void {
    this.getAlltasks();
  }


  //This property declares that how does the models should be in the initial stage
  newTask: Task = {"taskName": "","description": "","completed":false};

  //this property shows the initial value as empty
  tasks: Task[]= [];

  //Subscribe calls the observable's function that produces and emits data
  //Inside Subscribe creat the  call back which gives "CreatedTask" data
  createTask():void{
    this.taskService.creatTask(this.newTask).subscribe((CreatedTask)=>{
      this.newTask = {"taskName": "","description": "","completed":false};// After getting CreatedTask we reset newTask
      this.tasks.push(CreatedTask); //automaticlly add the task into the table
      alert("The Task is added");
    })
  }

  getAlltasks(){
    this.taskService.getAllTask().subscribe((tasks)=>{
      this.tasks = tasks;
    })
  }

  deleteTask(taskId: any){
    if(confirm("Are You Sure want to delete this Task?"))
    this.taskService.deleteTask(taskId)
    .subscribe(()=>{
      this.tasks = this.tasks.filter((task)=>task.id !== taskId);
      alert("Task is deleted");


    })
  }
}
