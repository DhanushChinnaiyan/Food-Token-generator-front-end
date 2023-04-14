import { Route, Switch } from "react-router-dom";
import "./App.css";
import Customerforgot from "./Components/Customer_Components/Forgot/ForgotPassword";
import Signin from "./Components/Customer_Components/SignIn/Signin";
import Signup from "./Components/Customer_Components/Signup/Signup";
import Ownerforgot from "./Components/Owner_components/Forgot/ForgotPassword";
import OwnerSignin from "./Components/Owner_components/SignIn/Signin";
import { useEffect, useState } from "react";
import Nopage from "./Components/NOPAGE/nopage";
import Body from "./Components/Customer_Components/BODY/Body";
import OwnerBody from "./Components/Owner_components/BODY/Body";
import MainDash from "./Components/Main Dash/MainDash";
import {BrowserRouter as Router} from 'react-router-dom'


function App() {
const [customersData,setCustomerData] = useState([]);
const [ownerFoodsDetails,setOwnerFoodsDetails] = useState([]);

useEffect(()=>{


  const getfoodList = async () => {

    try {

      const response = await fetch("https://food-token-generator-backend.vercel.app/customer/food", {
        method: "GET",
        headers: {
          "x-auth-customertoken": localStorage.getItem("ownertoken")

        }
      })

      const data = await response.json()
      setOwnerFoodsDetails(data)


    } catch (error) {
      console.log("get food error", error)
    }
  }
getfoodList()

},[])

  return (
    <div className="App">
      {/* customer */}
      <Switch>

        <Route exact path='/'>
          <MainDash/>
        </Route>
        <Route path="/customersignup">
          <Signup/>
        </Route>

        <Route path="/customersignin">
          <Signin />
        </Route>

        <Route path="/customerforgotpassword">
          <Customerforgot />
        </Route>

        <Route path='/customerdash'>
          <Body/>
        </Route>
        

      {/* OWNER */}
   
        <Route path="/ownersignin">
          <OwnerSignin />
        </Route>

        <Route path="/ownerforgotpassword">
          <Ownerforgot />
        </Route>
        <Route path='/ownerdash'>
          <OwnerBody
          ownerFoodsDetails={ownerFoodsDetails}
          setOwnerFoodsDetails={setOwnerFoodsDetails}
          />
     
          
        </Route>

        <Route path="**">
          <Nopage/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
