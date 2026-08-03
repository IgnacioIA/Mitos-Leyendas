import "./styles/showcase-section.css";
import "./styles/showcase-visual.css";

import ShowcaseContent from "./components/ShowcaseContent";

// Variante de ShowcaseSection para contenido visual dinámico (composición vía
// children) en vez de una imagen fija con FrameFX. Reutiliza el mismo layout
// (columnas, gaps, responsive) y el mismo ShowcaseContent para el texto,
// sin tocar ShowcaseSection.jsx (usado también por otras páginas).
export default function ShowcaseSectionCustom({
  title,
  highlight,
  paragraphs,
  children,
  reverse = false,
  background = "",
}) {

  return (
    <section
      className={`
        showcase-section
        ${reverse ? "showcase-section-reverse" : ""}
        ${background}
      `}
    >

      <div className="magic-right-alt">
        {children}
      </div>

      <ShowcaseContent
        title={title}
        highlight={highlight}
      >
        {paragraphs}
      </ShowcaseContent>

    </section>
  );
}
