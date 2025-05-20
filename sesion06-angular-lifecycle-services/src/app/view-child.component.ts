import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

// decorador
@Component({
  // selectorr que se usa en la plantilla app.component
  selector: 'app-view-child',
  standalone: true,
  // backtick que permite multilinea
  template: `
    <h3>Demo ViewChild y AfterViewInit</h3>
    <input #inputRef type="text" placeholder="Escribe algo..." />
    <button (click)="focusInput()">Enfocar input</button>
  `
})
export class ViewChildComponent implements AfterViewInit {
  // importamos el decorador ViewChild
  // le agregamos lareferencia (hashtag) #inputRef
  // para obtener la referencia de este elemento en nuestro componente
  @ViewChild('inputRef') inputElement!: ElementRef<HTMLInputElement>;

  // hook para ejecutar codigo despues de renderizado la aplicacion
  ngAfterViewInit() {
    // El input ya está disponible en el DOM
    // .value nos permite actualizar el valor, texto, de un elemento HTML
    console.log('::afterviewinit lanzado');
    this.inputElement.nativeElement.value = 'Texto inicial desde AfterViewInit';
  }

  // se ejecuta al hacer click en el boton
  focusInput() {
    // hago uso de un metodo del elemento html. focus()
    // que enfoca al input, posicionando al usuario en la caja de texto input
    this.inputElement.nativeElement.focus();
  }
}
