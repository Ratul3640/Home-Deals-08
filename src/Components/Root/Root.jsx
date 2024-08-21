import FirebaseProvider from "../../FirebaseProvider/FirebaseProvider";
import Footer from "../Home/Footer/Footer";
import NavBar from "../NavBar/NavBar";
import { Outlet } from "react-router-dom";




const Root = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <NavBar></NavBar>



            <FirebaseProvider text={'hello'} text2={'world'}>
               
            </FirebaseProvider>
            <Outlet></Outlet>
            <Footer></Footer>

        </div>
    );
};

export default Root;