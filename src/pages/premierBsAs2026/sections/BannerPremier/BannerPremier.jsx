import "./styles/BanerPremier.css";
import { bannerData } from "./data/banerData";

const BanerPremier = () => {
    return (
        <section
            className="BanerPremier"
            style={{ backgroundImage: `url(${bannerData.image})` }}
        >
        </section>
    );
};

export default BanerPremier;