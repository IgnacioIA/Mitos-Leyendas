import "./styles/BanerBanList.css";
import { bannerData } from "./data/banerData";

const BanerBanList = () => {
    return (
        <section
            className="BanerBanList"
            style={{ backgroundImage: `url(${bannerData.image})` }}
        >
        </section>
    );
};

export default BanerBanList;