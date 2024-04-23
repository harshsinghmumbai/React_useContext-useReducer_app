import { Outlet } from "react-router-dom";
import Header from "./Header";

const Mainheader = () => {
  return (
    <>
      <div className="max-w-[1400px] m-auto">
        <Header />
      </div>
      <Outlet />
    </>
  );
};

export default Mainheader;
