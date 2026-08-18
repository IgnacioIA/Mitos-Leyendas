import "./styles/BotonesBanList.css";

import PosterBotonBanList from "./sections/PosterBotonBanList";

import dataBotonesBanList from "./data/dataBotonesBanList";

export default function BotonesBanList() {
  const { titulo, botones } = dataBotonesBanList;

  return (
    <section className="BotonesBanList">

      <div className="BotonesBanList-content">

        <header className="BotonesBanList-header">
          <h2 className="BotonesBanList-titulo">
            {titulo}
          </h2>
        </header>

        <div className="BotonesBanList-grid">

          {botones.map((boton) => (
            <PosterBotonBanList
              key={boton.id}
              titulo={boton.titulo}
              imagen={boton.imagen}
              alt={boton.alt}
              url={boton.url}
            />
          ))}

        </div>

      </div>

    </section>
  );
}
