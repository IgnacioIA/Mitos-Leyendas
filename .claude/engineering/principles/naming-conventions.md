# Convenciones de Nomenclatura

## Objetivo

Este documento define las convenciones de nomenclatura utilizadas en el frontend.

Su propósito es mantener un lenguaje consistente en todo el proyecto, facilitando la lectura del código, la navegación entre archivos y la comprensión de la arquitectura.

Las convenciones deben reducir la necesidad de interpretar el código. Un nombre claro comunica mejor que un comentario.

---

# Principios

## Los nombres deben expresar intención

El nombre de un elemento debe describir su responsabilidad y no la forma en que está implementado.

Debe responder qué representa y no cómo funciona.

---

## Consistencia

Un mismo concepto debe recibir siempre el mismo nombre.

Si el proyecto utiliza un término determinado para representar una entidad o funcionalidad, ese término deberá mantenerse en toda la aplicación.

---

## Especificidad

Los nombres deben ser suficientemente descriptivos para evitar ambigüedades, pero sin incorporar información innecesaria.

Se priorizan nombres simples y claros antes que abreviaturas difíciles de interpretar.

---

# Convenciones

## Componentes React

* PascalCase.
* El nombre debe representar la responsabilidad del componente.

Ejemplos:

```text
ProductCard.jsx
HeroSection.jsx
SearchFilters.jsx
```

---

## Archivos CSS

* kebab-case.
* Deben mantener relación directa con el componente o módulo al que pertenecen.

Ejemplos:

```text
product-card.css
hero-section.css
search-filters.css
```

---

## Variables y funciones

* camelCase.
* Los nombres deben describir claramente su propósito.

Ejemplos:

```text
selectedEdition

loadProducts()

calculateDeckSize()
```

---

## Props

Las props deben representar datos o comportamientos.

Se evitarán nombres genéricos cuando existan alternativas más descriptivas.

Preferir:

```text
selectedCard
onCardSelect
currentEdition
```

Antes que:

```text
data
item
value
obj
```

---

## Carpetas

Las carpetas deben organizarse por responsabilidad y no por tipo de archivo.

La estructura debe reflejar la arquitectura de la aplicación.

---

# Qué evitar

Evitar:

* abreviaturas innecesarias;
* nombres genéricos;
* prefijos o sufijos redundantes;
* distintos nombres para el mismo concepto;
* nombres que describan la implementación en lugar del propósito.

Las convenciones de nomenclatura deben favorecer la lectura del código y mantener una terminología uniforme en todo el proyecto.
