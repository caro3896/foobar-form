import CustomerBasket from "./CustomerBasket";

export default function Basket(props) {
  return (
    <fieldset className="Your_order_id">
      <legend>Your Order</legend>
      <CustomerBasket basket={props.basket} />
      <button className="Next">Go to payment</button>
    </fieldset>
  );
}
