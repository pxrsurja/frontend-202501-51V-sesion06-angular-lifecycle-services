# Guía para implementación

- Usa `@ViewChild` para acceder a elementos del DOM o componentes hijos después de que la vista se ha inicializado.
- Usa `@ContentChild` para acceder a contenido proyectado desde el componente padre.
- Realiza manipulaciones del DOM solo en los hooks AfterView o AfterContent, nunca en el constructor o ngOnInit.
- Recuerda que el contenido proyectado solo está disponible después de `ngAfterContentInit`.
- Evita manipular el DOM directamente a menos que sea estrictamente necesario; prefiere el binding de Angular cuando sea posible.
