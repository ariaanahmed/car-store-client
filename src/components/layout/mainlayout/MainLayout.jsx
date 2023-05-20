import { Outlet } from "react-router-dom";
import Header from "../../header/Header";
import Footer from "../../footer/Footer";

const MainLayout = () => {
    return (
        <div style={{minHeight: '100vh', display: 'flex', flexDirection: 'column'}}>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default MainLayout;