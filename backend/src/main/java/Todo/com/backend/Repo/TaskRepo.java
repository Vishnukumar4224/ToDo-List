package Todo.com.backend.Repo;

import org.springframework.data.jpa.repository.JpaRepository;

import Todo.com.backend.models.Task;


public interface TaskRepo extends JpaRepository<Task, Long>{

}
