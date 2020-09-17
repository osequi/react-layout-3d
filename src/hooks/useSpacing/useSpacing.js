import React from "react";
import PropTypes from "prop-types";

/**
 * Defines the prop types
 */
const propTypes = {
  /**
   * The spacing of the element(s) inside the container
   * @type {array}
   */
  spacing: PropTypes.oneOf([
    "none",
    "gutter",
    "xxs",
    "xs",
    "s",
    "m",
    "l",
    "xl",
    "xxl",
  ]),
};

/**
 * Defines the default props
 */
const defaultProps = {
  spacing: "gutter",
};

/**
 * Displays the component
 */
const useSpacing = (props) => {
  const { spacing } = props;

  let margin = 0;

  switch (spacing) {
    case "gutter":
      margin = "1em";
      break;
    case "none":
    default:
      margin = 0;
  }

  return margin;
};

useSpacing.propTypes = propTypes;
useSpacing.defaultProps = defaultProps;

export default useSpacing;
export { propTypes as SpacingPropTypes, defaultProps as SpacingDefaultProps };
