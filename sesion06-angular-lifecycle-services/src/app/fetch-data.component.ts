import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from './data.service';
import { CommonModule } from '@angular/common';

// decorador
@Component({
  // selector html
  selector: 'app-fetch-data',
  // funcionara sin modulo
  standalone: true,
  imports:[CommonModule], // agregar en fetch-data

  // plantilla ngIf-> angular if(si), indica que si data esta presente entonces se muestra su contenido

  // {{  }} -> llaves indican que se va a evaluar(pintar) una variable o expresion
  template: `<div *ngIf="data">Datos: {{ data }}</div>`
})
export class FetchDataComponent implements OnInit, OnDestroy {
  // atributo de la clase: data
  data: any;
  private subscription!: Subscription; // espia de un EVENTO, ejm: al iniciar el sistema, al borrar un registro

  // asignacion sin constructor
  constructor(private dataService: DataService) {}

  // se inicia
  // AQUI va llamadas API, asincronas, etc
  ngOnInit() {
    // llamamos al [servicio] (para comunicar entre componentes o obtener datos externos)
    // getData() retorna una especie de promesa, debemos subscribirnos a su RETORNO
    // por eso usamos .subscribe(  )
    // la funcion dentro de subscribe se ejecuta al obtener la respuesta ASINCRONA
    this.subscription = this.dataService.getData().subscribe(result => {
      // la logica esta aqui
      // se asigna el atributo data al resultado
      console.log('::getData subscription, obtenido', result)
      this.data = result;
      console.log(':: ahora el valor de this.data es -> ', this.data)
    });
  }

  // se destruye
  ngOnDestroy() {
    // liberar memoria de la variable subscription
    if (this.subscription) { // valida si existe
      this.subscription.unsubscribe();
    }
  }
}
