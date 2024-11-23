package Todo.com.backend.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
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

    // @GetMapping
    // public List<Task> getAllTask() {
    //     return taskRepo.findAll();
    // }
 

    @PostMapping
    public Task CreateTask(@RequestBody Task task) {  
        taskRepo.save(task);
        return task;
    }
    
}
