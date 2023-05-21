import Banner from "../banner/Banner";
import useTitle from "../hooks/useTitle";
import Gellary from "../pages/Gellary";
import ShopByCategory from "./ShopByCategory";

import 'aos/dist/aos.css';

const Home = () => {

    useTitle('Home')

    return (
        <div>
            <Banner/>
            <Gellary/>
            <ShopByCategory/>
        </div>
    );
};

export default Home;