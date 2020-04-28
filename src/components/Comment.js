import React from "react";
import "./Comment.css";

class Comment extends React.Component {

    state = {
      comment: "",
    }

  handleChange = (event) => {
    this.setState({});
  };

  render() {
    return (
      <div className="C-container">
        <div className="commentBox">
          <p>{this.props.commentText}</p>
        </div>
      </div>
    );
  }
}

export default Comment;
