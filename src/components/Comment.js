import React from "react";
import "./Comment.css";

class Comment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: "",
    };
  }

  handleChange = (event) => {
    this.setState({});
  };

  render() {
    return (
      <div className="commentBox">
        <p>{this.props.commentText}</p>
      </div>
    );
  }
}

export default Comment;
