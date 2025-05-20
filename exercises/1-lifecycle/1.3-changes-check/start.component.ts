import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, DoCheck, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-start',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div>
      <h3>Demo de OnChanges y DoCheck</h3>
      <p><strong>Valor actual:</strong> {{ value }}</p>
      <button (click)="clearLogs()">Limpiar historial</button>
      <h4>Historial de cambios en value (OnChanges):</h4>
      <ul>
        <li *ngFor="let log of valueLogs">{{ log }}</li>
      </ul>
      <h4>Lista de tareas (DoCheck):</h4>
      <ul>
        <li *ngFor="let tarea of tasks">{{ tarea }}</li>
      </ul>
      <h4>Historial de cambios en tareas (DoCheck):</h4>
      <ul>
        <li *ngFor="let log of tasksLogs">{{ log }}</li>
      </ul>
    </div>
  `
})
export class StartComponent implements OnChanges, DoCheck {
  @Input() value: string = '';
  @Input() tasks: string[] = [];

  valueLogs: string[] = [];
  tasksLogs: string[] = [];
  private previousTasksLength = 0;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['value']) {
      const prev = changes['value'].previousValue;
      const curr = changes['value'].currentValue;
      this.valueLogs.push(`Value cambió de "${prev}" a "${curr}"`);
    }
  }

  ngDoCheck() {
    if (this.tasks.length !== this.previousTasksLength) {
      const diff = this.tasks.length - this.previousTasksLength;
      if (diff > 0) {
        this.tasksLogs.push(`Se agregó ${diff} tarea(s)`);
      } else {
        this.tasksLogs.push(`Se eliminó ${Math.abs(diff)} tarea(s)`);
      }
      this.previousTasksLength = this.tasks.length;
    }
  }

  clearLogs() {
    this.valueLogs = [];
    this.tasksLogs = [];
  }
}


// <h2>Demo: OnChanges y DoCheck</h2>

// <label>
//   Cambiar valor:
//   <input [(ngModel)]="valor" placeholder="Escribe algo" />
// </label>
// <button (click)="valor = ''">Resetear valor</button>

// <br><br>

// <button (click)="tareas.push('Tarea ' + (tareas.length + 1))">Agregar tarea</button>
// <button (click)="tareas.pop()" [disabled]="tareas.length === 0">Eliminar tarea</button>

// <app-start [value]="valor" [tasks]="tareas"></app-start>

// en app.component.ts

// valor = '';
// tareas: string[] = [];
