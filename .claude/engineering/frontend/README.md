# Frontend

## Objetivo

La carpeta **frontend** define cómo se implementa la capa de interfaz dentro de la arquitectura del proyecto.

Su propósito es establecer reglas claras sobre cómo se construyen páginas, componentes y flujos de interacción utilizando React como herramienta actual, sin acoplar la arquitectura a una tecnología específica.

Este módulo traduce los principios de ingeniería en estructuras concretas de UI.

---

# Responsabilidad

Este módulo define:

* cómo se estructuran las páginas del frontend;
* cómo se organizan los componentes;
* cómo fluye la información dentro de la interfaz;
* cómo se utiliza React dentro de la arquitectura del proyecto;
* cómo se integran los datos provenientes de futuras APIs.

---

# Qué no define

Este módulo no define:

* la filosofía general de desarrollo (principles);
* el sistema de estilos (css);
* la calidad del código o revisiones (quality);
* el modelo de dominio o contratos de API;
* reglas de negocio.

Estos aspectos pertenecen a sus respectivos módulos.

---

# Filosofía

El frontend es una capa de representación.

Su función principal es transformar datos en interfaz y permitir la interacción del usuario con el sistema.

No debe contener lógica de negocio compleja ni asumir reglas que correspondan al backend.

La complejidad debe residir en la arquitectura, no en los componentes.

---

# Principios de implementación

## Jerarquía clara

La interfaz se organiza en niveles de responsabilidad:

* **Pages** → representan rutas completas del sistema.
* **Sections** → dividen una página en bloques funcionales.
* **Components** → piezas reutilizables de UI.

Cada nivel debe cumplir una única responsabilidad.

---

## Flujo de datos unidireccional

Los datos fluyen desde niveles superiores hacia niveles inferiores.

Los componentes no deben modificar el estado global ni acceder directamente a fuentes externas de datos.

La fuente de verdad debe ser explícita y rastreable.

---

## Componentes predecibles

Un componente debe ser:

* fácil de entender;
* fácil de reutilizar;
* independiente de contexto externo cuando sea posible.

La complejidad debe resolverse en niveles superiores de la jerarquía.

---

## Estado local por defecto

El estado debe mantenerse en el nivel más bajo posible donde tenga sentido.

Solo debe elevarse cuando sea necesario para compartir información entre componentes.

---

## Separación de responsabilidades

La lógica de UI no debe mezclarse con:

* reglas de negocio;
* validaciones del dominio;
* decisiones de persistencia.

El frontend consume datos, no los define.

---

# Integración con API

El frontend está diseñado para integrarse con una API externa en el futuro.

Por lo tanto:

* no se asumen estructuras internas del backend;
* los datos deben ser tratados como externos y no confiables;
* la UI debe adaptarse a contratos definidos en el módulo `contracts`.

---

# Evolución del frontend

El frontend debe evolucionar sin romper su estructura base.

Cambios en diseño o funcionalidad no deben implicar reescrituras completas, sino extensiones de la arquitectura existente.

La estabilidad estructural es más importante que la optimización local de componentes.

---

# Objetivo durante el desarrollo

Toda implementación en el frontend debe cumplir al menos uno de estos objetivos:

* mantener la claridad de la interfaz;
* mejorar la reutilización de componentes;
* reducir acoplamiento entre partes de la UI;
* facilitar la integración con la API;
* preservar la consistencia visual y estructural del sistema.

Cuando una decisión entre en conflicto con estos principios, debe priorizarse la coherencia de la arquitectura por sobre la solución puntual del problema.
