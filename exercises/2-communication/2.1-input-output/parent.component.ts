import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `
    <h3>Componente Padre</h3>
    <input [(ngModel)]="parentMessage" placeholder="Mensaje para el hijo" />
    <app-child
      [message]="parentMessage"
      (notify)="onNotify($event)">
    </app-child>
    <p *ngIf="childResponse">Respuesta del hijo: {{ childResponse }}</p>
  `
})
export class ParentComponent {
  parentMessage = '';
  childResponse = '';

  onNotify(msg: string) {
    this.childResponse = msg;
  }
}

// <app-hijo (notificar)="manejarNotificacion($event)"></app-hijo>
