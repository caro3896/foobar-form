// Caroline, Sophie
export default function thankYou(props) {
  function returnToList() {
    props.goToPayment();
    props.setButtonRemoved((oldState) => !oldState);

    props.setBasket((prevState) => {
      const nextState = [];
      return nextState;
    });
  }

  return (
    <fieldset className={`Thanks_id ${props.setThanks ? "" : "hide"}`}>
      <legend>
        <h1>Thank you for your order</h1>
      </legend>
      <p>Thank you for ordering at Foobar.</p>
      <p>Your order is currently being prepared and will be available shortly.</p>
      <button className="return" onClick={returnToList}>
        Close
      </button>
    </fieldset>
  );
}
