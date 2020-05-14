import React from "react";

import "./SortBox.css";

const SortBox = (props) => {
  const { sortType } = props;
  return (
    <div className="SortBox" style={{ width: props.sortBoxSize }}>
      <select onChange={props.method} id={props.id}>
        <option value="">{props.sortTitle}</option>
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
};

export default SortBox;
