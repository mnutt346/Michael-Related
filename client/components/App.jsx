import React, { Component } from "react";
import ReactDOM from "react-dom";
import Related from "./Related.jsx";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: Math.floor(Math.random() * 10000000)
    };
    this.handleClick = this.handleClick.bind(this);
  }

  //   componentDidMount() {
  //     fetch(`http://localhost:3004/related`)
  //       .then(data => data.json())
  //       .then(json => {
  //         let newState = {};
  //         newState.items = json;
  //         this.setState(newState);
  //       })
  //       .catch(error => {
  //         console.log("error fetching data", error);
  //       });
  //   }

  handleClick(e, ID) {
    console.log(ID);
    this.setState({
      id: ID
    });
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
