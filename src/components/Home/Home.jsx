import Banner from "../banner/Banner";
import useTitle from "../hooks/useTitle";
import Gellary from "../pages/Gellary";
import OurClients from "../pages/OurClients";
import ShopByCategory from "./ShopByCategory";

import 'aos/dist/aos.css';

const Home = () => {

    useTitle('Home')

    return (
        <div>
            <Banner/>
            <Gellary/>
            <ShopByCategory/>
            <OurClients/>
        </div>
    );
};

export default Home;