import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from './task.service';

@Component({
  selector: 'app-task-item',
  template: `
    <li [class.completed]="task.completed">
      <input type="checkbox" [checked]="task.completed" (change)="toggle.emit()" />
      {{ task.title }}
      <button (click)="remove.emit()">Eliminar</button>
    </li>
  `,
  styles: [`
    .completed { text-decoration: line-through; color: gray; }
    li { margin-bottom: 4px; }
  `]
})
export class TaskItemComponent {
  @Input() task!: Task;
  @Output() remove = new EventEmitter<void>();
  @Output() toggle = new EventEmitter<void>();
}
