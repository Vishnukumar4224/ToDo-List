import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskComponentComponent } from './task-component/task-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TaskComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
}
