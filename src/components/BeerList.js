import Beer from "./Beers";

export default function BeerList(props) {
  //console.log(props);

  const beers = props.beers.map((beer) => <Beer key={beer.name} {...beer} addToBasket={props.addToBasket} setBasket={props.setBasket} basket={props.basket} />);
  //console.log(beers);
  //return <section className="BeerList">{beers}</section>;
  return (
    <fieldset className={`Beers_id ${props.setPayment ? "hide" : ""}`}>
      <legend>
        <h1>Beers</h1>
      </legend>
      <section className="BeerList">{beers}</section>
    </fieldset>
  );
}
