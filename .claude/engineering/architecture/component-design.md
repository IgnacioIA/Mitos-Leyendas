# Diseño de Componentes

## Reglas generales

- Un componente = un archivo `.jsx` + un archivo `.css` co-locado (mismo nombre, misma carpeta).
- El componente exporta `default` y no tiene lógica de negocio — eso va en custom hooks o en el padre.
- Props: solo las necesarias. No aceptar objetos enteros si alcanza con dos strings.

## Cuándo partir un componente

Partir cuando:
- El JSX supera ~60 líneas y tiene partes claramente separables (visual + lógica).
- Un sub-árbol se repite dos o más veces.
- Un fragmento necesita su propio `useEffect` o `useState`.

No partir si solo mueve markup a otro archivo sin reducir complejidad.

## Co-locación de CSS

```
sections/
└── hero/
    ├── HeroSection.jsx
    ├── components/
    │   ├── HeroBackground.jsx
    │   ├── HeroContent.jsx
    │   └── HeroScrollButton.jsx
    └── styles/
        ├── hero-background.css
        └── hero-overlay.css
```

El CSS de un componente importa solo ese componente. No importar CSS de secciones ajenas.

## Componentes reutilizables (`src/components/`)

Mover a `src/components/` solo cuando el componente se usa en **más de una página**.
Si es exclusivo de una página, queda en `pages/[pagina]/`.

Ejemplos actuales compartidos:
- `src/components/ui/button/Button.jsx`
- `src/components/ui/cartaMovible/FrameFX.jsx`
- `src/components/showcase-section/ShowcaseSection.jsx`

## Framer Motion

Usar `motion.*` solo en el componente que lo necesita. No envolver todo en `motion.div` por costumbre.
Preferir `whileInView` con `viewport={{ once: true }}` para animaciones de entrada.


## Componentes compartidos con variables CSS de adaptación

### `carrouselElastico`

- Props: `elementos: [{ id, imagen, alt? }]`. Desktop (>768px) arrastre elástico; mobile scroll nativo con snap.
- Se adapta desde el consumidor con variables CSS (no duplicar el componente): `--elastic-card-width` (default `240px`), `--elastic-gap`, `--elastic-gutter`.
- El recorrido de arrastre se mide contra el wrapper visible; el track se centra con `margin-inline: auto` (nunca `justify-content: center`, que corta el inicio al desbordar).

### Fondo parallax de sección

- Reutilizar `parallaxBackgrounCinematografico` (sticky). Si el contenido debe verse el fondo, el root del contenido debe ser transparente.
- Overlays `position: fixed` con z-index alto dentro de ese fondo deben portarse al `body` (`createPortal`): el Content crea un stacking context y quedarían bajo el Header. Ejemplo: `SelectorDeRaza` → `FichaRaza`.

### Tipografía display (Anton)

- No usar `line-height < 1` en títulos y no terminar animaciones con `clip-path: inset(0)`: recorta los glifos. Usar márgenes negativos en `em` en el `clip-path` o `none`.
- Bloques de texto dentro de contenedores con `overflow: hidden` deben estar en flujo (no `position: absolute` con alto fijo del padre).

### `SelectorDeRaza` — escenario en capas y stage sticky (desktop)

- `EscenarioRaza` dibuja la raza activa en capas (`--capa-fondo` 0 · `--capa-decoracion` 1 · `--capa-personaje` 2 · `--capa-texto` 3, definidas en `.SelectorDeRaza`). Lo usan `PanelPreviewRaza` y `FichaRaza`; no maneja selección ni hover. Es `display: contents`: el contenedor que lo usa aplica `isolation: isolate` y escribe las variables de parallax `--esc-x/--esc-y/--esc-bx/--esc-by`.
- Desktop (≥981px): `PanelPreviewRaza` es el stage `position: sticky` con alto `100dvh - --header-h`; el selector fluye con el scroll natural y define el alto de la sección. `--header-h` lo publica `useAlturaHeader` (el header sticky cambia de alto al hacer scroll).
- Los ancestros del sticky no pueden tener `overflow: hidden|auto`: se usa `overflow: clip`.
- Mobile (≤768px, `isMobile`) y tablet (≤980px) conservan el layout apilado; el panel no es sticky.
- Hover del roster: no aplicar `rotate`/`scale` al contenedor de la imagen; el zoom va en el `<img>`.

### `LineaDelTiempo` — recorrido sincronizado con el scroll

- Página `/LineaDelTiempo` con dos secciones: `LineaDelTiempoHero` y `LineaDelTiempoRecorrido`. Todo lo que depende del scroll (intro, eje, etapas, interludio, navegador, cierre y fondo) vive en el Recorrido porque comparte el fondo y `--accent`.
- `hooks/useRecorridoScroll.js` es la única fuente de verdad. Usa un marcador al 53 % de la ventana para el progreso del eje, la etapa activa (con histéresis por dirección) y la mezcla de fondo/acento (smoothstep entre los centros de etapas consecutivas). El progreso es un `MotionValue` suavizado con `useSpring`; fondo y `--accent` se escriben en el DOM. El estado de React (`etapaActiva`, `navegadorVisible`) solo cambia al cambiar de etapa. Las posiciones se re-miden con `resize` + `ResizeObserver` sobre el eje.
- Fondo difuminado: sticky (`100dvh` + `margin-bottom: -100dvh`) dentro de la sección, no `position: fixed`. **La sección necesita `overflow: clip`**: con ese patrón el sticky puede seguir pegado hasta 100dvh por debajo del final de su contenedor y taparía el Footer. `clip` no crea contenedor de scroll, así que los sticky siguen funcionando. Aplica a cualquier fondo sticky que no tenga contenido propio detrás.
- Marcador de años sticky: `top: max(39vh, var(--header-h) + 12px)` (`useAlturaHeader`) para no quedar bajo el header.
- Datos: `data/dataLineaDelTiempoRecorrido.js` resuelve imágenes con `import.meta.glob`, pero cada banner/carta se elige por **nombre de archivo explícito** (`etapaImagenes(carpeta, [[archivo, nombre]])`), nunca por el orden del glob.
- Galería: Embla vía `useCarousel` (`loop:false`, `dragFree`, `containScroll:'trimSnaps'`, `slidesToScroll:2`); flechas deshabilitadas con `canScrollPrev/Next`; ←/→ con el foco en el viewport.
- Aparición por opacidad con `whileInView` (`once`, `amount: .12`); con `prefers-reduced-motion` se renderiza visible (`initial={false}`) y el eje sigue el scroll sin resorte.
