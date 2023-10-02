"use client";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useCartStore } from "..";

export function CartItem() {
  const { cart } = useCartStore();

  return (
    <div className="relative btn btn-primary btn-sm">
      <div className="badge badge-secondary badge-sm absolute top-0 right-0">
        {cart}
      </div>
      <FontAwesomeIcon icon={faShoppingCart} />
    </div>
  );
}
