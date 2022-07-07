import React, { Fragment, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Product from "./components/Product";
import Cart from "./components/Cart";

const App = () => {
  const [products, setProducts] = useState([
    { id: 0, name: "Product 1", price: "$100", quantity: 0 },
    { id: 1, name: "Product 2", price: "$200", quantity: 0 },
    { id: 2, name: "Product 3", price: "$300", quantity: 0 },
  ]);

  const [cart, setCart] = useState([]);

  return (
    <Fragment>
      <Header />
      <Container>
        <Row>
          <Col className="mt-4 text-center">
            <h1>Products</h1>
            {products.map((product) => (
              <Product
                product={product}
                key={product.id}
                cart={cart}
                setCart={setCart}
                isCart={false}
              />
            ))}
          </Col>
          <Col>
            <Cart cart={cart} setCart={setCart} />
          </Col>
        </Row>
      </Container>
      <Footer className="position-fixed bottom-0 m-0"/>
    </Fragment>
  );
};

export default App;
