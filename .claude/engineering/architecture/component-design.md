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
