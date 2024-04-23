import { useContext } from "react";
import AppContext from "./Context";

const Custom_Hook = () => {
  return useContext(AppContext);
};

export default Custom_Hook;
