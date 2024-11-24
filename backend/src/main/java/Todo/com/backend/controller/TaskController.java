package Todo.com.backend.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import Todo.com.backend.Repo.TaskRepo;
import Todo.com.backend.models.Task;



@RestController
@CrossOrigin
@RequestMapping("/tasks")
public class TaskController {

    @Autowired
    private TaskRepo taskRepo;

   
    @PostMapping
    public Task CreateTask(@RequestBody Task task) {  
        taskRepo.save(task);
        return task;
    }

    @GetMapping
    public List<Task> getAllTask() {
        return taskRepo.findAll();
    }

    // @PutMapping("/{id}")
    // public Task UpdateTask(@PathVariable Long id, @RequestBody Task task) {
    //     task.setId(id);        
    //     return taskRepo.save(task);
    // }

    @DeleteMapping("/{id}")
    public void deleteTask(@PathVariable Long id){
        taskRepo.deleteById(id);
    }
    
}
