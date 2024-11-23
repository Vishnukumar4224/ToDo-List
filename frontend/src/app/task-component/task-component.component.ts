

//create this with "ng g c taskService"

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
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
export class TaskComponentComponent {

  constructor(private taskService: TaskService){}


  //This property declares that how does the models should be in the initial stage
  newTask: Task = {"taskName": "","Description": "","completed":false}

  //Subscribe calls the observable's function that produces and emits data
  //Inside Subscribe creat the  call back which gives "CreatedTask" data
  createTask():void{
    this.taskService.creatTask(this.newTask).subscribe((CreatedTask)=>{
      this.newTask = {"taskName": "","Description": "","completed":false};// After getting CreatedTask we reset newTask
    })
  }
}
