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

  ["& > *"]: {
    /**
     * The child is spaced in the container.
     * The child doesn't set it's own surrounding space.
     * @see https://seek-oss.github.io/braid-design-system/foundations/layout
     *
     * We use padding instead of margin, since the child cannot set it's own padding.
     * With padding the container can have a decoration. With margin that decoration would be lost.
     */
    padding: `${props.padding}`,
    /**
     * The child is stretched inside the container to the container's full width and height.
     */
    width: "100%",
    height: "100%",
    boxSizing: "border-box",
  },
}));

/**
 * Displays the component
 */
const Layout1d = (props) => {
  const { width, height, children } = props;

  const padding = useSpacing(props);

  return (
    <Container
      className="Layout1d"
      width={width}
      height={height}
      padding={padding}
    >
      {children}
    </Container>
  );
};

Layout1d.propTypes = propTypes;
Layout1d.defaultProps = defaultProps;

export default Layout1d;
export { propTypes as Layout1dPropTypes, defaultProps as Layout1dDefaultProps };
