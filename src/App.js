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
    setBasket(function (oldBasket) {
      const nextState = oldBasket.concat(beer);
      return nextState;
    });
  }

  return (
    <div className="App">
      <Order />
      <BeerList setBasket={addToBasket} basket={basket} beers={availableBeers} />
      <Basket basket={basket} />
      <Form basket={basket} />
    </div>
  );
}

export default App;
