import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Section, {
  SectionPropTypes,
  SectionDefaultProps,
} from "@bit/osequi.test.section";

/**
 * Imports other components and hooks
 */
import { LayoutPropTypes, LayoutDefaultProps } from "../Layout";
import { useSpacing, SpacingPropTypes, SpacingDefaultProps } from "../../hooks";

/**
 * Imports business logic
 */
import { getGridAlignments } from "./Layout2d.logic";

/**
 * Defines the prop types
 */
const propTypes = {
  ...LayoutPropTypes,
  /**
   * The dimensions of the columns following the CSS Grid `grid-template-columns` syntax.
   * To see why Grid is used instead of Flexbox please read https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Relationship_of_Grid_Layout
   * @type {string}
   */
  columns: PropTypes.string,
  /**
   * The dimensions of the rows following the CSS Grid `grid-template-rows` syntax
   * @type {string}
   */
  rows: PropTypes.string,
  /**
   * The gap between the cells. Set both horizontally with `column-gap` and vertically with `row-gap`.
   * @type {string}
   */
  gap: PropTypes.shape(SpacingPropTypes.spacing),
  /**
   * The grid alignment. Two string values: the first aligning the columns with `justify-items`; the second aligning rows with `align-items`. Example: 'top left'
   * @type {string}
   */
  align: PropTypes.string,
};

/**
 * Defines the default props
 */
const defaultProps = {
  ...LayoutDefaultProps,
  columns: null,
  rows: null,
  gap: SpacingDefaultProps.spacing,
  align: null,
};

/**
 * Styles the component container
 */
const Container = styled(Section)((props) => ({
  display: "grid",
  width: `${props.width}`,
  height: `${props.height}`,
  gridTemplateColumns: `${props.columns}`,
  gridTemplateRows: `${props.rows}`,
  columnGap: `${props.gap}`,
  rowGap: `${props.gap}`,
  alignItems: `${props.alignItems}`,
  justifyItems: `${props.justifyItems}`,
  padding: `${props.spacing}`,
}));

/**
 * Displays the component
 */
const Layout2d = (props) => {
  const { width, height, children, columns, rows, gap: rawGap } = props;

  const spacing = useSpacing(props);
  const gap = useSpacing({ spacing: rawGap });
  const { alignItems, justifyItems } = getGridAlignments(props);

  return (
    <Container
      className="Layout2d"
      width={width}
      height={height}
      columns={columns}
      rows={rows}
      spacing={spacing}
      gap={gap}
      alignItems={alignItems}
      justifyItems={justifyItems}
    >
      {children}
    </Container>
  );
};

Layout2d.propTypes = propTypes;
Layout2d.defaultProps = defaultProps;

export default Layout2d;
export { propTypes as Layout2dPropTypes, defaultProps as Layout2dDefaultProps };
