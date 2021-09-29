export const initialState={
  basket : [],
  user:null,
}
export const getBasketTotal =(basket)=>
basket?.reduce((amount,item)=> item.price +amount,0)
//treduce function increminate all the prices inside the basket and returns that number(reduce takes a function amount starts at 0 and adds up the pricing of the item) iterate throught the items in the basket

function reducer(state,action){
  console.log(action)
  switch(action.type){
    case 'SET_USER':
      return{
        ...state,
        user:action.user
      }
    case 'ADD_TO_BASKET':
    //logic for adding item to basket
      return {
        ...state, //return evrything we have in the object
        basket:[...state.basket,action.item] //return whatever we have in the current basket + the item that we dispatched (basically we update the basket state)
      }
    break;
    case 'REMOVE_FROM_BASKET':
    //here we cloned the basket
      let newBasket=[...state.basket];//a new basket updated
      const index=state.basket.findIndex((basketItem)=>basketItem.id === action.id ); //go find an index if it returns (-1) it means it didn't find an index //check all the basket items if the basket item id is = the basketItem id that passed by the action return an index 
      
      if (index >=0){
        //item exists in the basket,remove it
        newBasket.splice(index,1) //go to the index found in the new basket and splice it by 1

      }
      else {
        console.warn(
          `can't remove product (id: ${action.id}) cz it's no found`
        )
      }
    return {...state,basket:newBasket} //return everything in the state + set the basket to the newBasket
    break;
    default:
      return state; //state=default
  }
}
export default reducer;