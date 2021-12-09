import { useState } from "react";
import CustomerBasket from "./CustomerBasket";

export default function Basket(props) {
  console.log(props);

  const [buttonRemoved, setButtonRemoved] = useState(false);

  function test() {
    props.setPayment();
    setButtonRemoved((oldState) => !oldState);
  }

  return (
    <fieldset className="Your_order_id">
      <legend>
        <h1>Your Order</h1>
      </legend>
      <CustomerBasket basket={props.basket} />
      <button className={`Next ${buttonRemoved ? "hide" : ""}`} onClick={test}>
        Go to payment
      </button>
    </fieldset>
  );
}
