# Guía para implementación

- Usa `@Input` en el hijo para recibir datos del padre.
- Usa `@Output` y `EventEmitter` en el hijo para enviar eventos al padre.
- Enlaza el evento en la plantilla del padre usando `(evento)="handler($event)"`.
- Puedes enviar cualquier tipo de dato a través del evento, no solo strings.
- Prueba enviar diferentes mensajes y respuestas para practicar la comunicación.
