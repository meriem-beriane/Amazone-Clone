import React,{useState} from 'react'
import "./Login.css"
import {Link,useHistory} from "react-router-dom";
import {auth} from "./Firebase"

function Login() {
  const history= useHistory() //for redirection 
  //track the email and the password from the inputs
  const [email,setEmail]=useState('') 
  const [password,setPassword]=useState('')



  const login = (event) => {
    event.preventDefault(); //stops refreshing the page

    auth.signInWithEmailAndPassword(email,password).then((auth)=>{
      //if nothing went wrong then login in and redirect to homepage
      history.push("/")
    }).catch((e)=>alert(e.messages)) //a built in function in firebase
    
  }
  
  const register = (event) => {
    event.preventDefault();
    auth.createUserWithEmailAndPassword(email,password).then((auth)=>{
      //if nothing went wrong then create a user and logged in then redirect to homepage
      history.push("/")
    }).catch((e)=>alert(e.messages)) //a built in function in firebase
  }
  
  return (
    <div className="login">
      <Link to="/">
        <img className="login-logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG21.png" />
      </Link>
      <div className="login-container">
        <h1>Sign in</h1>
        <form>
          <h5>Email</h5>
          <input value={email} onChange={event=>setEmail(event.target.value)} type="email" />
          <h5>Password</h5>
          <input value={password} onChange={event=>setPassword(event.target.value)}  type="password" />
          <button onClick={login} type="submit" className="login-signInButton">Sign In</button>
        </form>
        <p >By signing-in you agree to AnaZone's Consitions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Intrest-Based Ads Notice.l</p>
        <button onClick={register} className="login-registerButton">Create your Amazon Account</button>
      </div>
      
    </div>
  )
}

export default Login
