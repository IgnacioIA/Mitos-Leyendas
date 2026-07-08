# Guía de Desarrollo CSS

## Objetivo

Este documento define los criterios que deben seguirse al escribir, modificar o refactorizar estilos dentro del proyecto.

Su propósito no es establecer reglas de diseño visual, sino proporcionar una forma consistente de construir y mantener el sistema CSS del frontend.

Toda decisión relacionada con los estilos debe contribuir a preservar la simplicidad, la reutilización y la coherencia del sistema.

---

# Principios

## Reutilizar antes de crear

Antes de incorporar una nueva regla CSS, verificar si el sistema existente ya ofrece una solución equivalente.

Siempre que sea posible, reutilizar estilos compartidos antes que crear nuevos.

---

## Responsabilidad única

Cada regla CSS debe resolver una única responsabilidad.

Evitar clases que intenten controlar simultáneamente estructura, apariencia y comportamiento.

Las responsabilidades deben permanecer claramente separadas.

---

## Estilos locales por defecto

Los estilos pertenecen al componente que los utiliza.

Solo deben incorporarse al sistema global cuando representen una necesidad compartida por múltiples componentes.

No promover estilos al nivel global de forma preventiva.

---

## Pensar en el sistema

Cada nueva regla debe integrarse naturalmente con el resto del sistema CSS.

Antes de agregar estilos nuevos, evaluar cómo afecta la consistencia general del proyecto.

---

# Organización de los estilos

## Variables

Los valores reutilizables deben representarse mediante variables CSS.

No repetir colores, tamaños, espaciados o tipografías cuando ya existan definiciones compartidas.

---

## Utilidades

Las utilidades deben representar soluciones genéricas reutilizadas por distintas partes de la aplicación.

No crear utilidades para resolver necesidades específicas de un único componente.

---

## Componentes

Cada componente debe mantener únicamente los estilos necesarios para representar su propia interfaz.

No modificar desde un componente la estructura visual de otros componentes.

---

# Responsive

La adaptación responsive debe formar parte del diseño desde el inicio.

Siempre que sea posible:

* priorizar soluciones fluidas;
* reutilizar los breakpoints definidos por el proyecto;
* evitar reglas específicas para casos aislados.

La incorporación de nuevos breakpoints deberá estar técnicamente justificada.

---

# Evolución del sistema

Antes de agregar nuevos estilos, responder las siguientes preguntas:

* ¿Ya existe una solución equivalente?
* ¿La responsabilidad pertenece al componente o al sistema global?
* ¿El nuevo estilo podrá reutilizarse?
* ¿La modificación mantiene la consistencia del proyecto?
* ¿Existe una alternativa más simple?

Si alguna respuesta no es clara, deberá revisarse la solución propuesta.

---

# Qué evitar

Evitar:

* duplicar reglas existentes;
* utilizar valores repetidos cuando puedan representarse mediante variables;
* crear estilos globales para resolver problemas locales;
* modificar componentes ajenos mediante selectores acoplados;
* incorporar excepciones innecesarias al sistema CSS;
* aumentar la complejidad del sistema sin un beneficio claro.

Cada cambio debe contribuir a que el sistema CSS sea más consistente, más sencillo de comprender y más fácil de mantener.
