import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import { CartContext } from '../context/CartContext';

export const Item = ({ product }) => {
  const { addItem } = useContext(CartContext);

  const handleAddToCart = () => {
    addItem({ ...product, price: Number(product.precio) }, 1);
  };

  return (
    <Card className="mb-3" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={product.imagen} />
      <Card.Body>
        <Card.Title>{product.titulo}</Card.Title>
        <Card.Text>{product.descripcion}</Card.Text>
        <Card.Text>{product.categoria}</Card.Text>
        {product.precio && <Card.Text>${product.precio}</Card.Text>}
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Button variant="primary" onClick={handleAddToCart}>
            Agregar al carrito
          </Button>
          <Link to={`/item/${product.id}`}>
            <Button variant="secondary">Conocé Más!</Button>
          </Link>
        </div>
      </Card.Body>
    </Card>
  );
};
