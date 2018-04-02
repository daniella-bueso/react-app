import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Products from "./pages/Makeup";
import Result from "./pages/Results";
import NoMatch from "./pages/NoMatch";

const App = () => 
  <Router>
    <div>
      <Products/>
      <Switch>
        <Router exact path="/" component={Products} /> 
        <Route exact path="/makeup/:id" component={Result} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>;

export default App;
