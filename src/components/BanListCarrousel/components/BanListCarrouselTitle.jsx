import "../styles/BanListCarrouselTitle.css";

export default function BanListCarrouselTitle({ title }) {
  if (!title) return null;

  return <h3 className="BanListCarrouselTitle">{title}</h3>;
}
