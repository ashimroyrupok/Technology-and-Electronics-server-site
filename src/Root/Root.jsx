import { Outlet } from "react-router-dom";
import Header from "../layout/Header/Header";
import Footer from "../components/Footer/Footer";

const Root = () => {
    return (
        <div className="bg-[#050E2D]">

            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default Root;