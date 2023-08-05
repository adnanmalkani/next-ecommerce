"use client";

import { useCartStore } from "@/store";

interface Props {
  id: number;
  name: string;
  unit_amount: number;
  image: string;
  quantity: number | 1;
}

const AddCart = ({ id, name, unit_amount, image, quantity }: Props) => {
  const cartStore = useCartStore();

  return (
    <button
      onClick={() =>
        cartStore.addProduct({ id, name, unit_amount, image, quantity })
      }
      className="bg-teal-600 text-white py-2 px-4 font-medium rounded-md"
    >
      Add to Cart
    </button>
  );
};

export default AddCart;
