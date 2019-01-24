import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {},
      validation: {}
    };

    this.inputFirstName = React.createRef();
    this.inputLastName = React.createRef();
    this.inputPhoneType = React.createRef();
  }

  handleNameChange = element => {
    const field = element.current.name;

    if (element.current.value.length > 1) {
      element.current.classList.add("is-valid");
      this.setState(state => ({
        data: {
          contact: {
            ...state.data.contact,
            [field]: element.current.value
          }
        },
        validation: {
          ...state.validation,
          [field]: true
        }
      }));
      this.checkIfInvalid(element);
    } else {
      this.checkIfValid(element);
    }
  };

  checkIfInvalid = element => {
    const field = element.current.name;
    if (this.state.validation[field] === false) {
      this.setState(state => ({
        validation: {
          ...state.validation,
          [field]: true
        }
      }));

      this.toggleValidationClass(element);
    }
  };

  checkIfValid = element => {
    const field = element.current.name;

    if (this.state.validation[field] === true) {
      this.setState(state => ({
        validation: {
          ...state.validation,
          [field]: false
        }
      }));
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

  saveAndValidate = element => {
    const field = element.current.name;
    this.setState(state => ({
      data: {
        ...state.data,
        [field]: element.current.value
      },
      validation: {
        ...state.validation,
        [field]: true
      }
    }));
  };

  render() {
    return (
      <form
        className="w-50"
        onSubmit={this.props.handleSubmit}
        noValidate={true}
      >
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
                  this.saveAndValidate(this.inputPhoneType); // only need to update state for select elements
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
