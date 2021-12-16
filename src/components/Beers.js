// Sophie, Helena
import { useState } from "react";

export default function Beer(props) {
  const [amount, setAmount] = useState(0);
  const [isOpen, setIsOpen] = useState(true);

  function addOne() {
    setAmount((prevState) => prevState + 1);
    props.addToBasket({
      name: props.name,
      price: 50,
    });
  }

  function removeOne() {
    console.log(props);
    console.log(props.basket);
    setAmount((prevState) => {
      if (prevState > 0) {
        console.log(props.setBasket);
        return prevState - 1;
      }
      return 0;
    });
    // Tager den gamle basket, og giver den en ny state
    props.setBasket((prevState) => {
      // Opretter et tomt array - det er det der skal returneres
      const nextState = [];
      // Opretter en boolean der skal holde øje med om den aktuelle øl der klikkes minus på er i kurven
      let found = false;
      prevState.forEach((beer) => {
        if (props.name !== beer.name || found) {
          nextState.push(beer);
        } else {
          found = true;
        }
      });
      return nextState;
    });
  }

  function readMore() {
    setIsOpen((oldState) => !oldState);
  }

  return (
    <>
      <article className="Beer">
        <h2>{props.name}</h2>
        <img src={`../../images/${props.label}`} alt={props.name} />
        <p className="Alc">{props.alc}% alc</p>
        <p className="Type">{props.category}</p>
        <h3 className="Price">50 DKK</h3>
        <button onClick={readMore} className="Read_more">
          Read more
        </button>
        <span className="addOrRemove">
          <button className="add" onClick={removeOne}>
            -
          </button>
          <p>{amount}</p>
          <button className="add" onClick={addOne}>
            +
          </button>
        </span>
      </article>

      <div className={`Overlay ${isOpen ? "" : "active"}`}></div>
      <article className={`About_beer ${isOpen ? "hide" : "active"}`}>
        <div className="closeBtn">
          <button onClick={readMore} className="Close">
            X
          </button>
        </div>
        <div className="modalContent">
          <div className="columnLeft">
            <h2 className="NameModal">{props.name}</h2>
            <img className="LabelModal" src={`../../images/${props.label}`} alt={props.name} />
            <h3 className="CategoryModal">{props.category}</h3>
            <p className="AlcModal">{props.alc}%</p>
          </div>
          <div className="columnRight">
            <p className="HeaderModal">Overall Impression</p>
            <p className="MouthfeelModal">{props.description.overallImpression}</p>
            <p className="HeaderModal">Aroma</p>
            <p className="FlavorModal">{props.description.aroma}</p>
            <span className="addOrRemove">
              <button className="add" onClick={removeOne}>
                -
              </button>
              <p>{amount}</p>
              <button className="add" onClick={addOne}>
                +
              </button>
            </span>
          </div>
        </div>
      </article>
    </>
  );
}
