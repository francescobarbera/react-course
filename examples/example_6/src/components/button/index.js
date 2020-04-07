import React from "react";
import PropTypes from "prop-types";

import "./styles.css";

const Button = ({ name, width, onClick }) => (
  <button
    className="button"
    style={{ width: width ? width : "200px" }}
    onClick={onClick}
  >
    {name}
  </button>
);

Button.propTypes = {
  name: PropTypes.string.isRequired,
  width: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default Button;
