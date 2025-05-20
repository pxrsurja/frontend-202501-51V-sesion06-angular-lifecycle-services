import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <h4>Componente Hijo</h4>
    <p>Mensaje recibido: {{ message }}</p>
    <button (click)="enviarRespuesta()">Enviar respuesta al padre</button>
  `
})
export class ChildComponent {
  @Input() message: string = '';
  @Output() notify = new EventEmitter<string>();

  enviarRespuesta() {
    this.notify.emit('¡Hola padre! Recibí tu mensaje.');
  }
}
