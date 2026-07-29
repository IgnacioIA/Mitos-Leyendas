import NewsArticle from "../../../../components/NewsArticle/NewsArticle";
import { noticias } from "./data/dataNoticias";

function NoticiasPage() {
    return (
        <main className="news-page">
            {noticias.map((noticia) => (
                <NewsArticle
                    key={noticia.id}
                    titulo={noticia.titulo}
                    contenido={noticia.contenido}
                    imagen={noticia.imagen}
                    alt={noticia.alt}
                />
            ))}
        </main>
    );
}

export default NoticiasPage;