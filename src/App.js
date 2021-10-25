import React from "react";
import Home from "./Components/Home/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Contact from "./Components/Contact/Contact";
import Registration from "./Components/Registration/Registration";
import Login from "./Components/Login/Login";
import About from "./Components/About/About";
import Navbar from "./Components/Home/Header/Navbar/Navbar";
const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/singin" component={Login} />
        <Route exact path="/signup" component={Registration} />
      </Switch>
    </Router>
  );
};

export default App;
