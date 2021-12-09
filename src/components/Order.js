export default function Order(props) {
  return (
    <fieldset className={`Order_id ${props.setPayment ? "hide" : ""}`}>
      <legend>
        <h1>Order</h1>
      </legend>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi aspernatur praesentium earum eveniet quas cumque vel commodi explicabo illo facere id nulla molestias, blanditiis non laboriosam vitae repellendus eligendi atque.</p>
    </fieldset>
  );
}
