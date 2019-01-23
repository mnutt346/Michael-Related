import React, { Component } from "react";
import ReactDOM from "react-dom";
import Related from "./Related.jsx";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Related />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("Related"));
