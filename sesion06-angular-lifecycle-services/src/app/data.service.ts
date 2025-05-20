import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'; // ReactiveJX - permite manejo de eventos, acciones, etc

// decorador Injectable
// sirve para indicar que esta clase será usada por otros componentes/servicios
@Injectable({
  providedIn: 'root' // indicamos que se cargara para toda la aplicacion directamente
})
// una clase
export class DataService {
  // metodo
  getData(): Observable<string> {
    console.log(':: getData() llamado')
    // Simula una llamada a API
    // retorna un string
    return of('Información cargada correctamente');
  }
}
