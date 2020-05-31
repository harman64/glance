import axios from "axios";
import React, { Component } from "react";
import Button from "react-bootstrap/Button";

import "./Integration.css";

class Integration extends Component {
  constructor() {
    super();
    this.state = {
      selectedFile: null,
    };
  }

  onChangeHandler = (event) => {
    this.setState({
      selectedFile: event.target.files[0],
      loaded: 0,
    });
  };

  onClickHandler = () => {
    const data = new FormData();
    data.append("file", this.state.selectedFile);
    axios.post("http://localhost:3001/upload", data, {}).then((res) => {
      console.log(res.statusText);
    });
  };

  render() {
    return (
      <div class="row">
        <div class="col-md-6">
          <form method="post" action="#" id="#">
            <div class="form-group files">
              <input
                type="file"
                class="form-control"
                multiple={false}
                onChange={this.onChangeHandler}
              />
            </div>
            <Button
              type="button"
              class="btn"
              onClick={this.onClickHandler}
            >
              Upload
            </Button>
          </form>
        </div>
      </div>
    );
  }
}

export default Integration;
