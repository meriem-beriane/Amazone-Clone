import React from 'react'
import{useStateValue} from "./StateProvider"
import "./Checkout.css"
import CheckoutProduct from "./CheckoutProduct"
import Subtotal from "./Subtotal"
import CurrencyFormat from "react-currency-format"

function Checkout() {
  const[{basket}]=useStateValue(); //here we need the basket to show its content
  return (
    <div className="checkout">
      <div className="checkout-left">
      <img className="checkout-ad" src="https://pbs.twimg.com/media/Ez6Z-dCVcAUoHAr.jpg"/>
      {basket?.length === 0 ?(
        <div>
          <h2>Your Shopping Basket is Empty &#128533; </h2>
          <p>Life is soo boring if you don't have an Online Order to look forward to...So come on spend a little...</p></div>
      ):(
        <div>
          <h2>Your Shopping Basket </h2>
          {
            basket?.map(item=>(
              <CheckoutProduct 
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
              /> //map throught the basket and for every item get me this 
            ))
          }
          </div>
      )}
      
      </div>
      {basket.length> 0 &&(<div className="checkout-right">
        <Subtotal />
      </div>)}
      

    </div>
  );
}

export default Checkout
