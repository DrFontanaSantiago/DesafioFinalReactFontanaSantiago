import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { FaShoppingCart } from 'react-icons/fa';

export const CartWidget = () => {
  const { items } = useContext(CartContext);
  const totalItems = items.reduce((acc, item) => acc + item.count, 0);

  return (
    <Link to="/cart" className="btn btn-light">
      <FaShoppingCart /> {totalItems}
    </Link>
  );
};

export default CartWidget;