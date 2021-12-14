export default function Order(props) {
  return (
    <fieldset className={`Order_id ${props.setPayment ? "hide" : ""}`}>
      <legend>
        <h1>Order</h1>
      </legend>
      <p>Welcome to the Foobar order page!</p>
      <p>
        Here you'll' find our selection of beers on tap.
        <br />
        Order your favorite beer directly from your table without the hassle of having to wait in line.
      </p>
    </fieldset>
  );
}
