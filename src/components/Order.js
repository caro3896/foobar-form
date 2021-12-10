export default function Order(props) {
  return (
    <fieldset className={`Order_id ${props.setPayment ? "hide" : ""}`}>
      <legend>
        <h1>Order</h1>
      </legend>
      <p>Here you can find our selection of beers on tap and order your favorit beer right by the hand. All you need to do is choose the beer you want and go to check out, you’ll get a notification when your order is ready for pick-up.</p>
    </fieldset>
  );
}
