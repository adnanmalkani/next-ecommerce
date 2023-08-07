"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import dance from "@/public/dance.gif";
import Link from "next/link";
import { useCartStore } from "@/store";

const OrderComfirmed = () => {
  const cartStore = useCartStore();

  useEffect(() => {
    cartStore.setPaymentIntent("");
    cartStore.clearCart();
  }, []);

  const checkoutOrder = () => {
    setTimeout(() => {
      cartStore.setCheckout("cart");
    }, 1000);
    cartStore.toggleCart();
  };

  return (
    <motion.div
      className="flex items-center justify-center my-12"
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
    >
      <div className="p-12 rounded-md text-center">
        <h1 className="text-xl font-medium">Your order has been placed 🚀</h1>
        <h2 className="text-sm my-4 ">Check your email for reciept.</h2>
        <Image src={dance} className="py-8" alt=" dancing kid " />
        <div className="flex items-center justify-center">
          <Link href={"/dashboard"}>
            <button onClick={checkoutOrder} className="font-medium">
              Check your Order{" "}
            </button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default OrderComfirmed;
