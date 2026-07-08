# CSS

## Objetivo

La carpeta **css** define los principios y la organización del sistema de estilos utilizado por el frontend.

Su propósito es mantener una interfaz consistente, reutilizable y fácil de evolucionar, evitando la proliferación de estilos aislados o soluciones particulares para cada componente.

Los estilos forman parte de la arquitectura del proyecto y deben evolucionar siguiendo los mismos criterios de claridad, simplicidad y consistencia que el resto del código.

---

# Responsabilidad

Este módulo define:

* la organización del sistema de estilos;
* las reglas generales para construir CSS;
* las convenciones del sistema visual;
* los mecanismos que permiten mantener consistencia entre las distintas páginas de la aplicación.

---

# Qué no define

Esta carpeta no documenta:

* la identidad visual del producto;
* decisiones de diseño funcional;
* componentes React;
* arquitectura de la aplicación;
* reglas del negocio.

Estos aspectos pertenecen a sus respectivos módulos de documentación.

---

# Filosofía

El sistema de estilos debe comportarse como una herramienta compartida por toda la aplicación.

Antes de crear nuevos estilos deberá evaluarse si el sistema existente ya proporciona una solución equivalente.

La prioridad no es reducir líneas de CSS, sino construir un sistema claro, reutilizable y predecible.

Cada nuevo estilo debe integrarse naturalmente dentro del sistema existente.

---

# Principios

## Consistencia

Problemas visuales similares deben resolverse mediante soluciones similares.

---

## Reutilización

Los estilos compartidos deben convertirse en parte del sistema común antes que duplicarse entre componentes.

---

## Escalabilidad

La incorporación de nuevas funcionalidades no debe requerir reorganizar el sistema de estilos.

---

## Simplicidad

Cada regla CSS debe resolver una única responsabilidad claramente identificable.

---

# Organización del módulo

Actualmente este módulo se compone de:

## Sistema CSS

Define la estructura general del sistema de estilos, los recursos compartidos y las convenciones utilizadas por todo el proyecto.

Documento relacionado:

* `css-system.md`

---

# Objetivo durante el desarrollo

Toda modificación realizada sobre el sistema CSS deberá contribuir a que la interfaz sea:

* más consistente;
* más reutilizable;
* más fácil de mantener;
* más sencilla de extender.

Cuando existan varias alternativas, deberá elegirse aquella que mejor preserve la coherencia del sistema de estilos existente.
