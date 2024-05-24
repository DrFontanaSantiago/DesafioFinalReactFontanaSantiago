import React, { useState } from 'react';

export const ItemCount = ({ onAdd, stock }) => {
  const [count, setCount] = useState(1);

  const handleDecrease = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleIncrease = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const handleAdd = () => {
    onAdd(count);
    setCount(1); // Reset count after adding to cart
  };

  return (
    <div className="d-flex align-items-center">
      <button
        className="btn btn-danger"
        onClick={handleDecrease}
        disabled={count <= 1}
      >
        -
      </button>
      <input
        type="number"
        className="form-control mx-2"
        value={count}
        readOnly
        style={{ width: '60px', textAlign: 'center' }}
      />
      <button
        className="btn btn-success"
        onClick={handleIncrease}
        disabled={count >= stock}
      >
        +
      </button>
      <button
        className="btn btn-primary mx-2"
        onClick={handleAdd}
        disabled={stock === 0}
      >
        Agregar al carrito
      </button>
    </div>
  );
};
