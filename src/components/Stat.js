import React from "react";

const Stat = ({ children, quantity }) => {
  return (
    <>
      <div>{children}</div>
      <h1>{quantity}</h1>
    </>
  );
};

export default Stat;
