# CartasInicialFront — Guía Principal para Claude

## Objetivo

Este repositorio contiene exclusivamente el **frontend** del sitio oficial de **Mitos y Leyendas (MYL)**.

El objetivo del proyecto es desarrollar una aplicación React moderna, escalable y mantenible, preparada para integrarse en el futuro con una API REST desarrollada en **Spring Boot**, utilizando **DDD** y **Clean Architecture**.

El frontend debe permanecer desacoplado de la implementación del backend. Todas las decisiones deben favorecer la reutilización, la modularidad y la facilidad de integración.

---

# Stack Tecnológico

- React 19
- Vite
- React Router v7
- CSS puro (sin frameworks CSS)
- Framer Motion
- Embla Carousel
- React Icons

---

# Principios Generales

Durante cualquier tarea, seguir siempre estos principios:

- Mantener una arquitectura modular y escalable.
- Priorizar componentes reutilizables.
- Evitar duplicación innecesaria.
- Mantener separación entre presentación, estado y lógica.
- No agregar dependencias sin una justificación técnica.
- Pensar siempre en la futura integración con la API.
- No romper la arquitectura existente sin una razón clara.
- Favorecer soluciones simples antes que soluciones complejas.
- Mantener consistencia visual y estructural en todo el proyecto.

---

# Orden de consulta de la documentación

Antes de implementar una funcionalidad, consultar la documentación en el siguiente orden.

## 1. Ingeniería

Define **cómo desarrollar** el proyecto.

- engineering/principles/frontend-philosophy.md
- engineering/architecture/react-architecture.md
- engineering/architecture/component-design.md
- engineering/architecture/state-management.md
- engineering/frontend/state-management.md
- engineering/css/css-system.md
- engineering/css/css-guidelines.md
- engineering/principles/refactoring-rules.md
- engineering/principles/naming-conventions.md
- engineering/react/naming-conventions.md

---

## 2. Proyecto

Define **qué proyecto se está desarrollando**.

- project/project-context.md
- project/ui-design.md
- project/tcg-rules.md

---

## 3. Contratos

Define **cómo debe integrarse el frontend con el futuro backend**.

- contracts/domain-model.md
- contracts/integration-contract.md

---

## 4. Workflows

Define **cómo ejecutar cada tipo de tarea**.

- workflows/create-component.md
- workflows/refactor-component.md
- workflows/fix-bug.md
- workflows/responsive.md

---

# Política de documentación

La documentación forma parte de la arquitectura del proyecto.

Siempre que una tarea:

- modifique la arquitectura,
- cambie el dominio,
- altere un contrato de integración,
- agregue un componente reutilizable,
- cambie convenciones,
- o introduzca una decisión técnica importante,

deberá actualizarse el archivo correspondiente antes de finalizar el trabajo.

Si la documentación existente no alcanza para describir correctamente el cambio, deberá proponerse la creación de un nuevo documento.

---

# Objetivo durante el desarrollo

Cada implementación debe intentar mejorar al menos uno de estos aspectos:

- mantenibilidad
- reutilización
- claridad
- desacoplamiento
- rendimiento
- accesibilidad
- preparación para la futura API

Las decisiones deben tomarse considerando el crecimiento del proyecto a largo plazo.

# Proceso de trabajo

Antes de realizar cambios importantes:

1. Comprender el contexto del problema.
2. Revisar la documentación relacionada.
3. Identificar componentes reutilizables.
4. Evaluar el impacto sobre la arquitectura.
5. Proponer la solución más simple que cumpla los objetivos.
6. Implementar respetando las convenciones del proyecto.
7. Refactorizar únicamente si aporta valor real.
8. Actualizar la documentación afectada.

No realizar cambios que contradigan la arquitectura del proyecto sin una justificación técnica explícita.