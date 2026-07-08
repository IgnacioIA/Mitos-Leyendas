# State Management

## Objetivo

Este documento define cómo se maneja el estado dentro del frontend.

Su propósito es mantener un flujo de datos predecible, evitar complejidad innecesaria y asegurar que la gestión del estado sea coherente con la arquitectura general del proyecto.

El estado no es una herramienta central del sistema, sino un mecanismo local para coordinar la interfaz.

---

# Filosofía

El estado debe mantenerse lo más simple posible.

La mayoría de los problemas de UI no requieren soluciones globales ni estructuras complejas de gestión de estado.

Antes de introducir cualquier mecanismo adicional, debe evaluarse si el problema puede resolverse con estado local o composición de componentes.

---

# Tipos de estado

## Estado local

Es el tipo de estado por defecto.

Se utiliza dentro de un componente o sección específica para manejar:

* interacción del usuario;
* toggles de UI;
* formularios simples;
* comportamiento visual.

El estado local debe ser la primera opción en cualquier implementación.

---

## Estado de sección

Se utiliza cuando múltiples componentes dentro de una misma sección necesitan compartir información.

Debe mantenerse contenido dentro de la sección correspondiente.

No debe propagarse más allá de su contexto natural.

---

## Estado de página

Se utiliza cuando distintas secciones de una misma página necesitan compartir datos.

Este tipo de estado debe ser cuidadosamente justificado.

El hecho de estar en una misma página no implica automáticamente necesidad de estado compartido.

---

## Estado global

El estado global es una excepción, no una norma.

Solo debe utilizarse cuando:

* múltiples páginas necesitan la misma información;
* existe un estado transversal real en la aplicación;
* el costo de propagar estado manualmente es mayor que su centralización.

En este proyecto, el uso de estado global debe ser mínimo o inexistente en las etapas actuales.

---

# Flujo de datos

El flujo de datos debe ser unidireccional:

1. Los datos se definen en un nivel superior.
2. Se propagan hacia componentes hijos mediante props.
3. Los eventos viajan hacia arriba mediante callbacks.

Los componentes no deben modificar fuentes de datos externas directamente.

---

# Elevación de estado

El estado solo debe elevarse cuando exista una necesidad real de compartirlo entre componentes.

No debe elevarse preventivamente “por si acaso”.

Cada nivel adicional de estado incrementa la complejidad del sistema.

---

# Derivación de estado

Si un valor puede calcularse a partir de otros datos, no debe almacenarse en estado.

Mantener valores derivados como funciones o cálculos en tiempo de render evita inconsistencias.

---

# Evitar complejidad innecesaria

Antes de introducir soluciones externas de state management (Redux, Zustand, etc.), se debe verificar:

* si el estado local es suficiente;
* si la composición de componentes resuelve el problema;
* si la duplicación de props es realmente un problema estructural.

La mayoría de los casos no requieren herramientas externas.

---

# Integración con API

El estado debe tratar datos provenientes de la API como fuente externa de verdad.

El frontend no debe asumir consistencia permanente de los datos.

Los datos pueden cambiar, fallar o ser incompletos, y el estado debe ser capaz de manejar esos escenarios sin romper la UI.

---

# Evolución del sistema

El sistema de estado debe evolucionar solo cuando la complejidad del problema lo requiera.

No debe anticiparse a escenarios futuros que aún no existen en la aplicación.

La introducción de nuevas herramientas de state management debe estar justificada por una necesidad concreta y repetida.

---

# Objetivo durante el desarrollo

Toda decisión relacionada con el estado debe cumplir al menos uno de estos objetivos:

* reducir complejidad;
* mejorar la claridad del flujo de datos;
* evitar duplicación de información;
* mantener consistencia entre componentes;
* facilitar la integración con la API.

Si una solución introduce complejidad sin un beneficio claro, debe descartarse.
