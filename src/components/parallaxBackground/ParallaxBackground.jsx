import { useEffect, useRef, useState } from "react";

import "./styles/ParallaxBackground.css";

export default function ParallaxBackground({
  desktopImage,
  mobileImage,
  speed = 0.25,
  overlay = 0.4,
  position = "center",
  children,
}) {

  const imageRef = useRef(null);
  const containerRef = useRef(null);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener(
      "resize",
      handleResize
    );

    return () => {
      window.removeEventListener(
        "resize",
        handleResize
      );
    };

  }, []);

  useEffect(() => {

    const image = imageRef.current;
    const container = containerRef.current;

    if (!image || !container) return;

    let animationFrame;

    const currentSpeed =
      isMobile
        ? speed * 0.3
        : speed;

    const updateParallax = () => {

      const rect =
        container.getBoundingClientRect();

      const windowHeight =
        window.innerHeight;

      if (
        rect.bottom >= 0 &&
        rect.top <= windowHeight
      ) {

        const offset =
          (windowHeight - rect.top) *
          currentSpeed;

        image.style.transform =
          `translate3d(0, ${offset}px, 0)`;
      }

      animationFrame =
        requestAnimationFrame(updateParallax);
    };

    animationFrame =
      requestAnimationFrame(updateParallax);

    return () => {
      cancelAnimationFrame(animationFrame);
    };

  }, [speed, isMobile]);

  const imageUrl =
    isMobile && mobileImage
      ? mobileImage
      : desktopImage;

  return (
    <div
      ref={containerRef}
      className="ParallaxBackground"
    >

      <div
        ref={imageRef}
        className="ParallaxBackground-Image"
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundPosition: position,
        }}
      />

      <div
        className="ParallaxBackground-Overlay"
        style={{
          backgroundColor: `rgba(0,0,0,${overlay})`,
        }}
      />

      <div className="ParallaxBackground-Content">
        {children}
      </div>

    </div>
  );
}