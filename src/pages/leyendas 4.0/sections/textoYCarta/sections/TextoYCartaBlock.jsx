import ShowcaseSectionCustom from "../../../../../components/showcase-section/ShowcaseSectionCustom.jsx";
import CartaDeTres from "../../../../../components/CartaDeTres/CartaDeTres.jsx";

export default function TextoYCartaBlock({
  anchorId,
  title,
  reverse,
  cartas,
  paragraphs,
}) {

  return (
    <>
      <section id={anchorId}></section>

      <ShowcaseSectionCustom
        title={title}
        reverse={reverse}
        paragraphs={paragraphs.map((text, index) => (
          <p key={index}>{text}</p>
        ))}
      >
        <CartaDeTres cartas={cartas} />
      </ShowcaseSectionCustom>
    </>
  );
}
