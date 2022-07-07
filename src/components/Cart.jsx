import React, { Fragment } from "react";
import Product from "./Product";

const Cart = ({ cart, setCart }) => {
  return (
    <Fragment>
      <h1 className="mt-4 text-center">Cart</h1>
      <ul>
        {cart.map((product) => (
          <Product
            product={product}
            key={product.id}
            cart={cart}
            setCart={setCart}
            isCart={true}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default Cart;
