import React from "react";
import PropTypes from "prop-types";

import "./styles.css";

const Button = ({ name, width }) => (
  <button className="button" style={{ width: width ? width : "200px" }}>
    {name}
  </button>
);

Button.propTypes = {
  width: PropTypes.string,
  name: PropTypes.string.isRequired,
};

export default Button;
