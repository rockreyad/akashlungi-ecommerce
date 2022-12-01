import React from "react";

interface ContextType {
  isSideMenuOpen: Boolean;
  seIsSideMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isActive: Boolean;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const ThemeContext = React.createContext<ContextType | null>(null);
ThemeContext.displayName = "ThemeContext";

// const setTheme = (theme: string, setState: Function, stateValue: Boolean) => {
//   localStorage.setItem("theme", theme);
//   document.documentElement.className = theme;
//   setState(stateValue);
// };

function ThemeProvider(props: any) {
  const [isSideMenuOpen, setIsSideMenuOpen] = React.useState(false);
  const [isActive, setIsActive] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });

  return (
    <ThemeContext.Provider
      value={{ isSideMenuOpen, setIsSideMenuOpen, isActive, setIsActive }}
      {...props}
    />
  );
}

export const useThemeProvider = () => {
  const context = React.useContext(ThemeContext) as ContextType;
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export const CartContext = React.createContext<ContextType | null>(null);

const CartProvider = (props: any) => {
  const [cart, setCart] = React.useState([]);
  const [itemAmount, setItemAmount] = React.useState(0);
  const [total, setTotal] = React.useState(0);

  React.useEffect(() => {
    const total = cart.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.price + currentItem.amount;
    }, 0);
    setTotal(total);
  });

  // update item amount
  React.useEffect(() => {
    if (cart) {
      const amount = cart.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.amount;
      }, 0);
      setItemAmount(amount);
    }
  }, [cart]);

  // add to cart
  const addToCart = (product, id) => {
    const newItem = { ...product, amount: 1 };
    // check if the item is already in the cart
    const cartItem = cart.find((item) => {
      return item.id === id;
    });
    // if cart item is already in the cart
    if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount + 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
    }
  };

  // remove from cart
  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => {
      return item.id !== id;
    });
    setCart(newCart);
  };

  // clear cart
  const clearCart = () => {
    setCart([]);
  };

  // increase amount
  const increaseAmount = (id) => {
    const cartItem = cart.find((item) => item.id === id);
    addToCart(cartItem, id);
  };

  // decrease amount
  const decreaseAmount = (id) => {
    const cartItem = cart.find((item) => {
      return item.id === id;
    });
    if (cartItem) {
      const newCart = cart.map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount - 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    }

    if (cartItem.amount < 2) {
      removeFromCart(id);
    }
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
        itemAmount,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default ThemeProvider;
