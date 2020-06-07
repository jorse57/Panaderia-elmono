import React from "react";

import Run from "./components/Run";
import Login from "./components/Login";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Run} />
        <Route exact path="/Login" component={Login} />
        }/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
