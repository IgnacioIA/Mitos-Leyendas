import "./CartaDeTres.css";

import CardCarousel from "./CardCarousel";

export default function CartaDeTres({
  titulo,
  cartas,
}) {
  return (
    <div className="CartaDeTres">

      {titulo && (
        <h3 className="CartaDeTres-title">
          {titulo}
        </h3>
      )}

      <CardCarousel
        cards={cartas}
      />

    </div>
  );
}