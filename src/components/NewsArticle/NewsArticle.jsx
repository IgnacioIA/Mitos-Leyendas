import "./NewsArticle.css";

function NewsArticle({
    titulo,
    contenido = [],
    imagen,
    alt = ""
}) {
    return (
        <article className="news-article">

            <h1 className="news-title">
                {titulo}
            </h1>

            <div className="news-content">

                {contenido.map((bloque, index) => {

                    if (bloque.tipo === "parrafo") {
                        return (
                            <p
                                key={index}
                                className="news-paragraph"
                            >
                                {bloque.texto}
                            </p>
                        );
                    }

                    if (bloque.tipo === "lista") {
                        return (
                            <ul
                                key={index}
                                className="news-list"
                            >
                                {bloque.items.map((item, i) => (
                                    <li key={i}>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        );
                    }

                    if (bloque.tipo === "subtitulo") {
                        return (
                            <h2
                                key={index}
                                className="news-subtitle"
                            >
                                {bloque.texto}
                            </h2>
                        );
                    }

                    return null;
                })}

            </div>

            {imagen && (
                <img
                    src={imagen}
                    alt={alt}
                    className="news-image"
                />
            )}

        </article>
    );
}

export default NewsArticle;