import "./style/PremierStyle.css";
import Banner from "./sections/BannerPremier/BannerPremier.jsx";
import Noticias from "./sections/noticias/Noticias.jsx";

export default function Home() {

  return (
    <div className="Premier-container">

        <Banner/>
        <Noticias/>
      
    </div>
  );
}
