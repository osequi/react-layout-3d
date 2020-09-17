import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

/**
 * Defines the prop types
 */
const propTypes = {};

/**
 * Defines the default props
 */
const defaultProps = {};

/**
 * Styles the component container
 */
const Container = styled("div")(props => ({}));

/**
 * Displays the component
 */
const Layout2d = props => {
  return <Container className="Layout2d">Layout2d</Container>;
};

Layout2d.propTypes = propTypes;
Layout2d.defaultProps = defaultProps;

export default Layout2d;
export { propTypes as Layout2dPropTypes, defaultProps as Layout2dDefaultProps };
