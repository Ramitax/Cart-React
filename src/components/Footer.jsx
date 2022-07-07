import React from "react";
import { Card, Button } from "react-bootstrap";

const Footer = () => {
  return (
    <Card className="text-center bg-dark text-white position-absolute w-100 bottom-0 rounded-0">
      <Card.Body>
        <Card.Title>Shopify</Card.Title>
        <Card.Text>
          Somos una empresa especializada en la venta de productos
        </Card.Text>
        <Button variant="primary">Contacto</Button>
      </Card.Body>
    </Card>
  );
};

export default Footer;
