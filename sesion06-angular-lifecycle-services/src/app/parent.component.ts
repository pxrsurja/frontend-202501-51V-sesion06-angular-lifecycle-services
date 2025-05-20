import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChildComponent } from './child.component';

// decorador
@Component({
  selector: 'app-parent',
  standalone: true,
  // formsModule -> modulo para trabajar con formularios
  // commonmodule -> importa directivas comunes para componentes: ejm ngIf
  imports: [FormsModule, CommonModule, ChildComponent],
  template: `
    <h3>Componente Padre</h3>
    <input [(ngModel)]="parentMessage" placeholder="Mensaje para el hijo" />
    <app-child
      [message]="parentMessage"
      (notify)="onNotify($event)">
    </app-child>
    <!-- NO SE RENDERIZA / PINTA / MUESTRA ESTE PARRAFO <p>..... -->
    <!-- <p *ngIf="false">Respuesta del hijo: {{ childResponse }}</p> -->

    <!-- SE RENDERIZA / PINTA / MUESTRA ESTE PARRAFO <p>..... -->
    <!-- <p *ngIf="true">Respuesta del hijo: {{ childResponse }}</p> -->

    <p *ngIf="childResponse">Respuesta del hijo: {{ childResponse }}</p>
  `
})
export class ParentComponent {
  parentMessage = '';
  childResponse = '';

  // hijo a padre
  onNotify(msg: string) {
    this.childResponse = msg;
  }
}

// <app-hijo (notificar)="manejarNotificacion($event)"></app-hijo>
