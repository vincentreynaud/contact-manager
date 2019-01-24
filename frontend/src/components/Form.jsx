import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {
        contact: {
          firstName: null
        }
      },
      validation: {
        firstName: null
      }
    };

    this.inputFirstName = React.createRef();
    this.inputLastName = React.createRef();
  }

  handleNameChange = element => {
    const name = element.current;

    if (name.value.length > 1) {
      this.setState({
        data: { firstName: name.value }, // only save the value if it is valid
        validation: { firstName: true }
      });

      name.classList.add("is-valid");

      if (this.state.validation.firstName === false) {
        this.setState({ validation: { firstName: true } });
        name.classList.remove("is-invalid"); // make it a toggle?
        name.classList.add("is-valid");
      }
    } else {
      if (this.state.validation.firstName === true) {
        this.setState({ validation: { firstName: false } });
        name.classList.remove("is-valid");
        name.classList.add("is-invalid");
      }
    }
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
            className="form-control"
            id="first_name"
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
            className="form-control"
            id="first_name"
            placeholder="Type Last Name"
            ref={this.inputLastName}
            onChange={() => {
              this.handleNameChange(this.inputLastName);
            }}
          />
        </div>
        <fieldset>
          <legend>Phones</legend>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <select className="custom-select" id="phone_type" required>
                <option defaultValue>Type...</option>
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
