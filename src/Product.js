import React from 'react'
import "./Product.css"
import { useStateValue } from './StateProvider'

function Product({id,title,image,price,rating}) {
   const[{basket},dispatch]=useStateValue();//here we only need the action of "dispatch" cz we despatch from the produts that we have


  const addToBasket=()=>{
      //dispatch an action and we listen to the action 
      dispatch({
        type: "ADD_TO_BASKET",
        item:{
          id:id,//this line can be replaced by id,
          title:title,
          image:image,
          price:price,
          rating:rating,
        },
      })
    }
  return (
    
    <div className="product">
      <div className="product-info">
      <p className="product-title">{title}</p>
      <p className="product-price">
        <small>$</small>
        <strong>{price}</strong></p>
      <div className="product-rating">{
        Array(rating)
        .fill()
        .map((_)=> (
          <p>&#11088;</p>
        ))
      }
      </div></div>
      <img  src={image}/>
      <button onClick={addToBasket}>Add to bascket</button>
      

      
    </div>
  )
}

export default Product
