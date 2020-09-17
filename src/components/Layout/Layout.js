import React from "react";
import PropTypes from "prop-types";

/**
 * Imports other components and hooks
 */
import Layout1d from "../Layout1d";

/**
 * Defines the prop types
 */
const propTypes = {
  /**
   * The number of dimensions. It can be 1,2 or 3
   * @type {number}
   */
  dimension: PropTypes.number,
};

/**
 * Defines the default props
 */
const defaultProps = {
  dimension: 1,
};

/**
 * Displays the component
 */
const Layout = (props) => {
  const { dimension } = props;

  switch (dimension) {
    case 1:
    default:
      return <Layout1d {...props} />;
  }
};

Layout.propTypes = propTypes;
Layout.defaultProps = defaultProps;

export default Layout;
export { propTypes as LayoutPropTypes, defaultProps as LayoutDefaultProps };
