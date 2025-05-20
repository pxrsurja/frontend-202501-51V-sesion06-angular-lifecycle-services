import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { Data2Service } from './data2.service';

@Component({
  selector: 'app-consumer',
  standalone: true,
  template: `
    <h4>Componente Consumidor</h4>
    <p>Mensaje recibido: {{ mensaje }}</p>
  `
})
export class ConsumerComponent implements OnInit {
  mensaje = '';

  constructor(private dataService: Data2Service) {}

  ngOnInit() {
    // aqui la magia
    // me subscribo al observable para que cuando emita el valor lo pueda recibir
    // recibo msg que se asigna a this.message
    this.dataService.message$.subscribe(msg => {
      // cuando se emita el evento yo actualizo this.message
      this.mensaje = msg;
    });
  }
}
