export default function Form(props) {
  const initialValue = 0;
  let sum = props.basket.reduce(function (previousValue, currentValue) {
    return previousValue + currentValue.price;
  }, initialValue);
  return (
    <fieldset className="Payment_id">
      <legend>
        <h1>Payment</h1>
      </legend>
      <form action="">
        <div className="Form-group">
          <label htmlFor="name">Your name</label>
          <p>Enter your name</p>
          <input type="text" name="name" id="" />
        </div>
        <div className="Form-group">
          <label htmlFor="cardno">Card Number</label>
          <p>Enter your credit card number</p>
          <input type="number" name="cardno" id="" placeholder="xxxx xxxx xxxx xxxx" />
        </div>
        <div className="Form-group">
          <label htmlFor="expire">Expiration Date</label>
          <p>e.g. 06 / 12 </p>
          <input type="number" name="expire" id="" placeholder="MM / YYYY" />
        </div>
        <div className="Form-group">
          <label htmlFor="cvc">Expiration Date</label>
          <p>e.g. 123</p>
          <input type="number" name="cvc" id="" placeholder="CVC" />
        </div>
        <p className="sumTotal">{sum} DKK</p>
        <button id="pay" type="submit">
          Pay and order
        </button>
      </form>
    </fieldset>
  );
}
