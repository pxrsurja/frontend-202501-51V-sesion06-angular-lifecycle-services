import { Component, OnInit } from '@angular/core';
import { TaskService, Task } from './task.service';

@Component({
  selector: 'app-task-list',
  template: `
    <ul>
      <app-task-item
        *ngFor="let task of tasks"
        [task]="task"
        (remove)="removeTask(task)"
        (toggle)="toggleTask(task)">
      </app-task-item>
    </ul>
    <p *ngIf="tasks.length === 0">No hay tareas pendientes.</p>
  `
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.taskService.tasks$.subscribe(tasks => this.tasks = tasks);
  }

  removeTask(task: Task) {
    this.taskService.removeTask(task);
  }

  toggleTask(task: Task) {
    this.taskService.toggleTask(task);
  }
}
