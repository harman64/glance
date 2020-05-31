import React, { Component } from "react";
import ReactTable from "react-table";
import axios from "axios";

import "react-table/react-table.css";
import "./style.css";

class Reporting extends Component {
  constructor() {
    super();
    this.state = {
      query: "",
      data: [],
    };
  }

  componentDidMount() {
    axios.get("http://localhost:3001/report").then((res) => {
      this.setState({
        data: res.data,
      });
    });
  }

  handleChange = (event) => {
    const query = event.target.value;
    this.setState({
      query,
    });
  };

  getData = () => {
    return this.state.data.filter(
      (dataElem) => dataElem.name.indexOf(this.state.query) !== -1
    );
  };

  render() {
    const columns = [
      {
        Header: "No",
        accessor: "name",
        Cell: (row) => {
          return <div>{row.index + 1}</div>;
        },
      },
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Date",
        accessor: "date",
      },
      {
        Header: "Traffic",
        accessor: "traffic",
      },
      {
        Header: "Trend", // Custom header components!
        accessor: "trend",
      },
    ];

    return (
      <div>
        <div className="searchDiv">
          <label htmlFor="searchBox">Search: </label>
          <input
            type="text"
            id="searchBox"
            className="searchBox"
            placeholder="Search Name"
            value={this.state.query}
            onChange={this.handleChange}
          />
        </div>
        <ReactTable data={this.getData()} columns={columns} />
      </div>
    );
  }
}

export default Reporting;
