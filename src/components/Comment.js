import React from "react";

import "./Comment.css";

class Comment extends React.Component {
  state = {
    comment: "",
  };

  addComment = () => {
    let commentBox = document.getElementsByClassName("commentBox")[0];
    commentBox.innerHTML = `<p id="comment" style="white-space: nowrap; overflow: hidden; animation: typewriter 1s steps(${this.props.commentText.length});">
      ${this.props.commentText}
    </p>`;
  };

  componentDidUpdate(prevProps) {
    if (prevProps.commentText !== this.props.commentText) {
      this.addComment();
    }
  }

  handleChange = (event) => {
    this.setState({});
  };

  render() {
    return (
      <div className="C-container">
        <div className="commentBox"></div>
      </div>
    );
  }
}

export default Comment;
