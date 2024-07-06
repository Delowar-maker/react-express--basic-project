import AppNavBar from "./AppNavBar";
import Footer from "./Footer";
import {Toaster} from "react-hot-toast";



const MasterLayout = (props) => {
  return (
    <div>
      <AppNavBar />
      {props.children}
        <Toaster position="bottom-center" />
      <Footer />
    </div>
  );
};

export default MasterLayout;
