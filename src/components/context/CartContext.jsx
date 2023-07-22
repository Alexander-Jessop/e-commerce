import { useReducer, createContext } from "react";

export const CartCtx = createContext({
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
  totalAmount: 0,
});

const defaultState = {
  cartItems: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.quantity;

    const existingCartItemIndex = state.cartItems.findIndex(
      (item) => item.id === action.item.id
    );

    const existingCartItem = state.cartItems[existingCartItemIndex];
    let updatedItems;

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity + action.item.quantity,
      };
      updatedItems = [...state.cartItems];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.cartItems.concat(action.item);
    }

    return {
      cartItems: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === "REMOVE") {
    const existingCartItemIndex = state.cartItems.findIndex(
      (item) => item.id === action.id
    );

    const existingCartItem = state.cartItems[existingCartItemIndex];

    const updatedTotalAmount = state.totalAmount - existingCartItem.price;

    let updatedItems;

    if (existingCartItem.quantity === 1) {
      updatedItems = state.cartItems.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity - 1,
      };

      updatedItems = [...state.cartItems];
      updatedItems[existingCartItemIndex] = updatedItem;
    }

    return {
      cartItems: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  return defaultState;
};

const CartCtxProvider = ({ children }) => {
  const [cartState, cartAction] = useReducer(cartReducer, defaultState);

  const addItemtoCart = (item) => {
    cartAction({ type: "ADD", item: item });
  };
  const removeItemFromCart = (id) => {
    cartAction({ type: "REMOVE", id: id });
  };

  const CartContext = {
    cartItems: cartState.cartItems,
    addToCart: addItemtoCart,
    removeFromCart: removeItemFromCart,
    totalAmount: cartState.totalAmount,
  };

  return <CartCtx.Provider value={CartContext}> {children} </CartCtx.Provider>;
};

export default CartCtxProvider;
