import { createContext, useContext } from "react";
import faker from "faker";
import { useState } from "react";

const Cart = createContext();
const Context = ({ children }) => {
  const productsArray = [...Array(20)].map((p) => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.random.image()
  }));
  const [cart, setCart] = useState([]);
  const [products] = useState(productsArray);
  return (
    <Cart.Provider value={{ cart, setCart, products }}>
      {children}
    </Cart.Provider>
  );
};

export const CartState = () => {
  return useContext(Cart);
};

export default Context;
