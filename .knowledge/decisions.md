# Engineering Decisions

## Objetivo

Registrar las decisiones técnicas y arquitectónicas que puedan afectar la evolución del proyecto.

Este archivo no busca documentar todos los cambios realizados, sino únicamente aquellas decisiones cuyo contexto podría olvidarse con el tiempo.

Debe responder preguntas como:

- ¿Por qué elegimos esta arquitectura?
- ¿Por qué descartamos otra alternativa?
- ¿Qué consecuencias tiene esta decisión?

---

# ¿Cuándo registrar una decisión?

Registrar únicamente cuando exista una decisión relevante, por ejemplo:

- Arquitectura.
- Organización del dominio.
- Patrones de diseño.
- Integraciones importantes.
- Tecnologías adoptadas.
- Cambios importantes en la estructura del proyecto.
- Contratos relevantes.

No registrar:

- Refactors menores.
- Corrección de bugs.
- Renombrado de clases.
- Cambios de formato.
- Pequeñas mejoras de implementación.

---

# Plantilla

---

## Fecha

AAAA-MM-DD

---

## Decisión

Describir la decisión.

---

## Contexto

¿Qué problema existía?

---

## Alternativas consideradas

-

-

-

---

## Decisión tomada

¿Qué se eligió?

---

## Justificación

¿Por qué se eligió?

---

## Consecuencias

¿Qué beneficios y compromisos implica esta decisión?

---

# Historial

Agregar nuevas decisiones respetando el orden cronológico.

---

## Fecha

2026-07-03

---

## Decisión

Se detectó, durante una tarea de estandarización de UI, que la sección "Línea de Productos" y el CTA de "Acerca del producto" de la página **Shogun** muestran contenido de **Leyendas 4.0** (fondo, imágenes de producto, textos y URL del botón), y se decidió no corregir el contenido en el marco de esa tarea.

---

## Contexto

`src/pages/shogun/sections/productos/data/FeaturesData.js` es una copia byte a byte del archivo equivalente de Leyendas 4.0: importa imágenes desde `assets/mitos4.0/productos/` y los textos mencionan "leyendas 4.0". El fondo de la sección (`FONDO PRODUCTOS.webp`) también se toma de `assets/mitos4.0/productos/`. La carpeta `src/assets/shogun/Productos/` existe pero está vacía. Además, `src/pages/shogun/sections/lore/ProductShowcaseSection.jsx` (CTA "CONSEGUIR SHOGUN 5") linkea a la URL pública de Leyendas 4.0 en vez de una propia de Shogun.

---

## Alternativas consideradas

- Ocultar la sección en Shogun hasta tener contenido real.
- Pedir el contenido real (imágenes/textos/URL) en el momento y cargarlo.
- Dejar el comportamiento actual (bug incluido) documentado y seguir con la tarea de UI en curso.

---

## Decisión tomada

Se preservó el comportamiento actual (con el bug) al consolidar el componente duplicado `Productos`/`FeatureCard` de ambas páginas en `src/components/product-lineup/`, y se documenta acá para resolverlo en una tarea aparte.

---

## Justificación

No hay assets ni copy reales de Shogun disponibles en el repo para reemplazar el contenido, y generar esa información (nombres de producto, cantidades de sobres, URLs) sin una fuente confiable habría introducido datos de negocio incorrectos.

---

## Consecuencias

La página de Shogun sigue mostrando contenido de Leyendas 4.0 en esas dos secciones hasta que se provean los assets y textos reales de Shogun (imágenes para `src/assets/shogun/Productos/`, copy de producto, y URL pública correspondiente). El componente ya está preparado para recibirlos vía props (`ProductLineup` y `LoreShowcase`) sin más trabajo de refactor.
---

## Fecha

2026-10-26

---

## Decisión

Página **Línea del Tiempo** (`/LineaDelTiempo`): el fondo difuminado del recorrido se implementa como sticky dentro de su sección (no `position: fixed` como el modelo de referencia), Montserrat se carga globalmente y los enlaces "LINEA DEL TIEMPO" pasan de `/HistoriaMYL` a `/LineaDelTiempo`.

---

## Contexto

El modelo (`src/pages/LineaDelTiempo/modelo/mitos_y_leyendas_timeline_v10.html`) es un documento autónomo: su fondo es `fixed` para toda la página y usa Montserrat. En el sitio, la página vive dentro de `MainLayout` (header sticky y Footer), y Montserrat no se cargaba en ningún lado aunque `NewsArticle.css` ya la declaraba. El menú y la Home enlazaban "LINEA DEL TIEMPO" a `/HistoriaMYL`, que muestra `PaginaEnConstruccion`.

---

## Alternativas consideradas

- Fondo `fixed` mostrado/ocultado por JS según la visibilidad de la sección.
- Fondo sticky dentro de la sección (patrón de `ParallaxBackgroundCinematografico`).
- Cargar Montserrat solo en la página con un `<link>` de React 19 (persistiría al navegar y el resultado dependería del orden de navegación).
- Montar la nueva página en `/HistoriaMYL`.

---

## Decisión tomada

Fondo sticky + `overflow: clip` en la sección. Montserrat agregada a la misma importación de Google Fonts de `src/index.css` (sin un `@import` nuevo) y expuesta como `--font-montserrat`. Ruta nueva `/LineaDelTiempo`; `/HistoriaMYL` queda intacta.

---

## Justificación

El sticky queda limitado a la sección por CSS, sin lógica extra, y es un patrón ya usado en el proyecto. Cargar la fuente globalmente da un resultado determinista. Una ruta propia evita reutilizar un nombre que no describe la página.

---

## Consecuencias

`NewsArticle` (Premier BS AS 2026) ahora se ve en Montserrat, la fuente que su CSS ya pedía (antes caía a `sans-serif`). `/HistoriaMYL` sigue existiendo sin enlaces desde el menú ni la Home; puede eliminarse en una tarea aparte.
