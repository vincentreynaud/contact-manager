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
    element = element.current; // find a better way!
    this.setState(state => ({
      data: {
        contact: {
          ...state.data.contact,
          [element.name]: element.value
        }
      }
    }));
  };

  setValidation = (element, validation) => {
    element = element.current;
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
        />
      </div>
    );
  }
}

export default App;
