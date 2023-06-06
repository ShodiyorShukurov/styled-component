import Busines from "../components/Busines";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Help from "../components/Help";
import Work from "../components/Work";
import { ToastContainer } from 'react-toastify';



const Root = () => {
  return (
    <>
      <Header />
      <Busines />
      <Help />
      <Work />
      <Contact />
      <Footer />

      <ToastContainer/>
    </>
  );
};

export default Root;
