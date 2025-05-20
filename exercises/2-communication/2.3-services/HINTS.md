# Guía para implementación

- Declara un `BehaviorSubject` en el servicio para almacenar el estado compartido.
- Expón el observable (`asObservable()`) para que otros componentes puedan suscribirse.
- Usa un método público en el servicio para actualizar el valor del BehaviorSubject.
- En el componente productor, llama al método del servicio para emitir nuevos valores.
- En el componente consumidor, suscríbete al observable para recibir actualizaciones.
- Recuerda limpiar las suscripciones si es necesario (por ejemplo, usando `takeUntil` o `async` pipe).
