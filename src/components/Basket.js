import CustomerBasket from "./CustomerBasket";

export default function Basket(props) {
  function goToPayment() {
    console.log("payment button clicked");
  }
  return (
    <fieldset className="Your_order_id">
      <legend>
        <h1>Your Order</h1>
      </legend>
      <CustomerBasket basket={props.basket} />
      <button className="Next" onClick={goToPayment}>
        Go to payment
      </button>
    </fieldset>
  );
}
