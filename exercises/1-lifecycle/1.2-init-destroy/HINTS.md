# Guía para implementación correcta

- Usa `ngOnInit` para inicializar datos, suscribirte a servicios o configurar el estado inicial.
- Usa `ngOnDestroy` para cancelar suscripciones, limpiar timers o liberar recursos externos.
- Si usas observables, guarda la suscripción en una propiedad y cancélala en `ngOnDestroy`.
- Si usas intervalos o timeouts, asegúrate de detenerlos al destruir el componente.
