import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

import Section, {
  SectionPropTypes,
  SectionDefaultProps,
} from "@bit/osequi.test.section";

/**
 * Imports other components and hooks
 */
import { LayoutPropTypes, LayoutDefaultProps } from "../Layout";
import { useSpacing } from "../../hooks";

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
const Container = styled(Section)((props) => ({
  width: `${props.width}`,
  height: `${props.height}`,
  /**
   * Children are positioned in the container.
   * They don't set their own surrounding space.
   * @see https://seek-oss.github.io/braid-design-system/foundations/layout
   */
  ["& > *"]: {
    margin: `${props.margin}`,
  },
}));

/**
 * Displays the component
 */
const Layout1d = (props) => {
  const { width, height, children } = props;

  const margin = useSpacing(props);

  return (
    <Container
      className="Layout1d"
      width={width}
      height={height}
      margin={margin}
    >
      {children}
    </Container>
  );
};

Layout1d.propTypes = propTypes;
Layout1d.defaultProps = defaultProps;

export default Layout1d;
export { propTypes as Layout1dPropTypes, defaultProps as Layout1dDefaultProps };
