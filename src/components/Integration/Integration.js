import axios from "axios";
import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import { withRouter } from "react-router-dom";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "./style.css";

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
    if (this.state.selectedFile === null) {
      toast("Please Select File first", {
        className: "failiure-toasty",
      });
      return;
    }
    const data = new FormData();
    data.append("file", this.state.selectedFile);
    axios.post("http://localhost:3001/upload", data, {}).then((res) => {
      toast("Uploaded Successfully!", {
        className: "success-toasty",
      });
      this.setState({
        selectedFile: null,
      },() => {
        this.props.history.push("/report");
      });
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
            <Button type="button" class="btn" onClick={this.onClickHandler}>
              Upload
            </Button>
          </form>
        </div>
       
      </div>
    );
  }
}

export default withRouter(Integration);
