import React from "react";
import { BrowserRouter as Router , Routes , Route } from "react-router-dom";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import UpdateAccount from "./Pages/UpdateAccount";
import CreateAccount from "./Pages/CreateAccount";
import Account from "./Pages/Account";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" Component={Register}/>
          <Route path="/login" Component={Login}/>
          <Route path="/create-account" Component={CreateAccount}/>
          <Route path="/account" Component={Account}/>
          <Route path="/update_account" Component={UpdateAccount}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
