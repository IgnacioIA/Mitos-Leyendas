# Sistema CSS

## Objetivo

Este documento describe cómo está organizado el sistema de estilos del frontend.

Su propósito es establecer una estructura consistente que permita construir nuevas interfaces reutilizando el sistema existente antes de incorporar estilos específicos.

El sistema CSS debe evolucionar como una parte más de la arquitectura del proyecto y no como un conjunto de reglas independientes.

---

# Organización

El sistema de estilos se organiza en distintos niveles de responsabilidad.

Cada nivel cumple un propósito específico y debe mantenerse desacoplado de los demás.

## Estilos globales

Los estilos globales contienen los recursos compartidos por toda la aplicación.

Incluyen:

* variables del tema;
* clases reutilizables;
* tipografía;
* animaciones globales;
* contenedores comunes;
* utilidades de layout.

Estos recursos constituyen la base sobre la cual se construyen los componentes del proyecto.

---

## Estilos de componentes

Cada componente mantiene sus propios estilos.

Los archivos CSS deben permanecer junto al componente al que pertenecen y definir únicamente aquellas reglas necesarias para su representación.

Los estilos de un componente no deben modificar ni depender del comportamiento interno de otros componentes.

---

## Estilos de página

Las páginas no deben convertirse en grandes hojas de estilos.

Su responsabilidad consiste únicamente en organizar las distintas secciones que la componen.

Siempre que sea posible, los estilos deben pertenecer a la sección o componente correspondiente.

---

# Recursos compartidos

El sistema dispone de un conjunto de recursos reutilizables que pueden utilizarse en cualquier parte del proyecto.

Actualmente incluyen:

* variables CSS;
* tipografía;
* clases de layout;
* componentes visuales comunes;
* animaciones reutilizables.

Antes de crear un nuevo recurso compartido debe verificarse que represente una necesidad real del sistema y no de un único componente.

---

# Variables CSS

Los valores compartidos del proyecto deben definirse mediante variables CSS.

Las variables representan decisiones globales del sistema, como colores, tipografía, espaciados o tamaños reutilizables.

Los componentes deben consumir estas variables en lugar de definir valores repetidos.

---

# Utilidades

Las clases utilitarias representan soluciones comunes utilizadas por múltiples componentes.

Su objetivo es evitar duplicación y mantener consistencia visual.

No deben utilizarse para resolver necesidades particulares de un único componente.

Si una utilidad deja de ser compartida, deberá evaluarse si continúa perteneciendo al sistema global.

---

# Responsive

El comportamiento responsive forma parte del sistema CSS.

Siempre que sea posible se priorizarán soluciones fluidas sobre reglas específicas para cada resolución.

Los puntos de cambio definidos por el proyecto deberán reutilizarse antes de incorporar nuevos breakpoints.

Las decisiones responsive deben favorecer la adaptación progresiva de la interfaz y evitar la proliferación de casos particulares.

---

# Evolución del sistema

El sistema CSS debe crecer de forma incremental.

Cada nuevo estilo deberá responder a una de las siguientes necesidades:

* ampliar una capacidad existente;
* incorporar un nuevo recurso compartido;
* resolver una responsabilidad propia de un componente.

Si una solución solo resulta útil para un caso aislado, deberá permanecer dentro del componente correspondiente.

---

# Qué evitar

Evitar:

* duplicar estilos existentes;
* crear clases globales para resolver problemas locales;
* modificar recursos compartidos para beneficiar un único componente;
* introducir valores repetidos cuando puedan representarse mediante variables;
* aumentar la complejidad del sistema sin una necesidad clara.

Toda modificación debe contribuir a mantener un sistema de estilos consistente, reutilizable y fácil de evolucionar.
