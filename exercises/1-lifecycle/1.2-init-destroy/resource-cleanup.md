# Limpieza apropiada de recursos en Angular

Es fundamental liberar recursos cuando un componente se destruye para evitar fugas de memoria:

- Cancela **suscripciones** a observables (`unsubscribe`).
- Detén **timers** o intervalos (`clearInterval`, `clearTimeout`).
- Libera **event listeners** o recursos externos.

Implementa siempre la lógica de limpieza en `ngOnDestroy`.
