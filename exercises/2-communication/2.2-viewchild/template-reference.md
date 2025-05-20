# Referencias a plantillas en Angular

- Usa `#nombreRef` en la plantilla para crear una referencia local a un elemento o componente.
- `@ViewChild('nombreRef')` permite acceder a esa referencia desde el componente.
- `@ContentChild('nombreRef')` permite acceder a referencias proyectadas desde el padre.

**Ejemplo:**

```html
<!-- En el hijo -->
<input #miInput />

<!-- En el padre -->
<app-hijo></app-hijo>
```

```ts
@ViewChild('miInput') input!: ElementRef;
```
