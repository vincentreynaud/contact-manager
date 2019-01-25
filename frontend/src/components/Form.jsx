import React, { Component } from "react";

class Form extends Component {
  inputFirstName = React.createRef();
  inputLastName = React.createRef();
  inputPhoneType = React.createRef();
  inputPhoneCountryCode = React.createRef();
  inputPhoneNumber = React.createRef();

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

  handleNameChange = element => {
    if (element.current.value.length > 1) {
      element.current.classList.add("is-valid");
      this.props.setName(element);
      this.checkIfInvalid(element);
    } else {
      this.checkIfValid(element);
    }
  };

  checkIfInvalid = element => {
    const field = element.current.name;

    if (this.props.validation[field] === false) {
      this.props.setValidation(element, true);
      this.toggleValidationClass(element);
    }
  };

  checkIfValid = element => {
    const field = element.current.name;

    if (this.props.validation[field] === true) {
      this.props.setValidation(element, false);
      this.toggleValidationClass(element);
    }
  };

  toggleValidationClass = element => {
    if (element.current.classList.contains("is-invalid")) {
      element.current.classList.add("is-valid");
      element.current.classList.remove("is-invalid"); // make it a toggle?
    } else {
      element.current.classList.add("is-invalid");
      element.current.classList.remove("is-valid");
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
            ref={this.inputFirstName}
            onChange={() => {
              this.handleNameChange(this.inputFirstName);
            }}
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
            ref={this.inputLastName}
            onChange={() => {
              this.handleNameChange(this.inputLastName);
            }}
          />
          <div className="valid-feedback">Looks good!</div>
          <div className="invalid-feedback">Please provide a last name.</div>
        </div>
        <fieldset>
          <legend>Phones</legend>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <select
                id="phone_type"
                name="type"
                className="custom-select"
                ref={this.inputPhoneType}
                onChange={() => {
                  this.handlePhoneChange(this.inputPhoneType); // only need to update state for select elements
                }}
                required
              >
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
              ref={this.inputPhoneCountryCode}
              onChange={() => {
                this.handlePhoneChange(this.inputPhoneCountryCode); // only need to update state for select elements
              }}

              // ref={this.inputFirstName}
            />
            <input
              type="tel"
              id="phone_number"
              name="number"
              className="form-control"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              placeholder="Phone Number"
              ref={this.inputPhoneNumber}
              onChange={() => {
                this.handlePhoneChange(this.inputPhoneNumber); // only need to update state for select elements
              }}
              // ref={this.inputFirstName}
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

/*
  handlePhoneChange = element => {
    const field = element.current.name;

    // if (typeof element.current.value == "number") {
    this.setState(state => ({
      data: {
        phones: {
          ...state.data.phones,
          [field]: element.current.value
        }
      },
      validation: {
        ...state.validation,
        [field]: true
      }
    }));
    // }
    // if 2 phones fields are valid >> whole phone entry valid, done!
    // what's the best method to check & validate phone entries, incl. country code?
  };*/
