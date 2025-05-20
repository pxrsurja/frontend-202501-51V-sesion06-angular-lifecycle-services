import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-consumer',
  template: `
    <h4>Componente Consumidor</h4>
    <p>Mensaje recibido: {{ mensaje }}</p>
  `
})
export class ConsumerComponent implements OnInit {
  mensaje = '';

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.message$.subscribe(msg => {
      this.mensaje = msg;
    });
  }
}
