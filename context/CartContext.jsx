import { createContext, useContext, useState } from "react";

const CartContext = createContext(undefined);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [history, setHistory] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }
      return [
        ...prevCart,
        {
          id: product.id,
          title: product.title,
          price: product.price,
          quantity: 1,
          image: product.image,
        },
      ];
    });
  };

  const removeFromCart = (id) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  const getTotalPrice = () =>
    cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const checkout = () => {
    if (cart.length === 0) return;
    const newTransaction = {
      id: `TX-${Math.floor(1000 + Math.random() * 9000)}`,
      date: new Date().toLocaleString("id-ID"),
      items: cart,
      total: getTotalPrice(),
    };
    setHistory([newTransaction, ...history]);
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        history,
        addToCart,
        removeFromCart,
        checkout,
        getTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
