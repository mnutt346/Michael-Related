import React, { Component } from "react";
import ReactDOM from "react-dom";
import Related from "./Related.jsx";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: Math.floor(Math.random() * 10000000)
    };
  }

  render() {
    return (
      <div>
        <Related onClick={this.handleClick} id={this.state.id} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("Related"));
