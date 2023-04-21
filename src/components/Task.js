import React from "react";

function Task({ text, category, onDelete }) {
  const handleClick = () => {
    onDelete(text);
  };

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">
        <ol>
          <li>{text}</li>
        </ol>
      </div>
      <button className="delete" onClick={handleClick}>
        X
      </button>
    </div>
  );
}

export default Task;
