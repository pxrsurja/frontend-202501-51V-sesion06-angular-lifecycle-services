import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-view-child',
  template: `
    <h3>Demo ViewChild y AfterViewInit</h3>
    <input #inputRef type="text" placeholder="Escribe algo..." />
    <button (click)="focusInput()">Enfocar input</button>
  `
})
export class ViewChildComponent implements AfterViewInit {
  @ViewChild('inputRef') inputElement!: ElementRef<HTMLInputElement>;

  ngAfterViewInit() {
    // El input ya está disponible en el DOM
    this.inputElement.nativeElement.value = 'Texto inicial desde AfterViewInit';
  }

  focusInput() {
    this.inputElement.nativeElement.focus();
  }
}
