import React from "react";

import "./SortBox.css";

class SortBox extends React.Component {
  render() {
    const { sortType } = this.props;
    return (
      <div className="SortBox" style={{ width: this.props.sortBoxSize }}>
        <select onChange={this.props.method} id={this.props.id}>
          <option value="">{this.props.sortTitle}</option>
          {sortType.map((type, key) => {
            return (
              <option value={type} key={key}>
                {type}
              </option>
            );
          })}
        </select>
      </div>
    );
  }
}

export default SortBox;
