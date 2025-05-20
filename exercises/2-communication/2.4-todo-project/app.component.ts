import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h2>Lista de Tareas Colaborativa</h2>
    <app-task-form></app-task-form>
    <app-task-list></app-task-list>
  `
})
export class AppComponent {}
