import React, { useContext, useState } from "react";
import { Container } from "react-bootstrap";
import { ItemCount } from "./ItemCount";
import { CartContext } from "../context/CartContext";

export const ItemDetail = ({ product }) => {
  const { addItem } = useContext(CartContext);
  const [currentStock, setCurrentStock] = useState(product.stock);

  const handleAddToCart = (quantity) => {
    if (currentStock >= quantity) {
      addItem({ ...product, price: Number(product.precio) }, quantity);
      setCurrentStock(currentStock - quantity);
    } else {
      alert("No hay suficiente stock disponible.");
    }
  };

  return (
    <Container className="mt-5">
      <h1>{product.titulo}</h1>
      <img
        src={product.imagen}
        style={{ height: 450, width: "auto" }}
        alt={product.titulo}
      />
      <p>{product.descripcion}</p>
      <div>{`Stock: ${currentStock}`}</div>
      <div>{`Precio: $${product.precio}`}</div>
      <ItemCount stock={currentStock} onAdd={handleAddToCart} />
    </Container>
  );
};

export default ItemDetail;
