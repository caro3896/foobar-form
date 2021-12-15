// Sophie
import SelectedBeer from "./SelectedBeers";

export default function CustomerBasket(props) {
  const initialValue = 0;
  let sum = props.basket.reduce(function (previousValue, currentValue) {
    return previousValue + currentValue.price;
  }, initialValue);

  const selectedBeers = props.basket.map((beer) => <SelectedBeer {...beer} />);

  return (
    <div id="CustomerBasket">
      {selectedBeers}
      <hr />
      <span>
        <p>{props.basket.length} beers in total</p>
        <p>{sum} DKK</p>
      </span>
    </div>
  );
}
