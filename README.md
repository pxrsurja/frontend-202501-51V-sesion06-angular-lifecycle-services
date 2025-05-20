# Workshop: Ciclo de Vida y Comunicación entre Componentes Angular

Un taller práctico para comprender y dominar el ciclo de vida de los componentes Angular y las distintas formas de comunicación entre ellos, elementos esenciales para construir aplicaciones robustas y escalables.

## 🎯 Objetivos de aprendizaje

Al finalizar este taller, podrás:

- **Comprender** los distintos hooks del ciclo de vida de componentes en Angular
- **Implementar** correctamente cada hook del ciclo de vida según necesidades específicas
- **Aplicar** las mejores prácticas para manejar la inicialización y destrucción de componentes
- **Dominar** los diferentes mecanismos de comunicación entre componentes
- **Crear** aplicaciones con componentes interactivos y bien estructurados

## 📚 Estructura del Repositorio (Learn-by-Doing)

### 📄 Archivos principales

- README.md - Información general e instrucciones
- LEARNING_PATH.md - Ruta de aprendizaje y objetivos
- SETUP.md - Instrucciones detalladas de configuración del entorno

### 📚 Documentación y guías

| Archivo                             | Descripción                                  |
| ----------------------------------- | -------------------------------------------- |
| component-lifecycle-cheatsheet.md   | Referencia rápida de hooks del ciclo de vida |
| component-communication-patterns.md | Patrones de comunicación entre componentes   |
| knowledge-check.md                  | Preguntas de verificación de conocimientos   |
| resources.md                        | Enlaces a recursos adicionales               |

## 🧪 Ejercicios de aprendizaje (3 horas)

### Bloque 1: Ciclo de Vida de Componentes (90 min)

<details>
<summary><strong>1.1 Introducción al Ciclo de Vida</strong> (20 min)</summary>

- [README.md](exercises/1-lifecycle/1.1-introduction/README.md) - Visión general del ciclo de vida
- [lifecycle-hooks.md](exercises/1-lifecycle/1.1-introduction/lifecycle-hooks.md) - Explicación de cada hook
- [demo-component.ts](exercises/1-lifecycle/1.1-introduction/demo-component.ts) - Componente con hooks implementados
- [lifecycle-order.md](exercises/1-lifecycle/1.1-introduction/lifecycle-order.md) - Orden de ejecución de hooks
- [QUIZ.md](exercises/1-lifecycle/1.1-introduction/QUIZ.md) - Preguntas conceptuales

</details>

<details>
<summary><strong>1.2 OnInit y OnDestroy</strong> (25 min)</summary>

- [README.md](exercises/1-lifecycle/1.2-init-destroy/README.md) - Implementación correcta de inicialización
- [fetch-data.component.ts](exercises/1-lifecycle/1.2-init-destroy/fetch-data.component.ts) - Carga de datos con OnInit
- [timer.component.ts](exercises/1-lifecycle/1.2-init-destroy/timer.component.ts) - Manejo de temporizadores
- [resource-cleanup.md](exercises/1-lifecycle/1.2-init-destroy/resource-cleanup.md) - Limpieza apropiada de recursos
- [start.component.ts](exercises/1-lifecycle/1.2-init-destroy/start.component.ts) - Ejercicio para completar
- [HINTS.md](exercises/1-lifecycle/1.2-init-destroy/HINTS.md) - Guía para implementación correcta

</details>

<details>
<summary><strong>1.3 OnChanges y DoCheck</strong> (25 min)</summary>

- [README.md](exercises/1-lifecycle/1.3-changes-check/README.md) - Detección de cambios
- [input-tracker.component.ts](exercises/1-lifecycle/1.3-changes-check/input-tracker.component.ts) - Seguimiento de cambios
- [change-detection.md](exercises/1-lifecycle/1.3-changes-check/change-detection.md) - Detección de cambios en Angular
- [complex-object.component.ts](exercises/1-lifecycle/1.3-changes-check/complex-object.component.ts) - Manejo de objetos complejos
- [start.component.ts](exercises/1-lifecycle/1.3-changes-check/start.component.ts) - Ejercicio para completar
- [HINTS.md](exercises/1-lifecycle/1.3-changes-check/HINTS.md) - Estrategias para implementación

</details>

<details>
<summary><strong>1.4 AfterView y AfterContent</strong> (20 min)</summary>

- [README.md](exercises/1-lifecycle/1.4-view-content/README.md) - Interacción con views y content
- [view-child.component.ts](exercises/1-lifecycle/1.4-view-content/view-child.component.ts) - Manipulación del DOM
- [content-projection.component.ts](exercises/1-lifecycle/1.4-view-content/content-projection.component.ts) - Uso con content projection
- [start.component.ts](exercises/1-lifecycle/1.4-view-content/start.component.ts) - Plantilla para ejercicio
- [HINTS.md](exercises/1-lifecycle/1.4-view-content/HINTS.md) - Guía para implementación

</details>

### Bloque 2: Comunicación entre Componentes (90 min)

<details>
<summary><strong>2.1 @Input y @Output</strong> (25 min)</summary>

- [README.md](exercises/2-communication/2.1-input-output/README.md) - Comunicación padre-hijo
- [parent.component.ts](exercises/2-communication/2.1-input-output/parent.component.ts) - Componente padre
- [child.component.ts](exercises/2-communication/2.1-input-output/child.component.ts) - Componente hijo
- [event-emitters.md](exercises/2-communication/2.1-input-output/event-emitters.md) - Uso de EventEmitter
- [start.component.ts](exercises/2-communication/2.1-input-output/start.component.ts) - Ejercicio para completar
- [HINTS.md](exercises/2-communication/2.1-input-output/HINTS.md) - Guía para implementación

</details>

<details>
<summary><strong>2.2 ViewChild y ContentChild</strong> (25 min)</summary>

- [README.md](exercises/2-communication/2.2-viewchild/README.md) - Referencia directa a componentes
- [parent-viewchild.component.ts](exercises/2-communication/2.2-viewchild/parent-viewchild.component.ts) - Ejemplo de ViewChild
- [content-parent.component.ts](exercises/2-communication/2.2-viewchild/content-parent.component.ts) - Ejemplo de ContentChild
- [template-reference.md](exercises/2-communication/2.2-viewchild/template-reference.md) - Referencias a plantillas
- [start.component.ts](exercises/2-communication/2.2-viewchild/start.component.ts) - Ejercicio para completar
- [HINTS.md](exercises/2-communication/2.2-viewchild/HINTS.md) - Guía para implementación

</details>

<details>
<summary><strong>2.3 Servicios y BehaviorSubject</strong> (20 min)</summary>

- [README.md](exercises/2-communication/2.3-services/README.md) - Comunicación a través de servicios
- [data.service.ts](exercises/2-communication/2.3-services/data.service.ts) - Servicio compartido
- [producer.component.ts](exercises/2-communication/2.3-services/producer.component.ts) - Componente que emite datos
- [consumer.component.ts](exercises/2-communication/2.3-services/consumer.component.ts) - Componente que consume datos
- [rxjs-patterns.md](exercises/2-communication/2.3-services/rxjs-patterns.md) - Patrones comunes con RxJS
- [start.service.ts](exercises/2-communication/2.3-services/start.service.ts) - Servicio para completar
- [HINTS.md](exercises/2-communication/2.3-services/HINTS.md) - Guía para implementación

</details>

<details>
<summary><strong>2.4 Proyecto: Lista de Tareas Colaborativa</strong> (20 min)</summary>

- [README.md](exercises/2-communication/2.4-todo-project/README.md) - Descripción del proyecto
- [app.component.ts](exercises/2-communication/2.4-todo-project/app.component.ts) - Componente principal
- [task-list.component.ts](exercises/2-communication/2.4-todo-project/task-list.component.ts) - Lista de tareas
- [task-item.component.ts](exercises/2-communication/2.4-todo-project/task-item.component.ts) - Tarea individual
- [task-form.component.ts](exercises/2-communication/2.4-todo-project/task-form.component.ts) - Formulario de nueva tarea
- [task.service.ts](exercises/2-communication/2.4-todo-project/task.service.ts) - Servicio de gestión de tareas
- [HINTS.md](exercises/2-communication/2.4-todo-project/HINTS.md) - Guía para implementación

</details>

## 🔄 Metodología de aprendizaje

Este workshop implementa un enfoque práctico y progresivo, combinando **conceptos teóricos** con **implementación inmediata**. Cada ejercicio sigue esta estructura:

1. **Explicación conceptual** - Fundamentos del tema tratado
2. **Demostración** - Ejemplos funcionales que ilustran el concepto
3. **Ejercicio guiado** - Implementación paso a paso con instrucciones claras
4. **Reto** - Problema a resolver aplicando lo aprendido
5. **Proyecto integrador** - Aplicación práctica de múltiples conceptos

## 📋 Cobertura de funcionalidades

### 🔄 Bloque 1: Ciclo de Vida de Componentes

- **ngOnChanges**: Detección de cambios en propiedades de entrada
- **ngOnInit**: Inicialización de componentes
- **ngDoCheck**: Detección manual de cambios
- **ngAfterContentInit/Checked**: Manejo de contenido proyectado
- **ngAfterViewInit/Checked**: Interacción con elementos del DOM
- **ngOnDestroy**: Limpieza de recursos

### 🔀 Bloque 2: Comunicación entre Componentes

- **@Input/@Output**: Comunicación padre-hijo directa
- **ViewChild/ContentChild**: Acceso a instancias de componentes hijos
- **Servicios compartidos**: Comunicación entre componentes no relacionados
- **BehaviorSubject**: Estado compartido y reactivo
- **Patrón Mediador**: Comunicación centralizada entre componentes

## 🧩 Cómo aprovechar al máximo el workshop

1. **Sigue el orden recomendado** - Los ejercicios están diseñados de forma progresiva
2. **Implementa antes de mirar soluciones** - Intenta resolver los ejercicios por tu cuenta
3. **Experimenta con los ejemplos** - Modifícalos para entender mejor su funcionamiento
4. **Integra múltiples conceptos** - Combina diferentes técnicas en el proyecto final
5. **Consulta la documentación** - Profundiza en los temas con los recursos recomendados

## 📋 Requisitos previos

- Conocimientos básicos de Angular (componentes, módulos)
- Fundamentos de TypeScript (clases, interfaces)
- Node.js y Angular CLI instalados
- Editor de código (Visual Studio Code recomendado)

## 🤝 Contribuciones

Este proyecto sigue las convenciones de Angular para contribuciones:

1. Crea un issue describiendo la mejora o problema
2. Realiza cambios en una rama con prefijo según el tipo:
   - `feat/` para nuevas funcionalidades
   - `fix/` para correcciones
   - `docs/` para documentación
   - `refactor/` para refactorización
3. Usa mensajes de commit siguiendo el formato `type(scope): message`
4. Envía un PR vinculado al issue original

Todas las contribuciones incluirán los créditos correspondientes.

## 📜 Licencia

Este material está licenciado bajo [Creative Commons Attribution-NonCommercial 4.0 International](https://creativecommons.org/licenses/by-nc/4.0/). Puedes:

- Compartir y adaptar el material
- Dar crédito apropiado al autor original

No puedes:

- Usar el material con fines comerciales sin autorización
- Distribuir versiones modificadas bajo términos más restrictivos

Para usos comerciales o autorizaciones especiales, contacta a [info@skills4up.com](mailto:info@skills4up.com).
