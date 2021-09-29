import React from 'react'
import "./Header.css"
import {Link} from "react-router-dom"
import SearchIcon from "@material-ui/icons/Search"
import ShoppingBascketIcon from "@material-ui/icons/ShoppingBasket"
import {useStateValue} from "./StateProvider"
import {auth} from "./Firebase"

function Header() {
  const [{basket,user}]=useStateValue();
  //here we only need the basket state cuz we need to get the lenght of it and show it the header
  //we also need the user
  console.log(basket);
  const login =()=>{
    if(user){
      auth.signOut()
    }
  }

  return (
    <nav className="header">
      <Link to="/">
      <img className="header-logo" src="https://pnglux.com/wp-content/uploads/2021/03/Amazon-logo-PNG-Transparent-HD.png" /></Link>
      <div className="header-search">
      <input type="text" className="header-inputSearch"/>
      <SearchIcon className="header-searchIcon" />
      </div>

<div className="header-nav">
    <Link to={!user&&"/login"} className="header-link">
      {/* if there is no user logged in then we gonna give him the link to do it */}
    <div onClick={login} className="header-option">
      <span className="header-option1">Hello {user?.email}</span>
      <span className="header-option2">{user? 'Sign Out' : 'Sign In'}</span>
    </div>
    
    </Link>
    <Link to="/" className="header-link">
    <div className="header-option">
      <span className="header-option1">returns</span>
      <span className="header-option2">orders</span>
    </div>
    
    </Link>
    <Link to="/" className="header-link">
    <div className="header-option">
      <span className="header-option1">your </span>
      <span className="header-option2">prime </span>
    </div>
    
    </Link>
    <Link to="/checkout" className=" header-link">
      <div className="header-bascket">
      <ShoppingBascketIcon/>
         <span className="header-option2 bascket-count">{basket?.length} </span> {/* ? serves as "await" */}
        

      </div>
    </Link>


</div>




    </nav>
  )
}

export default Header
