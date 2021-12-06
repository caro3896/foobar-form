export default function SelectedBeer(props) {
  console.log(props);

  // BRUG USESTATE/USECONTEXT HER, TIL AT OPDATERE KURV MED ANTAL

  return (
    <article className="In_basket">
      <p className="Order_name">{props.name}</p>
      <p className="Order_price">50 DKK</p>
      {/*       <button>+</button>0<button>-</button> */}
    </article>
  );
}
