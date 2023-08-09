"use client";

import { useCartStore } from "@/store";
import { useState } from "react";

interface Props {
  id: number;
  name: string;
  unit_amount: number;
  image: string;
  quantity: number | 1;
}

const AddCart = ({ id, name, unit_amount, image, quantity }: Props) => {
  const cartStore = useCartStore();
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    cartStore.addProduct({ id, name, unit_amount, image, quantity });
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
    }, 500);
  };

  return (
    <button
      onClick={handleAddToCart}
      disabled={added}
      className="my-4 btn btn-primary text-white  w-full"
    >
      <span>{!added ? "Add to Cart" : "Adding to cart 😄"}</span>
    </button>
  );
};

export default AddCart;
