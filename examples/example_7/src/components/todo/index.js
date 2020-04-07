import PropTypes from "prop-types";
import React from "react";

import "./styles.css";

function Todo({ id, text, onClick }) {
  return (
    <div className="todo" onClick={() => onClick(id)}>
      {text}
    </div>
  );
}

Todo.propTypes = {
  id: PropTypes.number,
  text: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default Todo;
