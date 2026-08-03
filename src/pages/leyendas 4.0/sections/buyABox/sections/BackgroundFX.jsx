import "../styles/Background-fx.css";

import backgroundImage from
"../../../../../assets/mitos4.0/buyABox/FONDO.webp";

export default function BackgroundFX() {

  return (

    <div
      className="background-fx"
      style={{
        backgroundImage: `url("${backgroundImage}")`
      }}
    />
  );
}