import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

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
 * Styles the component container
 */
const Container = styled("div")((props) => ({}));

/**
 * Displays the component
 */
const Layout = (props) => {
  return <Container className="Layout">Layout</Container>;
};

Layout.propTypes = propTypes;
Layout.defaultProps = defaultProps;

export default Layout;
export { propTypes as LayoutPropTypes, defaultProps as LayoutDefaultProps };
