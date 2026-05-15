import "./styles/showcase-section.css";

import ShowcaseContent from "./components/ShowcaseContent";
import ShowcaseVisual from "./components/ShowcaseVisual";

export default function ShowcaseSection({
  image,
  title,
  highlight,
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

      <ShowcaseVisual image={image} />

      <ShowcaseContent
        title={title}
        highlight={highlight}
      >
        {children}
      </ShowcaseContent>

    </section>
  );
}