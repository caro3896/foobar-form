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
          <span className="Checkmark">
            <input type="text" id="name" name="name" placeholder="E.g. John Dillermand" required />
          </span>
          <span className="Error">Please enter your full name</span>
        </div>
        <div className="Form-group">
          <label htmlFor="cardno">Card Number</label>
          <span className="Checkmark">
            <input type="tel" id="cardno" name="cardno" inputmode="numeric" placeholder="XXXX XXXX XXXX XXXX" pattern="[0-9]{16}" required />
          </span>
          <span className="Error">Must be 16 characters long</span>
        </div>
        <div className="Form-group">
          <label htmlFor="expire-month">Expiry Date</label>
          <span className="Checkmark">
            <input type="tel" id="expire-month" name="expire-month" inputmode="numeric" placeholder="MM" required pattern="[0-9]{2}" />
            <label htmlFor="expire-year"></label>
            <input type="tel" id="expire-year" name="expire-year" inputmode="numeric" placeholder="YYYY" required pattern="[0-9]{4}" />
          </span>
          <span className="Error">Eg. 01/2022</span>
        </div>
        <div className="Form-group">
          <label htmlFor="cvc">CVC</label>
          <span className="Checkmark">
            <input type="tel" id="cvc" name="cvc" inputmode="numeric" placeholder="XXX" required pattern="[0-9]{3}"></input>
          </span>
          <span className="Error">Security code (3 digits on back of card)</span>
        </div>
        <p className="sumTotal">{sum} DKK</p>
        <button id="pay" type="submit">
          Pay and order
        </button>
      </form>
    </fieldset>
  );
}
