import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-start',
  template: `
    <h3>Ejercicio: AfterViewInit y ViewChild</h3>
    <input #miInput type="text" placeholder="Haz focus desde el botón" />
    <button (click)="enfocarInput()">Enfocar input</button>
  `
})
export class StartComponent implements AfterViewInit {
  @ViewChild('miInput') input!: ElementRef<HTMLInputElement>;

  ngAfterViewInit() {
    // TODO: Puedes inicializar el valor del input aquí
  }

  enfocarInput() {
    this.input.nativeElement.focus();
  }
}
