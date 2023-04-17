// Sophie
import "./App.scss";

import Order from "./components/Order";
import BeerList from "./components/BeerList";
import Basket from "./components/Basket";
import Form from "./components/Form";
import Thanks from "./components/Thanks";

//import { useState } from "react/cjs/react.development";
import { useEffect, useState } from "react";

function App() {
  const [availableBeers, setAvailableBeers] = useState([]);
  const [basket, setBasket] = useState([]);

  const [payment, setPayment] = useState(false);
  const [buttonRemoved, setButtonRemoved] = useState(false);
  const [thanks, setThanks] = useState(false);

  useEffect(() => {
    Promise.all([fetch("https://ethereal-green-hyacinth.glitch.me").then((res) => res.json()), fetch("https://ethereal-green-hyacinth.glitch.me/beertypes").then((res) => res.json())]).then((data) => {
      const taps = data[0].taps;
      // [{},{},]

      const simpleTaps = taps.map((tap) => tap.beer);
      // Med map: ["Fairy Tale Ale", "Hollaback Lager",] osv.

      const types = data[1];
      // Alle vores 10 øl med alt data

      const availableBeers = types.filter((type) => {
        //hvis type findes i taps, return true
        if (simpleTaps.includes(type.name)) {
          return true;
        }
        return false;
      });
      setAvailableBeers(availableBeers);
    });
  }, []);

  function addToBasket(beer) {
    setBasket(function (oldBasket) {
      const nextState = oldBasket.concat(beer);
      return nextState;
    });
  }

  function goToPayment() {
    setPayment((oldState) => !oldState);
    setThanks();
  }

  function goToThanks() {
    setThanks((oldState) => !oldState);
  }

  return (
    <div className="App">
      <Order setPayment={payment} />
      <BeerList setBasket={setBasket} addToBasket={addToBasket} basket={basket} beers={availableBeers} setPayment={payment} />
      <Basket basket={basket} setPayment={goToPayment} setThanks={thanks} buttonRemoved={buttonRemoved} setButtonRemoved={setButtonRemoved} />
      <Form basket={basket} setPayment={payment} goToPayment={goToPayment} setThanks={goToThanks} buttonRemoved={buttonRemoved} setButtonRemoved={setButtonRemoved} />
      <Thanks setThanks={thanks} goToPayment={goToPayment} buttonRemoved={buttonRemoved} setButtonRemoved={setButtonRemoved} setBasket={setBasket} />
    </div>
  );
}

export default App;
