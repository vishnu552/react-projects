import React, {
  useState,
  useContext,
  useReducer,
  useEffect,
  createContext,
} from "react";
import cartItems from "./data";
//import reducer from "./reducer";

const reducer = (state, action) => {
  return state;
};
const url = "https://course-api.com/react-useReducer-cart-project";
const AppContext = createContext();

const initialState = {
  loading: true,
  cart: [],
};
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [cart, setCart] = useState(cartItems);
  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
