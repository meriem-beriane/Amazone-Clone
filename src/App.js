
import React,{useEffect} from "react"
import Header from "./Header"
import Checkout from "./Checkout"
import Login from "./Login"
import Home from "./Home"
import './App.css';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
import {useStateValue} from "./StateProvider"
import {auth} from "./Firebase"
 



function App() {
  const [{user},dispatch]=useStateValue()
  //useEffect is a function that runs on a given condition (listner)
  useEffect(()=>{
      //listner that listen every time the user logs in
      const unsubscribe=auth.onAuthStateChanged((authUser)=>{
        if(authUser){
          //the user is logged in
          dispatch({
            type:"SET_USER",
            user: authUser //set the user to authUser (if it was present) push it to the data layer
          })
        }else{
          //the user is logged out
          dispatch({
            type:"SET_USER",
            user: null
          })
        }
      })
      return ()=>{
        //use here for cleanups....(exp: if we have a timer we'll clear it here)
        unsubscribe() //if the app rerendered it will set it with a new listner

      }

  },[]) //[] means it will only run once
  // if e replace [] withe [basket] it will run whenever the basket is changed
  console.log("THE USER IIIIIIS",user)
  return (
    <Router>
    <div className="app">
      <Switch>
        
        <Route path="/login"><Login/></Route>
        <Route path="/checkout"><Header/><Checkout/></Route>
        <Route path="/">
        <Header/>
        <Home />
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
