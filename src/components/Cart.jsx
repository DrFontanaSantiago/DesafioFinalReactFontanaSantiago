import React, { useContext } from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

export const Cart = () => {
  const { items, removeItem, clear } = useContext(CartContext);

  const totalPrice = items.reduce((acc, item) => acc + item.price * item.count, 0);

  return (
    <Container className="mt-5">
      <h1>Carrito</h1>
      {items.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Producto</th>
                <th>Cantidad</th>
                <th>Precio</th>
                <th>Subtotal</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.id}>
                  <td>{item.titulo}</td>
                  <td>{item.count}</td>
                  <td>${item.price}</td>
                  <td>${item.price * item.count}</td>
                  <td>
                    <Button variant="danger" onClick={() => removeItem(item.id)}>
                      Eliminar
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <h3>Total: ${totalPrice}</h3>
          <Button variant="danger" onClick={clear}>
            Vaciar Carrito
          </Button>
          <Link to="/checkout">
            <Button variant="success">Finalizar Compra</Button>
          </Link>
        </>
      )}
    </Container>
  );
};

export default Cart;