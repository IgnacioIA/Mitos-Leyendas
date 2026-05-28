import "../style/NovedadesBackground.css";

import backgroundImage from
"../../../../../assets/shogun/Novedades/FONDO NOVEDADES ARTE.webp";

export default function NovedadesBackground() {

  return (

    <>
      <div
        className="novedades-background"
        style={{
          backgroundImage: `url(${backgroundImage})`
        }}
      />

      <div className="novedades-background-overlay" />
    </>
  );
}