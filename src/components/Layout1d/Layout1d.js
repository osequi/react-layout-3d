import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Section from "@bit/osequi.test.section";

/**
 * Imports other components and hooks
 */
import { LayoutPropTypes, LayoutDefaultProps } from "../Layout";

/**
 * Defines the prop types
 */
const propTypes = {
  ...LayoutPropTypes,
};

/**
 * Defines the default props
 */
const defaultProps = {
  ...LayoutDefaultProps,
};

/**
 * Styles the component container
 */
const Container = styled("div")((props) => ({}))`
width: 100%;
`;

/**
 * Displays the component
 */
const Layout1d = (props) => {
  const { w, h } = props;

  return (
    <Container className="Layout1d" width={w} height={h}>
      Layout1d
    </Container>
  );
};

Layout1d.propTypes = propTypes;
Layout1d.defaultProps = defaultProps;

export default Layout1d;
export { propTypes as Layout1dPropTypes, defaultProps as Layout1dDefaultProps };
