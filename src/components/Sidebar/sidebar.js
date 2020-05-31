import React, { Component } from "react";
import {Link} from "react-router-dom";

class Sidebar extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="sidebar">
        <ul>
          <li>
            <Link to="/">Integration</Link>
          </li>
          <li>
            <Link to="/analytics">Analytics</Link>
          </li>
          <li>
            <Link to="/report">Reports</Link>
          </li>
          <li>
            <Link to="/insights">Insights</Link>
          </li>
          <li>
            <Link to="/contact-us">Contact Us</Link>
          </li>
        </ul>
      </div>
    );
  }
}


export default Sidebar;