import React, { Component } from "react";

class Form extends Component {
  handleSubmit = e => {
    e.preventDefault();
    fetch("http://localhost:3000/contacts", {
      method: "POST",
      body: JSON.stringify(this.props.data),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(response => console.log("Success:", response))
      .catch(error => console.error("Error:", error));
  };

  handleNameChange = e => {
    if (e.target.value.length > 1) {
      e.target.classList.add("is-valid");
      this.props.setName(e.target);
      this.checkIfInvalid(e.target);
    } else {
      this.checkIfValid(e.target);
    }
  };

  handlePhoneChange = e => {
    switch (e.target.id) {
      case "phone_type":
        console.log("type");
        break;
      case "phone_country_code":
        console.log("cc");
        break;
      case "phone_number":
        if (e.target.value.match(/^\d{10}/)) {
          e.target.classList.add("is-valid");
          this.props.setPhone(e.target);
          this.checkIfInvalid(e.target);
        } else {
          this.checkIfValid(e.target);
        }
        break;
      default:
        console.log("try again");
    }
    // if 2 phones fields are valid >> whole phone entry valid, done!
    // what's the best method to check & validate phone entries, incl. country code?
  };

  checkIfInvalid = element => {
    if (this.props.validation[element.name] === false) {
      this.props.setValidation(element, true);
      this.toggleValidationClass(element);
    }
  };

  checkIfValid = element => {
    if (this.props.validation[element.name] === true) {
      this.props.setValidation(element, false);
      this.toggleValidationClass(element);
    }
  };

  toggleValidationClass = element => {
    if (element.classList.contains("is-invalid")) {
      element.classList.add("is-valid");
      element.classList.remove("is-invalid"); // make it a toggle?
    } else {
      element.classList.add("is-invalid");
      element.classList.remove("is-valid");
    }
  };

  render() {
    return (
      <form className="" onSubmit={this.handleSubmit} noValidate={true}>
        {/* noValidate disables the browser default feedback tooltips */}
        <div className="form-group">
          <label htmlFor="first_name">First name</label>
          <input
            type="text"
            id="first_name"
            name="first_name"
            className="form-control"
            placeholder="Type First Name"
            onChange={this.handleNameChange}
            required
            autoFocus
          />
          <div className="valid-feedback">Looks good!</div>
          <div className="invalid-feedback">Please provide a first name.</div>
        </div>
        <div className="form-group">
          <label htmlFor="last_name">Last name</label>
          <input
            type="text"
            id="last_name"
            name="last_name"
            className="form-control"
            placeholder="Type Last Name"
            onChange={this.handleNameChange}
          />
          <div className="valid-feedback">Looks good!</div>
          <div className="invalid-feedback">Please provide a last name.</div>
        </div>
        <fieldset>
          <legend>Phones</legend>
          <div className="input-group mb-3" onChange={this.handlePhoneChange}>
            <div className="input-group-prepend">
              <select id="phone_type" name="type" className="custom-select">
                <option defaultValue value="home">
                  Home
                </option>
                <option value="mobile">Mobile</option>
                <option value="work">Work</option>
                <option value="main">Main</option>
                <option value="other">Other</option>
              </select>
            </div>
            <input
              type="tel"
              id="phone_country_code"
              name="country_code"
              className="form-control"
              pattern="[+][0-9]{2}"
              placeholder="Country Code"
            />
            <input
              type="tel"
              id="phone_number"
              name="number"
              className="form-control"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              placeholder="Phone Number"
            />
          </div>
        </fieldset>
        <fieldset>
          <legend>Emails</legend>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <select className="custom-select" id="email_type" required>
                <option defaultValue>Type...</option>
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
        <button type="submit" className="btn btn-primary">
          Add Contact
        </button>
      </form>
    );
  }
}

export default Form;
