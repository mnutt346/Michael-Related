import React from "react";

export default class Project extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="project">
        <div className="project-image">
          <img src={this.props.src} />
        </div>
        <span className="project-name">{this.props.name}</span>
        <span className="project-blurb">{this.props.blurb}</span>
      </div>
    );
  }
}
