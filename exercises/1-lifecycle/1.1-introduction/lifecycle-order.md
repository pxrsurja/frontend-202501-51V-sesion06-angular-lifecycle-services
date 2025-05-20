# Orden de Ejecución de Hooks

El ciclo de vida de un componente Angular sigue este orden:

1. **ngOnChanges** (si hay inputs)
2. **ngOnInit**
3. **ngDoCheck**
4. **ngAfterContentInit**
5. **ngAfterContentChecked**
6. **ngAfterViewInit**
7. **ngAfterViewChecked**

Después de la inicialización, en cada ciclo de detección de cambios se ejecutan:

- **ngOnChanges** (si hay cambios en inputs)
- **ngDoCheck**
- **ngAfterContentChecked**
- **ngAfterViewChecked**

Finalmente, antes de destruir el componente:

- **ngOnDestroy**

Consulta el ejemplo en [demo-component.ts](demo-component.ts) para ver los logs en acción.
