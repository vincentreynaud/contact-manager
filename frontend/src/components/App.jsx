import React, { Component } from "react";
import Header from "./Header";
import Form from "./Form";

/**
 * Improvements:
 * 1. Store input data to the localStorage
 * 2.
 *
 */

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {},
      validation: {}
    };
  }

  setName = element => {
    this.setValidation(element, true);
    this.setState(state => ({
      data: {
        ...state.data,
        contact: {
          ...state.data.contact,
          [element.name]: element.value
        }
      }
    }));
  };

  setPhone = element => {
    this.setValidation(element, true);
    this.setState(state => ({
      data: {
        ...state.data,
        phones: {
          ...state.data.phones,
          [element.name]: element.value
        }
      }
    }));
  };

  setValidation = (element, validation) => {
    this.setState(state => ({
      validation: {
        ...state.validation,
        [element.name]: validation
      }
    }));
  };

  render() {
    return (
      <div className="container">
        <Header />
        <Form
          data={this.state.data}
          validation={this.state.validation}
          setValidation={this.setValidation}
          setName={this.setName}
          setPhone={this.setPhone}
        />
      </div>
    );
  }
}

export default App;
