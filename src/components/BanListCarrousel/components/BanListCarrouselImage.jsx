import { motion } from "framer-motion";

import { imageVariants, SWIPE_THRESHOLD, swipePower } from "../data/carouselMotion";

export default function BanListCarrouselImage({ image, isSingle, onSwipeNext, onSwipePrev }) {

  const handleDragEnd = (_, info) => {
    const power = swipePower(info.offset.x, info.velocity.x);

    if (power < -SWIPE_THRESHOLD) onSwipeNext();
    else if (power > SWIPE_THRESHOLD) onSwipePrev();
  };

  return (
    <motion.img
      className="BanListCarrousel__image"
      src={image.src}
      alt={image.alt}
      variants={imageVariants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ duration: 0.25, ease: "easeOut" }}
      drag={isSingle ? false : "x"}
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.7}
      onDragEnd={handleDragEnd}
    />
  );
}
