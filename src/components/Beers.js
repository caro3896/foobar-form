import { useState } from "react";
import Basket from "./Basket";

export default function Beer(props) {
  console.log(props);

  const [amount, setAmount] = useState(0);

  function addOne() {
    setAmount((prevState) => prevState + 1);
    props.setBasket({
      name: props.name,
      price: 50,
      id: props.name,
      label: props.label,
    });
  }

  // HJÆLP HER
  function removeOne() {
    console.log(props);
    setAmount((prevState) => {
      if (prevState > 0) {
        return prevState - 1;
      }
      return 0;
    });
    //props.setBasket(props.filter(props.indexOf(props.name, 1)));
  }

  function readMore() {}

  return (
    <article className="Beer">
      <h2>{props.name}</h2>
      <img src={`../images/${props.label}`} alt={props.name} />
      <p className="Alc">{props.alc}% alc</p>
      <p className="Type">{props.category}</p>
      <p className="Impression">{props.description.overallImpression}</p>
      <h3 className="Price">50 DKK</h3>
      {/* <button onClick={readMore} className="Read_more">
        Read more
      </button> */}
      <button onClick={addOne}>+</button>
      {amount}
      <button onClick={removeOne}>-</button>
    </article>
  );
}
