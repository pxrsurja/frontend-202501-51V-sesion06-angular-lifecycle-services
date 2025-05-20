import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-parent-viewchild',
  template: `
    <h3>Ejemplo de ViewChild</h3>
    <input #inputRef type="text" placeholder="Escribe algo..." />
    <button (click)="focusInput()">Enfocar input desde el padre</button>
  `
})
export class ParentViewchildComponent {
  @ViewChild('inputRef') inputElement!: ElementRef<HTMLInputElement>;

  focusInput() {
    this.inputElement.nativeElement.focus();
  }
}
