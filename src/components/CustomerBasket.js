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
      <p>{props.basket.length} beers in total</p>
      <p>${sum}</p>
    </div>
  );
}

/* <article className="In_basket">
        <img src="" alt="" />
        <p className="Order_name"></p>
        <p className="Order_price"></p>
        <button>+</button>0<button>-</button>
      </article> */
