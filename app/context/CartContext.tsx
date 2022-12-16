import React, { createContext, useState, useEffect } from "react";
import { ProductType } from "~/utils/data";

interface ContextType {
  cart: Array<ProductType>;
  addToCart: any;
  removeFromCart: any;
  clearCart: any;
  increaseAmount: any;
  decreaseAmount: any;
  getProductFromLocalStorage: any;
}

const CartContext = React.createContext<ContextType | null>(null);
CartContext.displayName = "CartContext";

const CartProvider = (props: any) => {
  // cart state
  const [cart, setCart] = useState<Array<ProductType>>([]);

  //get cart from local storage
  const getProductFromLocalStorage = () => {
    const storageProducts = localStorage.getItem("cart");
    if (storageProducts !== null) {
      let localCart = JSON.parse(localStorage.getItem("cart") as string);
      localStorage.setItem("cart", localCart);
    }
  };

  // add to cart
  const addToCart = (product: ProductType) => {
    if (cart.find((item) => item.id == product.id)) {
      const newCartItems = cart.map((item) =>
        item.id == product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(newCartItems);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
      if (!localStorage.getItem("cart")) {
        localStorage.setItem("cart", JSON.stringify([]));
      }
      localStorage.setItem(
        "cart",
        JSON.stringify([...cart, { ...product, quantity: 1 }])
      );
    }
  };

  // remove from cart
  const removeFromCart = (id: number) => {
    const newCartItems = cart.filter((item) => item.id != id);
    setCart(newCartItems);

    let products = [];
    if (localStorage.getItem("cart") !== null) {
      products = JSON.parse(localStorage.getItem("cart") as string);
    }
    const newProducts = products.filter((item: ProductType) => item.id != id);
    localStorage.setItem("cart", JSON.stringify(newProducts));
  };

  // clear cart
  const clearCart = () => {
    setCart([]);
  };

  // increase amount
  const increaseAmount = (id: number) => {
    const newCartItems = cart.map((item) =>
      item.id == id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(newCartItems);
  };

  // decrease amount
  const decreaseAmount = (id: number) => {
    const newCartItems = cart.map((item) =>
      item.id == id ? { ...item, quantity: item.quantity - 1 } : item
    );
    setCart(newCartItems);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        increaseAmount,
        decreaseAmount,
        getProductFromLocalStorage,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export const useCartProvider = () => {
  const context = React.useContext(CartContext) as ContextType;
  if (context === undefined) {
    throw new Error("useCartProvider must be used within a CartProvider");
  }
  return context;
};

export default CartProvider;
