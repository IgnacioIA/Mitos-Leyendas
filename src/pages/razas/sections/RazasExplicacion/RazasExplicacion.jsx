import "./styles/RazasExplicacion.css";

import dataRazasExplicacion from "./data/dataRazasExplicacion";

import RazasExplicacionHeader from "./sections/Header/HeaderRazasExplicaciones";
import RazasExplicacionBody from "./sections/Body/BodyRazasExplicaciones";
import RazasExplicacionPhotos from "./sections/Photos/PhotosRazasExplicaciones";

export default function RazasExplicacion() {
  const {
    header,
    body,
    photos,
  } = dataRazasExplicacion;

  return (
    <section className="RazasExplicacion">
      <div className="container RazasExplicacion-Container">

        <RazasExplicacionHeader
            titulo={header.titulo}
            destacado={header.destacado}
        />

        <RazasExplicacionBody
          paragraphs={body}
        />

        <RazasExplicacionPhotos
          photos={photos}
        />

      </div>
    </section>
  );
}