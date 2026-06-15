import { useEffect, useState } from "react";

import "./styles/CarrouselElastico.css";

import ElasticTrack from "./desktop/ElasticTrack";
import MobileCarousel from "./mobile/MobileCarousel";

export default function CarrouselElastico({
  elementos,
}) {

  const [isMobile, setIsMobile] = useState(
    window.innerWidth <= 768
  );

  useEffect(() => {

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () =>
      window.removeEventListener(
        "resize",
        handleResize
      );

  }, []);

  return (
    <section className="CarrouselElastico">

      {isMobile ? (
        <MobileCarousel
          elementos={elementos}
        />
      ) : (
        <ElasticTrack
          elementos={elementos}
        />
      )}

    </section>
  );
}