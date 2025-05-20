# Hooks del Ciclo de Vida en Angular

Angular proporciona varios hooks que permiten ejecutar lógica en momentos clave del ciclo de vida de un componente:

| Hook                    | Momento de ejecución                             | Uso principal                          |
| ----------------------- | ------------------------------------------------ | -------------------------------------- |
| `ngOnChanges`           | Cuando cambian los inputs                        | Reaccionar a cambios en propiedades    |
| `ngOnInit`              | Al inicializar el componente                     | Inicialización, llamadas a servicios   |
| `ngDoCheck`             | En cada ciclo de detección de cambios            | Detección personalizada de cambios     |
| `ngAfterContentInit`    | Tras proyectar contenido externo                 | Inicialización de contenido proyectado |
| `ngAfterContentChecked` | Tras cada verificación de contenido proyectado   | Lógica tras verificación de contenido  |
| `ngAfterViewInit`       | Tras inicializar la vista y subcomponentes hijos | Acceso al DOM y componentes hijos      |
| `ngAfterViewChecked`    | Tras cada verificación de la vista               | Lógica tras verificación de la vista   |
| `ngOnDestroy`           | Antes de destruir el componente                  | Limpieza de recursos                   |

Consulta [lifecycle-order.md](lifecycle-order.md) para ver el orden de ejecución.
