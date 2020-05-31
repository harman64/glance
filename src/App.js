import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Integration from "./components/Integration/Integration";
import Reporting from "./components/Reporting/Reporting";
import Sidebar from "./components/Sidebar/Sidebar";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Header">Hi Glance User</div>
        <div className="main-window">
          <Sidebar />
          <div className="contentfull-display">
            <Switch>
              <Route path="/report" component={Reporting}></Route>
              <Route exact path="/" component={Integration}></Route>
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
