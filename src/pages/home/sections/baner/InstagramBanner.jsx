import {
  INSTAGRAM_BANNER
}
from "./data/instagramBanner.data";

import "./styles/InstagramBanner.css";

export default function InstagramBanner() {

  return (

    <section
      className="instagram-banner-section"
    >

      <h2 className="instagram-banner-section-title">
        tu viaje empieza acá, gladiador
      </h2>

      <a
        href={INSTAGRAM_BANNER.url}
        target="_blank"
        rel="noreferrer"
        className="instagram-banner-link"
      >

        <img
          src={INSTAGRAM_BANNER.image}
          alt={INSTAGRAM_BANNER.title}
          className="instagram-banner-image"
        />

        <div className="instagram-banner-overlay">

          <h2 className="instagram-banner-title">
            {INSTAGRAM_BANNER.title}
          </h2>

          <p className="instagram-banner-description">
            {INSTAGRAM_BANNER.description}
          </p>

          <span
            className="instagram-banner-button"
          >
            {INSTAGRAM_BANNER.buttonText}
          </span>

        </div>

      </a>

    </section>

  );
}