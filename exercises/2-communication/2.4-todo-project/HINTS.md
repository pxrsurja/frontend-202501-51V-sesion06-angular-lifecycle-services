# Guía para implementación

- Usa un servicio con `BehaviorSubject` para almacenar y compartir la lista de tareas.
- El formulario agrega nuevas tareas llamando a un método del servicio.
- La lista de tareas se suscribe al observable del servicio para mostrar los cambios en tiempo real.
- Cada tarea puede marcarse como completada o eliminarse usando eventos y métodos del servicio.
- Como reto, implementa un contador de tareas completadas o un filtro para ver solo tareas pendientes/completadas.
