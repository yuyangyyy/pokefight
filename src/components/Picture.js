import React from "react";

import "./Picture.css";

class Picture extends React.Component {
  state = {
    picture1: "",
    picture2: "",
  };

  render() {
    return (
      <div className="picture">
        <img src={this.props.pic} alt="" />
      </div>
    );
  }
}

export default Picture;
