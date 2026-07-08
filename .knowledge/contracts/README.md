# Contracts

## Objetivo

La carpeta **contracts** define el lenguaje común entre el frontend y el futuro backend.

Su propósito es establecer un contrato estable entre ambos proyectos para que puedan evolucionar de manera independiente sin romper la integración.

Los documentos de esta carpeta describen el negocio desde una perspectiva funcional y estable. No representan detalles de implementación, estructuras de base de datos ni decisiones específicas de React o Spring Boot.

---

# Filosofía

El frontend y el backend son proyectos independientes.

La única dependencia entre ambos debe ser el contrato definido en esta carpeta.

Esto significa que:

- El frontend no debe asumir cómo funciona internamente el backend.
- El backend no debe asumir cómo está implementado el frontend.
- Ambos deben compartir el mismo lenguaje del dominio.
- Las reglas del negocio deben tener una única fuente de verdad: el backend.

---

# Objetivos

Los contratos deben permitir:

- Comprender el dominio del negocio.
- Definir una comunicación estable entre frontend y backend.
- Reducir el acoplamiento entre proyectos.
- Facilitar la evolución independiente de cada aplicación.
- Evitar ambigüedades en los conceptos del negocio.

---

# Estructura

## domain-model.md

Describe el modelo conceptual del negocio.

Responde la pregunta:

> ¿Qué conceptos existen dentro del dominio?

---

## integration-contract.md

Define cómo se comunican frontend y backend.

Responde la pregunta:

> ¿Cómo intercambian información ambas aplicaciones?

---

## backend-assumptions.md

Define las garantías que el backend ofrece al frontend.

Responde la pregunta:

> ¿Qué puede asumir el frontend acerca del comportamiento del backend?

---

## security.md

Define las reglas de seguridad que deben respetarse durante la comunicación entre ambos sistemas.

Responde la pregunta:

> ¿Cómo debe protegerse la información intercambiada?

---

# Alcance

Esta carpeta describe únicamente:

- conceptos del negocio;
- contratos públicos;
- reglas de comunicación;
- convenciones compartidas.

No documenta:

- implementación de React;
- implementación de Spring Boot;
- estructura de la base de datos;
- clases;
- repositorios;
- servicios;
- controladores.

---

# Relación con el resto de la documentación

Los contratos se apoyan sobre el contexto del proyecto definido en:

- `project/project-context.md`

Y sirven como base para:

- la futura API;
- los servicios del frontend;
- la integración entre ambos proyectos.

---

# Criterios de actualización

Actualizar esta carpeta cuando ocurra alguno de los siguientes cambios:

- se modifique el dominio del negocio;
- aparezca una nueva entidad del dominio;
- cambie una regla funcional;
- cambie el formato de comunicación entre frontend y backend;
- aparezcan nuevos requisitos de seguridad.

No modificar estos documentos para reflejar detalles internos de implementación.