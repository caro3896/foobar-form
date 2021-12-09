import { useState, useRef } from "react";
import Basket from "./Basket";

export default function Beer(props) {
  // console.log(props);
  // console.log(props.basket);

  const [amount, setAmount] = useState(0);
  const [isOpen, setIsOpen] = useState(true);

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
    console.log(props.basket);
    setAmount((prevState) => {
      if (prevState > 0) {
        //props.basket.map(props.basket.name !== props.name);
        //prevState(props.basket.filter((x) => x.name == props.name));
        return prevState - 1;
      }
      return 0;
    });
    props.basket.pop(props.basket.name); // Pop = fjerne det nyeste i arrayet.
  }

  function readMore() {
    setIsOpen((oldState) => !oldState);
  }

  return (
    <>
      <article className="Beer">
        <h2>{props.name}</h2>
        <img src={`../images/${props.label}`} alt={props.name} />
        <p className="Alc">{props.alc}% alc</p>
        <p className="Type">{props.category}</p>
        <h3 className="Price">50 DKK</h3>
        <button onClick={readMore} className="Read_more">
          Read more
        </button>
        <span className="addOrRemove">
          <button onClick={removeOne}>-</button>
          <p>{amount}</p>
          <button onClick={addOne}>+</button>
        </span>
      </article>

      <article className={`About_beer modal ${isOpen ? "hide" : ""}`}>
        <button onClick={readMore} className="Close">
          X
        </button>
        <div className="columnLeft">
          <h2 className="NameModal">{props.name}</h2>
          <img className="LabelModal" src={`../images/${props.label}`} alt={props.name} />
          <h3 className="CategoryModal">{props.category}</h3>
          <p className="AlcModal">{props.alc}%</p>
        </div>
        {/* <p className="AromaModal">
          <b>Aroma</b> <br /> {props.description.aroma}
        </p>
        <p className="AppearanceModal">
          <b>Apperance</b> <br /> {props.description.appearance}
        </p> */}
        <div className="columnRight">
          <p className="HeaderModal">Overall Impression</p>
          <p className="MouthfeelModal">{props.description.overallImpression}</p>
          <p className="HeaderModal">Aroma</p>
          <p className="FlavorModal">{props.description.aroma}</p>
        </div>
      </article>
      <div className="Overlay"></div>
    </>
  );
}
