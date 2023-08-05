"use client";
import { useState, useEffect } from "react";
import { useCartStore } from "@/store";
import { loadStripe, StripeElementsOptions } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

const Checkout = () => {
  const cartStore = useCartStore();
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    //Create PaymentIntent as soon as the page loads
    fetch("/api/payment_intents", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        items: cartStore.cart,
        payment_intent_id: cartStore.paymentIntent,
      }),
    }).then((res) => {
      console.log(res);
      //SET CLIENT SECRET and the payment intent associated with it
    });
  }, []);

  return <div>Checkout</div>;
};

export default Checkout;
