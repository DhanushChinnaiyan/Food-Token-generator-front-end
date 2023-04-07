import { Route, Switch } from "react-router-dom";
import "./App.css";
import Customerforgot from "./Components/Customer_Components/Forgot/ForgotPassword";
import Signin from "./Components/Customer_Components/SignIn/Signin";
import Signup from "./Components/Customer_Components/Signup/Signup";
import Ownerforgot from "./Components/Owner_components/Forgot/ForgotPassword";
import OwnerSignin from "./Components/Owner_components/SignIn/Signin";

function App() {
  return (
    <div className="App">
      {/* customer */}
      <Switch>
        <Route path="/customersignup">
          <Signup />
        </Route>

        <Route path="/customersignin">
          <Signin />
        </Route>

        <Route path="/forgotpassword">
          <Customerforgot />
        </Route>

   
      </Switch>

      {/* OWNER */}
      <Switch>
        <Route path="/ownersign">
          <OwnerSignin />
        </Route>

        <Route path="/ownerforgotpassword">
          <Ownerforgot />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
