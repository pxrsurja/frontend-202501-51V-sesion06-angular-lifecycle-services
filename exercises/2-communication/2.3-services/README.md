# 2.3 Comunicación a través de Servicios y BehaviorSubject

En este bloque aprenderás a compartir datos y comunicar componentes no relacionados usando servicios y el patrón reactivo con `BehaviorSubject` de RxJS.

## Objetivos

- Comprender cómo usar servicios para compartir datos entre componentes.
- Implementar un estado compartido y reactivo con `BehaviorSubject`.
- Aplicar el patrón de publicación/suscripción en Angular.

## Archivos de apoyo

- [data.service.ts](data.service.ts) — Servicio compartido con BehaviorSubject
- [producer.component.ts](producer.component.ts) — Componente que emite datos
- [consumer.component.ts](consumer.component.ts) — Componente que consume datos
- [rxjs-patterns.md](rxjs-patterns.md) — Patrones comunes con RxJS
- [start.service.ts](start.service.ts) — Servicio para completar
- [HINTS.md](HINTS.md) — Guía para implementación

## Estructura del bloque

1. **Explicación conceptual:** ¿Por qué usar servicios y BehaviorSubject?
2. **Demostración:** Ejemplo de flujo de datos reactivo entre componentes.
3. **Ejercicio guiado:** Completa el servicio y conecta los componentes.
4. **Reto:** Extiende la funcionalidad para manejar múltiples tipos de datos.
