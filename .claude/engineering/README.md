# Engineering

## Objetivo

La carpeta **engineering** define los principios de ingeniería utilizados para desarrollar el frontend.

Su propósito es establecer cómo debe razonar Claude al implementar, modificar o refactorizar el código del proyecto.

No documenta el negocio, la interfaz de usuario ni la futura API. Su responsabilidad es definir los criterios técnicos que permiten mantener un código consistente, legible y preparado para evolucionar.

---

# Filosofía

El objetivo principal del proyecto no es escribir el código más corto ni utilizar la mayor cantidad de patrones de diseño.

El objetivo es construir un frontend cuya estructura pueda comprenderse, mantenerse y evolucionar con facilidad durante toda la vida del proyecto.

Cada decisión técnica debe favorecer la claridad antes que la complejidad.

Una solución sencilla, consistente y fácil de entender tiene prioridad sobre una solución más sofisticada cuyo beneficio no sea significativo.

---

# Principios de Ingeniería

Todo cambio realizado sobre el proyecto debe respetar los siguientes principios.

## Claridad

La intención del código debe ser evidente.

Un desarrollador debe poder comprender qué hace un componente, de dónde provienen sus datos y cuál es su responsabilidad sin necesidad de explicaciones adicionales.

Los nombres de archivos, componentes, funciones y variables deben describir el propósito del código y no su implementación.

---

## Simplicidad

La solución elegida debe ser proporcional al problema que intenta resolver.

No introducir abstracciones, patrones o mecanismos cuyo costo de mantenimiento sea superior al beneficio que aportan.

La complejidad solo debe aparecer cuando el dominio realmente la requiera.

---

## Consistencia

Problemas similares deben resolverse de forma similar.

Las convenciones establecidas en el proyecto tienen prioridad sobre las preferencias personales del desarrollador.

Solo debe introducirse un nuevo patrón cuando exista una justificación técnica clara.

---

## Mantenibilidad

Cada modificación debe facilitar el trabajo futuro.

El código debe organizarse para minimizar el impacto de los cambios y favorecer la evolución del proyecto.

La facilidad para modificar una funcionalidad es un criterio de calidad tan importante como su correcto funcionamiento.

---

## Trazabilidad

El recorrido de los datos debe ser fácil de seguir.

Siempre debe ser posible identificar con claridad:

* dónde se obtiene la información;
* dónde se transforma;
* dónde se presenta al usuario.

Debe evitarse la propagación innecesaria de datos entre múltiples componentes.

---

## Reutilización

Los componentes reutilizables deben surgir cuando representan una verdadera abstracción del dominio de la interfaz.

No reutilizar código únicamente para eliminar líneas duplicadas si eso aumenta el acoplamiento o reduce la claridad.

---

## Evolución

El proyecto está diseñado para crecer.

Las decisiones técnicas deben favorecer una arquitectura que permita incorporar nuevas funcionalidades sin modificar innecesariamente el código existente.

La evolución del sistema tiene prioridad sobre la optimización prematura.

---

# Orden de Prioridad

Cuando existan varias soluciones técnicamente correctas, las decisiones deberán priorizar, en este orden:

1. Claridad.
2. Simplicidad.
3. Consistencia.
4. Mantenibilidad.
5. Reutilización.
6. Rendimiento, cuando el contexto realmente lo requiera.

---

# Alcance

Esta carpeta define exclusivamente aspectos relacionados con la ingeniería del frontend.

No contiene:

* reglas del negocio;
* contratos de integración;
* decisiones específicas del backend;
* documentación funcional del proyecto.

Esos temas pertenecen a sus respectivos módulos de documentación.

---

# Organización

Cada documento de esta carpeta desarrolla uno o varios aspectos específicos de esta filosofía.

Antes de modificar o crear documentación nueva, verificar que el tema realmente corresponda a la ingeniería del frontend y no a otra responsabilidad del proyecto.

Todo documento nuevo deberá complementar estos principios y nunca contradecirlos.
