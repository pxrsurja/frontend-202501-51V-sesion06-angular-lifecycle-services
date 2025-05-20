import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-start',
  template: `
    <h3>Ejercicio: ViewChild y ContentChild</h3>
    <input #inputRef type="text" placeholder="Enfoca este input" />
    <button (click)="focusInput()">Enfocar input</button>
    <!-- TODO: Agrega aquí un ejemplo de ContentChild usando ng-content -->
  `
})
export class StartComponent {
  @ViewChild('inputRef') inputElement!: ElementRef<HTMLInputElement>;

  focusInput() {
    this.inputElement.nativeElement.focus();
  }
}
