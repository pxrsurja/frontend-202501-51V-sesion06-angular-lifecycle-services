# Detección de cambios en Angular

Angular detecta automáticamente los cambios en las propiedades marcadas con `@Input` y ejecuta el hook `ngOnChanges` cuando detecta una nueva referencia.

- **ngOnChanges:** Se ejecuta solo cuando la referencia del input cambia.
- **ngDoCheck:** Permite implementar lógica personalizada para detectar cambios profundos (por ejemplo, en objetos o arrays).

Usa `ngDoCheck` cuando necesitas detectar cambios internos en objetos complejos que no cambian de referencia.
