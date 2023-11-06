import { Outlet } from "react-router-dom";
import Navbar from "../SharingCom/Navbar";
import Footer from "../SharingCom/Footer";



const MainLayout = () => {
    return (
        <div>
           <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;