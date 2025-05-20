import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-producer',
  template: `
    <h4>Componente Productor</h4>
    <input [(ngModel)]="mensaje" placeholder="Nuevo mensaje" />
    <button (click)="enviar()">Enviar mensaje</button>
  `
})
export class ProducerComponent {
  mensaje = '';

  constructor(private dataService: DataService) {}

  enviar() {
    this.dataService.setMessage(this.mensaje);
    this.mensaje = '';
  }
}
