import { useReducer } from "react";
import AppContext from "./Context";
import Reducer from "./Reducer";

const initialState = {
  name: "",
  image: "",
};

const App_Provider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  const updatehomepage = () => {
    return dispatch({
      type: "homepage",
      payload: {
        name: "Utkarsh Singh",
        image: "Images/img-2.avif",
      },
    });
  };

  const updateaboutpage = () => {
    return dispatch({
      type: "aboutpage",
      payload: {
        name: "Harsh Singh",
        image: "Images/img-3.avif",
      },
    });
  };
  return (
    <AppContext.Provider value={{ ...state, updateaboutpage, updatehomepage }}>
      {children}
    </AppContext.Provider>
  );
};

export default App_Provider;
