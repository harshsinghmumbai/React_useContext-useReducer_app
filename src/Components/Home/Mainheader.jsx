import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Mainheader = () => {
  return (
    <>
      <div className="max-w-[1400px] m-auto">
        <Header />
      </div>
      <Outlet />
      <Footer />
    </>
  );
};

export default Mainheader;
