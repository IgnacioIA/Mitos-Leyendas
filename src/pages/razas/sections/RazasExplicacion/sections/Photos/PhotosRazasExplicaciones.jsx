import "../../styles/PhotosRazasExplicaciones.css";

import PhotoCardRazasExplicaciones from "./PhotoCardRazasExplicaciones";

export default function PhotosRazasExplicaciones({
  photos,
}) {
  return (
    <div className="PhotosRazasExplicaciones">
      {photos.map((photo) => (
        <PhotoCardRazasExplicaciones
          key={photo.id}
          image={photo.imagen}
          titulo={photo.titulo}
          destacado={photo.destacado}
        />
      ))}
    </div>
  );
}