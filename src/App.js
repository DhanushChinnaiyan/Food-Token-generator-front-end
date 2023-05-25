import { Route, Switch, useHistory } from "react-router-dom";
import "./App.css";
import Customerforgot from "./Components/Customer_Components/Forgot/ForgotPassword";
import Signin from "./Components/Customer_Components/SignIn/Signin";
import Signup from "./Components/Customer_Components/Signup/Signup";
import Ownerforgot from "./Components/Owner_components/Forgot/ForgotPassword";
import OwnerSignin from "./Components/Owner_components/SignIn/Signin";
import Nopage from "./Components/NOPAGE/nopage";
import Body from "./Components/Customer_Components/BODY/Body";
import OwnerBody from "./Components/Owner_components/BODY/Body";
import MainDash from "./Components/Main Dash/MainDash";
import { useEffect } from "react";
import { decodeToken } from "react-jwt";


function App() {
  const history = useHistory()
  useEffect(() => {

    // owner verification

    const ownerToken = localStorage.getItem("ownertoken")

    if(ownerToken){
        const owner = decodeToken(ownerToken)

        // iThis is the process after the owner token is verified
       
     
        if(owner) { 
            localStorage.setItem("OwnerName",owner.ownerName)
            history.replace("/ownerdash") 
        }else{
         localStorage.removeItem("ownertoken")
        }
    }



    // customer verification
    const customerToken = localStorage.getItem("customertoken")

    if(customerToken){
        const customer = decodeToken(customerToken);

    // This is the process after the customer token is verified
    if (!customer) {
        localStorage.removeItem("customertoken")
   
    } else {
        history.replace("/customerdash")
    }
}

}, [])
 

  return (
    <div className="App">
      {/* customer */}
      <Switch>
        <Route exact path="/">
          <MainDash />
        </Route>
        <Route path="/customersignup">
          <Signup />
        </Route>

        <Route path="/customersignin">
          <Signin />
        </Route>

        <Route path="/customerforgotpassword">
          <Customerforgot />
        </Route>

        <Route path="/customerdash">
          <Body />
        </Route>

        {/* OWNER */}

        <Route path="/ownersignin">
          <OwnerSignin />
        </Route>

        <Route path="/ownerforgotpassword">
          <Ownerforgot />
        </Route>
        <Route path="/ownerdash">
          <OwnerBody
          />
        </Route>

        <Route path="**">
          <Nopage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
