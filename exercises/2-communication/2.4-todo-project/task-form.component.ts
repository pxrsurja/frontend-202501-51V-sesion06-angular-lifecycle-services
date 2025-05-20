import { Component } from '@angular/core';
import { TaskService } from './task.service';

@Component({
  selector: 'app-task-form',
  template: `
    <form (ngSubmit)="addTask()" #form="ngForm">
      <input
        type="text"
        [(ngModel)]="title"
        name="title"
        required
        placeholder="Nueva tarea"
      />
      <button type="submit" [disabled]="!title">Agregar</button>
    </form>
  `
})
export class TaskFormComponent {
  title = '';

  constructor(private taskService: TaskService) {}

  addTask() {
    if (this.title.trim()) {
      this.taskService.addTask(this.title.trim());
      this.title = '';
    }
  }
}
