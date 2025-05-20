# Guía para implementación

- Usa `@ViewChild` para acceder a elementos o componentes hijos declarados en la plantilla.
- Usa `@ContentChild` para acceder a elementos proyectados desde el componente padre.
- Recuerda que el acceso a las referencias solo está disponible después de los hooks del ciclo de vida correspondientes (`ngAfterViewInit` o `ngAfterContentInit`).
- Puedes combinar ambos decoradores en un mismo componente para casos avanzados.
