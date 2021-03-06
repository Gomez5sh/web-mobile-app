import React from "react";
import PropTypes  from "prop-types";
import classNames from "classnames";
import "./Button.css";

const Button = ({ type, children }) => (
  <button
    className={classNames("button", {
      [`button-${type}`]: type,
    })}
  >
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  // eslint-disable-next-line react/no-typos
  type: PropTypes.oneOf[("primary", "secondary", "tertiary")],
};

Button.defaultProps = {
  type: "primary",
};

export default Button;
