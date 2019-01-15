import React from "react";
import Axios from "axios";
import Project from "./Project.jsx";

// const itemStyle = {
//   width: '60%',
//   margin: '16px auto',
//   border: '1px solid #eee',
//   boxShadow: '0 2px 3px #ccc',
//   padding: '16px',
//   // textAlign: 'center'
// }

// const nameStyle = {
//   fontFamily: 'arial',
//   fontSize: '16px'
// }

export default class Related extends React.Component {
  constructor(props) {
    super(props);
    this.state = { projects: [] };
    // this.handleClick = this.handleClick.bind(this);
  }

  // handleClick(e) {
  //   console.log(e.target)
  // }

  // url - http://ec2-18-216-54-110.us-east-2.compute.amazonaws.com

  componentDidMount() {
    Axios.get("http://localhost:3004/related").then(response => {
      console.log("RESPONSE TO GET /related: ", response);
      this.setState({ projects: response.data });
    });
  }

  render() {
    return (
      <div>
        <h3>Related Projects</h3>
        <div>
          {this.state.projects.map((project, i) => {
            for (let j = 0; j < 5; j++) {
              return (
                <Project
                  key={i}
                  src={project.thumbnail}
                  name={project.name}
                  blurb={project.blurb}
                />
              );
            }
          })}
        </div>
      </div>
    );
  }
}
