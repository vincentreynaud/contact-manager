import React, { Component } from "react";
import Header from "./Header";
import Form from "./Form";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Form />
      </div>
    );
  }
}

export default App;
