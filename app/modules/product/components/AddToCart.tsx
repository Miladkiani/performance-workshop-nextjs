"use client";
import React from "react";
import { useCartStore } from "../../cart";

// TODO:
function AddToCart() {
  const { add } = useCartStore();

  return (
    <button className="btn btn-primary btn-xs" onClick={add}>
      {"Add To Cart"}
    </button>
  );
}

export default AddToCart;
