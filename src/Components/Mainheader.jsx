import { Outlet } from "react-router-dom";
import Header from "./Header";

const Mainheader = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Mainheader;
