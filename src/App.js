import "./App.scss";

import Order from "./components/Order";
import BeerList from "./components/BeerList";
import Basket from "./components/Basket";
import Form from "./components/Form";

import { useState } from "react/cjs/react.development";
import { useEffect } from "react";

function App() {
  const [availableBeers, setAvailableBeers] = useState([]);
  const [basket, setBasket] = useState([]);

  const [payment, setPayment] = useState(false);

  useEffect(() => {
    Promise.all([fetch("https://the-three-must-get-beers.herokuapp.com/").then((res) => res.json()), fetch("https://the-three-must-get-beers.herokuapp.com/beertypes").then((res) => res.json())]).then((data) => {
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
    // Problem = opdaterer kun ved + af øl.
    setBasket(function (oldBasket) {
      const nextState = oldBasket.concat(beer);
      return nextState;
    });
  }

  function goToPayment() {
    setPayment((oldState) => !oldState);
  }

  return (
    <div className="App">
      <Order setPayment={payment} />
      <BeerList setBasket={setBasket} addToBasket={addToBasket} basket={basket} beers={availableBeers} setPayment={payment} />
      <Basket basket={basket} setPayment={goToPayment} />
      <Form basket={basket} setPayment={payment} />
    </div>
  );
}

export default App;
