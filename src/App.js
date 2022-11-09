import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";
import {
  Navbar,
  Home,
  Contact,
  About,
  Services,
  Blog,
  BlogDetails,
  Footer,
} from "./components";

import "./App.css";
import PrivateRoute from "./utils/private-route";
import Login from "./components/Login";
import storage from "./utils/localStorage";
import { login } from "./app/loginSlice";

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.login.user);
  console.log(user, "ueser");
  const loggedUser = storage.loadUser();

  useEffect(() => {
    if (loggedUser) {
      dispatch(login(loggedUser));
    }
  }, []);
  return (
    <div className="App">
      {user !== null && <Navbar />}
      <Switch>
        <Route exact path="/login" component={Login} />
        <PrivateRoute exact path="/home" component={Home} />
        <PrivateRoute exact path="/about" component={About} />
        <PrivateRoute exact path="/services" component={Services} />
        <PrivateRoute exact path="/blog" component={Blog} />
        <PrivateRoute exact path="/blog/:id" component={BlogDetails} />
        <PrivateRoute exact path="/contact" component={Contact} />
        <Redirect to="/home" />
      </Switch>
      {user !== null && <Footer />}
    </div>
  );
}

export default App;
