import { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const clear = () => setItems([]);

  const removeItem = (id) => {
    const filteredItems = items.filter((item) => item.id !== id);
    setItems(filteredItems);
  };

  const addItem = (item, count) => {
    const existingItemIndex = items.findIndex((i) => i.id === item.id);
    const itemPrice = Number(item.price);

    if (existingItemIndex >= 0) {
      const updatedItems = items.map((i, index) =>
        index === existingItemIndex
          ? { ...i, count: i.count + count, price: itemPrice }
          : i
      );
      setItems(updatedItems);
    } else {
      setItems([...items, { ...item, count, price: itemPrice }]);
    }
  };

  return (
    <CartContext.Provider value={{ addItem, clear, items, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};
