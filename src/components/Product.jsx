import React from "react";
import { Button, Card, Row, Col } from "react-bootstrap";

const Product = ({ product, cart, setCart, isCart }) => {
  const { id, name, price, quantity } = product;

  const addProduct = (id) => {
    if (product) {
      if (cart.find((product) => product.id === id)) {
        setCart(
          cart.map((product) =>
            product.id === id
              ? { ...product, quantity: product.quantity + 1 }
              : product
          )
        );
      } else {
        setCart([...cart, { ...product, quantity: 1 }]);
      }
    }
  };

  const removeProduct = (id) => {
    if (product) {
      setCart(cart.filter((product) => product.id !== id));
    }
  };

  const addQuantity = () => {
    if (product) {
      setCart(
        cart.map((product) =>
          product.id === id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        )
      );
    }
  };

  const removeQuantity = () => {
    if (product) {
      setCart(
        cart.map((product) => {
          if (product.id === id) {
            if (product.quantity > 1) {
              return { ...product, quantity: product.quantity - 1 };
            }
          }
          return product;
        })
      );
    }
  };

  return (
    <Card className="text-center m-3">
      <Card.Body>
        <Card.Title>
          {name}
        </Card.Title>
        <Card.Text>{price}</Card.Text>
        {isCart ? (
          <Row>
            <Col className="d-flex justify-content-center align-items-center">
              <Button variant="danger" onClick={() => removeQuantity(id)}>
                -
              </Button>
              <p className="ms-2 me-2 mt-2">{quantity}</p>
              <Button variant="primary" onClick={() => addQuantity(id)}>
                +
              </Button>
            </Col>
            <Col>
              <Button variant="warning" onClick={() => removeProduct(id)}>
                Quitar
              </Button>
            </Col>
          </Row>
        ) : (
          <Row>
            <Col>
              <Button variant="success" onClick={() => addProduct(id)}>
                Comprar
              </Button>
            </Col>
          </Row>
        )}
      </Card.Body>
    </Card>
  );
};

export default Product;
