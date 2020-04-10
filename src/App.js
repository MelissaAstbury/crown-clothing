import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.scss";
import Homepage from "./pages/Homepage/homepage.component";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Homepage} />
      </Switch>
    </>
  );
}

export default App;
