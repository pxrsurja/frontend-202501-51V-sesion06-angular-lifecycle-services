import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

// un servicio usa un decorador Injectable
// para ser usado por otros componentes, modulos
@Injectable({
  providedIn: 'root'
})
export class Data2Service {
  private messageSubject = new BehaviorSubject<string>('Mensaje inicial');

  // atributo / propiedad
  // dolar al fina es por convencion, indica que este valor es un observable
  message$ = this.messageSubject.asObservable(); // un observable es un valor que se espera emitir y recibir (como una promesa)

  // al usar eventos podemos emitir UN VALOR
  // y que VARIOS componentes lo reciban
  // ejm: se actualiza el carrito de compras entonces el header lo recibe, el footer, el contenido de la aplicacion, etc

  // los eventos son globales a nivel de navegador
  // eventos comunes: onClick, onScroll, onResize, onReload, etc

  // emitimos un valor al evento de comportamiento
  setMessage(newMessage: string) {
    // usamos .next para enviar ese valor al evento
    // y que el evento (messageSubject) lo emita
    this.messageSubject.next(newMessage);
  }
}
