import React from "react";
import withAuth from "./HOC/withAuth";

const Cart = () => {
  return (
    <>
      <h2>Cart</h2>
    </>
  );
};

export default withAuth(Cart);