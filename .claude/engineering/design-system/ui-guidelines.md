# UI Guidelines

## Objetivo

Este documento define las reglas generales que deben respetar todas las interfaces del proyecto.

Su propósito es garantizar una experiencia consistente, predecible y profesional para el usuario, independientemente de la funcionalidad que esté utilizando o de quién haya implementado la pantalla.

Estas reglas aplican a cualquier página, sección o componente de la aplicación.

---

# Principios

Toda interfaz debe transmitir orden, claridad y consistencia.

Las páginas no deben sentirse como productos diferentes; toda la aplicación debe percibirse como una única experiencia.

La jerarquía visual debe ser clara y facilitar la lectura del contenido.

La simplicidad tiene prioridad sobre la complejidad. Si existen varias soluciones posibles, debe elegirse la más simple que cumpla el objetivo.

No deben utilizarse tamaños, márgenes o espaciados definidos "a ojo". Todas las dimensiones deben respetar el sistema de diseño.

Toda pantalla debe ser completamente responsive desde su implementación inicial.

La experiencia debe mantenerse consistente entre Desktop, Tablet y Mobile.

---

# Layout

Todas las páginas deben utilizar el mismo layout principal de la aplicación.

Ninguna página debe crear su propio layout general.

El layout global es responsabilidad exclusiva del AppShell.

Cada página únicamente debe implementar su contenido.

La estructura general de una página es:

* Header
* Contenido principal
* Footer (cuando corresponda)

El contenido principal debe mantenerse centrado dentro del área disponible.

El ancho máximo del contenido debe ser constante en toda la aplicación.

Los márgenes laterales deben mantenerse consistentes entre todas las páginas.

Los espacios verticales deben seguir un ritmo uniforme para facilitar la lectura y la navegación.

---

# Consistencia

Una pantalla nueva debe parecer parte del mismo producto aunque el usuario nunca la haya visitado.

Componentes equivalentes deben mantener la misma apariencia y comportamiento en toda la aplicación.

Una misma acción siempre debe representarse de la misma manera.

Los patrones de navegación no deben cambiar entre pantallas.

La experiencia debe ser predecible para reducir la carga cognitiva del usuario.

---

# Movimiento e Interacciones

Las animaciones deben ser sutiles y tener un propósito funcional.

Nunca deben distraer al usuario ni ralentizar la interacción.

Las transiciones deben utilizar un algoritmo de desaceleración por proximidad (*ease-out*), de forma que el movimiento sea más rápido al comenzar y disminuya progresivamente su velocidad al acercarse al estado final.

Toda transición debe transmitir sensación de continuidad y naturalidad.

Cuando una animación no aporte información o mejore la experiencia, debe omitirse.

---

# Tokens del Sistema

Esta sección fija los valores concretos que las reglas anteriores dejan abiertos. Un componente o página solo puede considerarse conforme al Design System si respeta estos valores exactos — no aproximados.

## Breakpoints

Únicos breakpoints válidos en todo el proyecto:

```css
@media (max-width: 768px) { /* mobile */ }
@media (max-width: 480px) { /* mobile pequeño */ }
```

No usar ningún otro valor (900px, 640px, 980px, 1024px, 968px, 1200px, 992px, 600px, etc.). Si un layout necesita quebrar en un punto intermedio, resolverlo con `clamp()` o `grid-template-columns: repeat(auto-fit, minmax(...))` antes de introducir un breakpoint nuevo.

## Contenedores y layout de página

- El layout general (Header/Navigation/Footer) es responsabilidad exclusiva de `MainLayout` — ninguna página vuelve a implementarlo.
- El contenido de una página usa las utilidades ya existentes en `src/styles/Global.css`: `.container` (ancho máximo 1400px) o `.container-sm` (900px) para el ancho del contenido, y `.section` para el ritmo vertical entre bloques (`padding-block: clamp(5rem, 10vw, 10rem)`).
- El wrapper raíz de cada página (el `<div>` que envuelve sus secciones) se nombra `page-[nombre]` en kebab-case (ej. `page-shogun`, `page-leyendas-4-0`, `page-home`) y no define estilos propios de layout — solo sirve como namespace para overrides puntuales si hacen falta. No usar PascalCase (`Home-container`) ni sufijos `-container` inconsistentes.

## Botones

Único componente y única clase válidos: `src/components/ui/button/Button.jsx` (`variant="primary" | "secondary"`), respaldado por las clases `.btn`, `.btn-primary`, `.btn-secondary` de `src/styles/ui/buttons/Button.css`.

- Altura `56px`, `border-radius: 999px` (pill), `padding-inline: 2rem`.
- Transición: `transform .3s ease, opacity .3s ease, background .3s ease, border-color .3s ease, color .3s ease`.
- Hover: `translateY(-4px)`. Active: `translateY(-1px)`.
- No crear botones ad-hoc con clases propias (`Hero-Button`, `feature-button`, `*-CTA`, sufijos por página, etc.). Si un botón necesita un ícono o contenido especial, se compone pasando `children` a `<Button>`, no reimplementando el elemento.
- `Global.css` mantiene una copia parcial de `.btn` como red de seguridad para markup legado; al migrar una página a `<Button>` esa copia deja de ser necesaria para esa página.

## Cards y componentes compuestos (grupos, stacks)

- Un mismo patrón visual (ej. grupo de 3 cartas superpuestas) debe tener **una sola implementación** reutilizable en `src/components/`, nunca una copia por página.
- Nomenclatura de clases para componentes con sub-partes: **BEM** (`bloque__elemento--modificador`), que es el patrón ya usado en las implementaciones más recientes (`card-group__stack`, `card-group__card--left`). Evitar mezclar BEM con sufijos de página (`shogun-buyabox-card-left`) en el mismo componente.
- Antes de crear una card/grupo nuevo, revisar `src/components/` en busca de una variante existente que pueda parametrizarse con props en lugar de duplicarse.

## Animaciones

- Curva de easing estándar: `cubic-bezier(0.4, 0, 0.2, 1)` (ya usada en `Navigation.css`) para transiciones CSS y como `ease` en Framer Motion. Es la única curva de desaceleración aprobada — no usar `ease`/`ease-in-out` genéricos ni otros `cubic-bezier` custom.
- Duración estándar:
  - **Micro-interacciones** (hover, focus, botones): `0.3s`.
  - **Entradas de sección/contenido** (`whileInView`, headers, imágenes): `0.6s`–`0.8s`. Usar `0.6s` por defecto.
  - Duraciones mayores a `1s` requieren justificación explícita (ej. una animación hero única de la página); no deben usarse para elementos que se repiten en scroll.
- `viewport={{ once: true }}` es obligatorio en animaciones de entrada disparadas por scroll, para no re-disparar la animación cada vez que el elemento entra en viewport.

---

# Objetivo Final

El usuario debe percibir toda la aplicación como un único producto, coherente en su diseño, comportamiento y experiencia de uso, independientemente de la pantalla que visite.
