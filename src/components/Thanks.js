export default function thankYou(props){
    return(
        <fieldset className={`Thanks_id ${props.setThanks? "" : "hide"}`}>
        <legend>
          <h1>Thank you for your order</h1>
          </legend>
          <p>Thank you for ordering at Foobar.</p>
          <p>Your order is currently being prepared and will be available shortly.</p>  
      </fieldset>
    )
  
}
