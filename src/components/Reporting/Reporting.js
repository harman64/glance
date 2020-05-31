import React, { Component } from "react";
import axios from "axios";

class Reporting extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    axios.get("http://localhost:3001/report").then((res) => {
      console.log(res.statusText);
      debugger;
    });
  }

  render() {
    return <div>Hi There!</div>;
  }
}

export default Reporting;
