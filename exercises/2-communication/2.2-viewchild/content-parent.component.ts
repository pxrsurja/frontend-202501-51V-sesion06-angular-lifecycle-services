import { Component, ContentChild, ElementRef, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-content-parent',
  template: `
    <h3>Ejemplo de ContentChild</h3>
    <ng-content></ng-content>
    <button (click)="resaltarContenido()">Resaltar contenido proyectado</button>
  `
})
export class ContentParentComponent implements AfterContentInit {
  @ContentChild('contenidoProyectado') contenido!: ElementRef;

  ngAfterContentInit() {
    if (this.contenido) {
      this.contenido.nativeElement.style.background = '#e0f7fa';
    }
  }

  resaltarContenido() {
    if (this.contenido) {
      this.contenido.nativeElement.style.border = '2px solid #00796b';
    }
  }
}
