import { useRef } from "react";
import { post } from "../Post/crud";
import "animate.css";

export default function Form(props) {
  const initialValue = 0;
  let sum = props.basket.reduce(function (previousValue, currentValue) {
    return previousValue + currentValue.price;
  }, initialValue);

  /* Form post */

  const form = useRef();

  /* const data = [
    {
      name: "Hoppily Ever After",
      amount: 1,
    },
    {
      name: "Row 26",
      amount: 2,
    },
  ]; */

  const data = props.basket.map((beer) => {
    return {
      name: beer.name,
      amount: 1,
    };
  });

  function handleSubmit(e) {
    e.preventDefault();
    console.log(form.current.checkValidity());
    if (form.current.checkValidity()) {
      post(data);
      props.setThanks();
    } else {
      form.current.reportValidity();
    }
  }

  /* props.basket.forEach((beer) => {
        const data = [
          {
            name: beer.name,
            amount: 1,
          },
        ];
        console.log(data);
        post(data);
      }); */

  return (
    <fieldset className={`Payment_id ${props.setPayment ? "animate__animated animate__fadeInLeft" : "hide"}` || `Payment_id ${props.setThanks ? "hide" : ""}`}>
      <legend>
        <h1>Payment</h1>
      </legend>
      <form action="" ref={form} onSubmit={handleSubmit}>
        <div className="Form-group">
          <label htmlFor="name">Your name</label>
          <input type="text" id="name" name="name" placeholder="E.g. John Dillermand" requireds />
          <span className="Error">
            <svg xmlns="http://www.w3.org/2000/svg" width="17.612" height="17.612" viewBox="0 0 17.612 17.612">
              <path
                id="Icon_material-error"
                data-name="Icon material-error"
                d="M11.806,3a8.806,8.806,0,1,0,8.806,8.806A8.809,8.809,0,0,0,11.806,3Zm.881,13.209H10.925V14.448h1.761Zm0-3.522H10.925V7.4h1.761Z"
                transform="translate(-3 -3)"
                fill="#9b2525"
              />
            </svg>
            Please enter your full name
          </span>
        </div>
        <div className="Form-group">
          <label htmlFor="cardno">Card Number</label>
          <input type="tel" id="cardno" name="cardno" inputmode="numeric" placeholder="XXXX XXXX XXXX XXXX" pattern="[0-9]{16}" required />
          <span className="Error">
            <svg xmlns="http://www.w3.org/2000/svg" width="17.612" height="17.612" viewBox="0 0 17.612 17.612">
              <path
                id="Icon_material-error"
                data-name="Icon material-error"
                d="M11.806,3a8.806,8.806,0,1,0,8.806,8.806A8.809,8.809,0,0,0,11.806,3Zm.881,13.209H10.925V14.448h1.761Zm0-3.522H10.925V7.4h1.761Z"
                transform="translate(-3 -3)"
                fill="#9b2525"
              />
            </svg>
            Must be 16 characters long
          </span>
        </div>
        <div className="Form-group Expire">
          <label htmlFor="expire-month">Expiry Date</label>
          <label htmlFor="expire-year"></label>
          <input type="tel" id="expire-month" name="expire-month" inputmode="numeric" placeholder="MM" required pattern="[0-9]{2}" />
          <input type="tel" id="expire-year" name="expire-year" inputmode="numeric" placeholder="YYYY" required pattern="[0-9]{4}" />
          <span className="Error">
            <svg xmlns="http://www.w3.org/2000/svg" width="17.612" height="17.612" viewBox="0 0 17.612 17.612">
              <path
                id="Icon_material-error"
                data-name="Icon material-error"
                d="M11.806,3a8.806,8.806,0,1,0,8.806,8.806A8.809,8.809,0,0,0,11.806,3Zm.881,13.209H10.925V14.448h1.761Zm0-3.522H10.925V7.4h1.761Z"
                transform="translate(-3 -3)"
                fill="#9b2525"
              />
            </svg>
            Eg. 01/2022
          </span>
        </div>
        <div className="Form-group">
          <label htmlFor="cvc">CVC</label>
          <input type="tel" id="cvc" name="cvc" inputmode="numeric" placeholder="XXX" required pattern="[0-9]{3}" />
          <span className="Error">
            <svg xmlns="http://www.w3.org/2000/svg" width="17.612" height="17.612" viewBox="0 0 17.612 17.612">
              <path
                id="Icon_material-error"
                data-name="Icon material-error"
                d="M11.806,3a8.806,8.806,0,1,0,8.806,8.806A8.809,8.809,0,0,0,11.806,3Zm.881,13.209H10.925V14.448h1.761Zm0-3.522H10.925V7.4h1.761Z"
                transform="translate(-3 -3)"
                fill="#9b2525"
              />
            </svg>
            Security code (3 digits on back of card)
          </span>
        </div>
        <hr />
        <p className="Total">Price in total:</p>
        <p className="SumTotal">{sum} DKK</p>
        <button id="pay" type="submit" onClick={handleSubmit}>
          Pay and order
        </button>
      </form>
    </fieldset>
  );
}
