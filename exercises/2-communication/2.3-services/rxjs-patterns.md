# Patrones comunes con RxJS en Angular

- Usa `BehaviorSubject` para mantener y compartir el estado más reciente entre componentes.
- Suscríbete al observable expuesto por el servicio para recibir actualizaciones en tiempo real.
- Usa el método `next()` para emitir nuevos valores desde cualquier componente que tenga acceso al servicio.
- Recuerda cancelar las suscripciones si el observable no es de tipo "hot" o si el componente puede ser destruido.

**Ejemplo básico:**

```typescript
const subject = new BehaviorSubject<number>(0);
subject.next(1);
subject.subscribe(value => console.log(value)); // Imprime 1
