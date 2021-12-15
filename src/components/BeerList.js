// Sophie
import Beer from "./Beers";

export default function BeerList(props) {
  const beers = props.beers.map((beer) => <Beer key={beer.name} {...beer} addToBasket={props.addToBasket} setBasket={props.setBasket} basket={props.basket} />);

  return (
    <fieldset className={`Beers_id ${props.setPayment ? "hide" : ""}`}>
      <legend>
        <h1>Beers</h1>
      </legend>
      <section className="BeerList">{beers}</section>
    </fieldset>
  );
}
