import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Integration from "./components/Integration";
import Reporting from "./components/Reporting";
import Sidebar from "./components/Sidebar";
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
          <ToastContainer
          autoClose={2000}
          position="bottom-right"
          className="toast-container"
          toastClassName="dark-toast"
        />
        </div>
      </div>
    );
  }
}

export default App;
