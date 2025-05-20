import { Component, ContentChild, ElementRef, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-content-projection',
  template: `
    <h3>Demo Content Projection y AfterContentInit</h3>
    <ng-content></ng-content>
    <button (click)="resaltarContenido()">Resaltar contenido proyectado</button>
  `
})
export class ContentProjectionComponent implements AfterContentInit {
  @ContentChild('contenidoProyectado') contenido!: ElementRef;

  ngAfterContentInit() {
    // El contenido proyectado ya está disponible
    if (this.contenido) {
      this.contenido.nativeElement.style.background = '#ffff99';
    }
  }

  resaltarContenido() {
    if (this.contenido) {
      this.contenido.nativeElement.style.border = '2px solid orange';
    }
  }
}
