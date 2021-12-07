import CustomerBasket from "./CustomerBasket";

export default function Basket(props) {
  console.log(props.cartBeer);

  function goToPayment() {
    console.log("payment button clicked");
  }
  return (
    <fieldset className="Your_order_id">
      <legend>Your Order</legend>
      <CustomerBasket basket={props.basket} />
      <button className="Next" onClick={goToPayment}>
        Go to payment
      </button>
    </fieldset>
  );
}
