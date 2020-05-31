import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="App">
        <div>Hi Glance User</div>
        <div className="main-window">
          <div>
            <Switch>
              <Route path="/">Integration</Route>
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
