import { useState } from "react";
import CustomerBasket from "./CustomerBasket";

export default function Basket(props) {
  // console.log(props);

  return (
    <fieldset className="Your_order_id">
      <legend>
        <h1>Your Order</h1>
      </legend>
      <CustomerBasket basket={props.basket} />
      <button className="Next" onClick={props.setPayment}>
        Go to payment
      </button>
    </fieldset>
  );
}
