# Gestión del Estado

## Objetivo

Este documento define el modelo conceptual de cómo se representa y organiza la información dentro del sistema.

Su propósito es establecer principios estructurales del estado sin depender de ninguna tecnología específica.

Estos conceptos sirven como base para cualquier implementación futura en el frontend o en la integración con la API.

---

# Filosofía

El estado representa la información que describe el sistema en un momento determinado.

Su correcta organización es fundamental para mantener la coherencia del sistema, evitar inconsistencias y permitir la evolución del producto sin aumentar su complejidad.

El objetivo es que la información sea:

* clara en su origen;
* predecible en su evolución;
* consistente en su interpretación.

---

# Principios

## Fuente única de verdad

Cada información relevante dentro del sistema debe tener un único origen conceptual.

La duplicación de datos introduce inconsistencias y dificulta la comprensión del sistema.

---

## Estado mínimo

Solo debe considerarse “estado” aquella información que cambia durante la interacción del usuario o a lo largo del ciclo de vida del sistema.

La información derivada no debe considerarse estado independiente.

---

## Localidad del cambio

La información debe ubicarse lo más cerca posible del lugar donde tiene sentido su modificación.

El estado no debe centralizarse sin necesidad.

---

## Flujo predecible

La información debe evolucionar de manera entendible.

Dado un cambio, debe ser posible rastrear:

* qué lo originó;
* qué partes del sistema se ven afectadas;
* cómo se refleja en el resto del modelo.

---

## Separación de responsabilidades

El estado no debe contener lógica de negocio.

Su función es representar información, no decidir reglas del dominio.

---

# Tipos conceptuales de estado

## Estado de interfaz

Información asociada a la representación visual o interacción del usuario.

Ejemplos:

* apertura o cierre de elementos visuales;
* selección de opciones;
* estado de animaciones o transiciones;
* filtros activos en la UI.

Su existencia es temporal y ligada a la interacción.

---

## Estado funcional

Información necesaria para que una funcionalidad específica opere correctamente.

Está acotado a un contexto del sistema (por ejemplo, una página o módulo).

---

## Estado del dominio

Representa información central del negocio.

Este tipo de estado está definido por el modelo del dominio y su fuente de verdad final será la API.

El frontend solo lo consume y lo presenta, sin alterar su significado.

---

# Relación con el sistema externo

El sistema de estado está diseñado para integrarse con una API externa sin modificar su estructura conceptual.

Por este motivo:

* el estado debe ser independiente de su fuente de origen;
* la información puede provenir de sistemas externos;
* el modelo debe permanecer consistente incluso si la implementación cambia;
* la lógica de negocio no forma parte del frontend.

---

# Evolución del modelo

El modelo de estado no debe diseñarse en función de herramientas o librerías actuales.

Su evolución debe responder únicamente a cambios en el dominio del problema, no a decisiones técnicas de implementación.

---

# Qué evitar

Evitar:

* duplicar información sin necesidad;
* modelar el estado en función de herramientas técnicas;
* mezclar estado con lógica de negocio;
* centralizar información sin justificación conceptual;
* anticipar estructuras que aún no existen en el dominio.

---

# Objetivo final

El sistema de estado debe permitir comprender el sistema como un conjunto coherente de información en movimiento, sin depender de cómo se implementa técnicamente.
