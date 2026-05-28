import "../styles/Background-fx.css";

import backgroundImage from
"../../../../../assets/shogun/buyABox/FONDO COLECCIONABILIDAD.webp";

export default function BackgroundFX() {

  return (

    <div
      className="Shogun-BuyABox-background-fx"
      style={{
        backgroundImage: `url("${backgroundImage}")`
      }}
    />
  );
}