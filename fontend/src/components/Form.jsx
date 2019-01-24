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
            placeholder="Type First Name"
            // ref={this.inputFirstName}
          />
        </div>
        <div className="form-group">
          <label for="last_name">Last name</label>
          <input
            type="text"
            className="form-control"
            id="first_name"
            placeholder="Type Last Name"
            // ref={this.inputFirstName}
          />
        </div>
        <fieldset>
          <legend>Phones</legend>
          <div className="input-group mb-3">
            <div class="input-group-prepend">
              <select class="custom-select" id="phone_type" required>
                <option selected>Type...</option>
                <option value="mobile">Mobile</option>
                <option value="home">Home</option>
                <option value="work">Work</option>
              </select>
            </div>
            <input
              type="tel"
              className="form-control"
              id="phone_country_code"
              name="phone"
              pattern="[+][0-9]{2}"
              placeholder="Country Code"
              // ref={this.inputFirstName}
            />
            <input
              type="tel"
              className="form-control"
              id="phone_number"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              placeholder="Phone Number"
              // ref={this.inputFirstName}
            />
          </div>
        </fieldset>
        <fieldset>
          <legend>Emails</legend>
          <div className="input-group mb-3">
            <div class="input-group-prepend">
              <select class="custom-select" id="email_type" required>
                <option selected>Type...</option>
                <option value="home">Home</option>
                <option value="work">Work</option>
                <option value="other">Other</option>
              </select>
            </div>
            <input
              type="email"
              className="form-control"
              id="email_address"
              pattern=".+@."
              size="30"
              placeholder="example@example.com"
              // ref={this.inputFirstName}
            />
          </div>
        </fieldset>
      </form>
    );
  }
}

export default Form;
