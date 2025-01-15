import { createContext, useEffect, useState } from "react";

const authContext = createContext();

const AuthProvider = ({ children }) => {
  const [productId, setProductId] = useState("");
  const [cartItems, setCartItems] = useState([]);
  const [productInfo, setProductInfo] = useState({});

  useEffect(() => {
    const updateItemInCart = () => {
      if (!productInfo) {
        return;
      } else {
        const updatedCart = cartItems.map((product) => {
          return product.id === productInfo.id ? productInfo : product;
        });
        setCartItems(updatedCart);
      }
    };
    updateItemInCart();
  }, [productInfo]);

  useEffect(() => {
    const setItemToCart = () => {
      if (!productId) {
        return;
      } else {
        const productData = { id: productId, qty: 1 };
        const cart = [...cartItems, productData];
        setCartItems(cart);
      }
    };
    setItemToCart();
  }, [productId]);

  const removeFromCart = (productId) =>{
    setCartItems((prevCart) => prevCart.filter((item) => item.id !== productId));
  }

  return (
    <authContext.Provider
      value={{
        productId,
        setProductId,
        cartItems,
        setProductInfo,
        removeFromCart
      }}
    >
      {children}
    </authContext.Provider>
  );
};

export { authContext, AuthProvider };
