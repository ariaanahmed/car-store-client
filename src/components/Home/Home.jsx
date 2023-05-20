import Banner from "../banner/Banner";
import Gellary from "../pages/Gellary";
import ShopByCategory from "./ShopByCategory";

const Home = () => {
    return (
        <div>
            <Banner/>
            <Gellary/>
            <ShopByCategory/>
        </div>
    );
};

export default Home;