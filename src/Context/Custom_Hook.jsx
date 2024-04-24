import { useContext } from "react";
import AppContext from "./Context";

const Custom_Hook = () => {
  /*  Custom hook
 Global      :-you can use any were in  your current project
 custom hook :-hook that is purely created by use
*/
  return useContext(AppContext);
};

export default Custom_Hook;
