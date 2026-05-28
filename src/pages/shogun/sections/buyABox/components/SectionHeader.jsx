import "../styles/Section-header.css";

export default function SectionHeader({ title }) {

  return (

    <div className="shogun-buyabox-section-header">

      <h2 className="shogun-buyabox-section-title">
        {title}
      </h2>

      <p className="shogun-buyabox-section-paragraph">Una de las novedades de este nuevo Shogun es la incorporación de nuevos artes coleccionables para
        una misma carta, las que podrán ser encontradas al azar dentro de cada producto.</p>

      <p className="shogun-buyabox-section-paragraph">Dentro del contenido, tendremos distintos artes para la carta Novias de Drácula que la encontraremos
      en el producto Shogun 5 Onna-Musha vol 1, y para la carta Hobgoblin incluida en el producto
      Shogun 5 Onna-musha vol 2.</p>
    </div>
  );
}