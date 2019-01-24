import React, { Component } from "react";

class Form extends Component {
  render() {
    return (
      <form className="w-50">
        <div className="form-group">
          <label for="first_name">First name</label>
          <input
            type="text"
            className="form-control"
            id="first_name"
            placeholder="Type First name"
            // ref={this.inputFirstName}
          />
        </div>
        <div className="form-group">
          <label for="last_name">Last name</label>
          <input
            type="text"
            className="form-control"
            id="first_name"
            placeholder="Type Last name"
            // ref={this.inputFirstName}
          />
        </div>
      </form>
    );
  }
}

export default Form;
