


//To create this "ng g service task/task"
//Aftere create Task componene "ng g c taskComponent"

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from './task.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  //Create the url to access the backend
  private apiUrl = "http://localhost:8080/tasks";
  //Go to back end controller to connect the frontend with backend using @CrossOrigin annotation.
  //Go to app.config.ts in the provider import provideHttpClient(withFetch())

  //create the httpClient accesser
  constructor(private httpClient: HttpClient) { }

  /**create the new task. Create the methode named createTask() with the parameter of  
  NewTask -> "which holds the data of newly creted task"
  import Task from task.model
  And it returns Observable data type"which emits multiple data at a time"
  */
  creatTask(newTask: Task):Observable<Task>{
    return this.httpClient.post<Task>(this.apiUrl, newTask);
  }

  //this method shows all the tasks and it uses the array[] to show.
  getAllTask():Observable<Task[]>{
    return this.httpClient.get<Task[]>(this.apiUrl);
  }


  updateTask(taskId: number, updatedTask: Task):Observable<Task>{
    return this.httpClient.put<Task>(this.apiUrl+'/'+taskId, updatedTask);
  }

  deleteTask(taskId: number){
    return this.httpClient.delete(this.apiUrl+'/'+taskId);
  }
}
