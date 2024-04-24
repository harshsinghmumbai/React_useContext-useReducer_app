import { useReducer } from "react";
import AppContext from "./Context";
import Reducer from "./Reducer";

const initialState = {
  name: "",
  image: "",
};

const App_Provider = ({ children } /*c should be in small_case "c" */) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  const updatehomepage = () => {
    return /*properties are added*/ dispatch({
      /*differensiate:id*/ type: "homepage",
      /*what to perform*/ payload: {
        name: "Utkarsh Singh",
        image: "Images/img-2.avif",
      },
    });
  };

  const updateaboutpage = () => {
    return /*properties are added*/ dispatch({
      /*differensiate:id*/ type: "aboutpage",
      /*what to perform*/ payload: {
        name: "Harsh Singh",
        image: "Images/img-3.avif",
      },
    });
  };
  return (
    <AppContext.Provider
      value={{
        ...state /*state is default we get it*/,
        updateaboutpage,
        updatehomepage,
      }}
    >
      {children /*c should be in small_case "c"  */}
    </AppContext.Provider>
  );
};

export default App_Provider;
