# Arquitectura de la Aplicación

## Objetivo

Este documento define la organización estructural del frontend.

Su propósito es establecer una arquitectura consistente que facilite el desarrollo, la comprensión y la evolución de la aplicación.

La estructura descrita aquí debe servir como referencia para incorporar nuevas funcionalidades sin modificar innecesariamente la organización existente.

---

# Principios Arquitectónicos

La arquitectura del frontend se basa en una estructura jerárquica donde cada nivel posee una responsabilidad claramente definida.

Cada módulo debe conocer únicamente aquello que necesita para cumplir su función.

La organización del proyecto debe facilitar la comprensión del flujo de la aplicación y minimizar el impacto de los cambios.

---

# Organización del Proyecto

La estructura general del frontend se organiza de la siguiente manera.

```text
src/
│
├── assets/
├── components/
├── layout/
├── pages/
├── routes/
├── styles/
└── ...
```

Cada carpeta representa una responsabilidad específica dentro de la aplicación.

---

## assets

Contiene los recursos estáticos utilizados por el frontend.

Las imágenes, ilustraciones y demás recursos deben organizarse siguiendo la estructura definida por el proyecto.

No debe contener lógica de aplicación.

---

## components

Contiene componentes reutilizables utilizados por múltiples páginas o funcionalidades.

Un componente pertenece a esta carpeta únicamente cuando representa una abstracción reutilizable dentro del proyecto.

No deben ubicarse aquí componentes exclusivos de una única página.

---

## layout

Define la estructura compartida de la aplicación.

Aquí residen aquellos componentes responsables de construir el marco común del sitio, como encabezados, navegación, pie de página y cualquier otro elemento presente en múltiples páginas.

---

## pages

Representa las distintas funcionalidades visibles de la aplicación.

Cada página constituye un punto de entrada independiente dentro de la interfaz y organiza internamente sus propias secciones y componentes.

Cada página es responsable exclusivamente de coordinar las secciones que la componen.

---

## routes

Centraliza la configuración de navegación del frontend.

La definición de rutas debe mantenerse desacoplada de la implementación de cada página.

---

## styles

Contiene los estilos compartidos utilizados por toda la aplicación.

Los estilos específicos de un componente o de una página deberán permanecer junto a dichos elementos siempre que sea posible.

---

# Jerarquía de la Interfaz

La interfaz se organiza mediante una jerarquía de responsabilidades.

```text
Página
    ↓
Sección
    ↓
Componente
```

Cada nivel cumple un propósito diferente.

---

## Página

Representa una funcionalidad completa accesible mediante una ruta.

Su responsabilidad principal consiste en coordinar las distintas secciones que forman la pantalla.

Las páginas no deben concentrar lógica de presentación compleja.

---

## Sección

Representa una región funcional dentro de una página.

Cada sección encapsula un conjunto de componentes relacionados y puede administrar el estado necesario para cumplir su responsabilidad.

Las secciones permiten dividir la interfaz en bloques independientes y fácilmente mantenibles.

---

## Componente

Representa la unidad mínima reutilizable de la interfaz.

Su responsabilidad consiste en resolver un comportamiento o una representación visual específica.

Los componentes deben mantenerse pequeños, cohesivos y orientados a una única responsabilidad.

---

# Dependencias

La organización del frontend debe respetar una jerarquía clara de dependencias.

Las páginas coordinan secciones.

Las secciones utilizan componentes.

Los componentes no deben depender de páginas.

Esta dirección de dependencias reduce el acoplamiento y facilita la reutilización.

---

# Evolución de la Arquitectura

Toda nueva funcionalidad deberá incorporarse respetando la estructura existente.

Cuando aparezca una necesidad arquitectónica nueva, deberá evaluarse si realmente requiere modificar la organización del proyecto o si puede resolverse reutilizando la arquitectura actual.

La incorporación de nuevas capas o estructuras solo debe realizarse cuando exista una necesidad técnica claramente justificada.

---

# Qué evitar

Evitar organizaciones que:

* mezclen responsabilidades entre distintos niveles;
* dificulten identificar el propósito de una carpeta;
* generen dependencias innecesarias entre módulos;
* obliguen a reorganizar el proyecto cada vez que se incorpora una nueva funcionalidad;
* prioricen la complejidad por encima de la claridad.

La arquitectura debe evolucionar de forma gradual, manteniendo siempre la consistencia establecida por el proyecto.
