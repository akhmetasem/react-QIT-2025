import { createContext, useReducer, useContext } from "react";

const initialState = {
  items: []
};

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM":
      return { ...state, items: [...state.items, action.payload] };
    case "REMOVE_ITEM":
      return { ...state, items: state.items.filter((item, index) => index !== action.payload) };
    case "CLEAR_CART":
      return { ...state, items: [] };
    default:
      return state;
  }
}


const CartContext = createContext();


export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}


export function useCart() {
  return useContext(CartContext);
}
