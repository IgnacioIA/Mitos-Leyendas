export const imageVariants = {
  enter: { opacity: 0 },
  center: { opacity: 1 },
  exit: { opacity: 0 },
};

export const SWIPE_THRESHOLD = 8000;

export const swipePower = (offset, velocity) => Math.abs(offset) * velocity;
