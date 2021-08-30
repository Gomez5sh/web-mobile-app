import React from "react";
import PropTypes from "prop-types";
import Button from "../../atoms/Button/index";
import Icon from "../../atoms/Icon/index";

const ButtonIcon = ({ children, type, icon }) => (
  <Button type="secondary">
    {children}
    <Icon type="right-arrow" />
  </Button>
);

ButtonIcon.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ButtonIcon;
