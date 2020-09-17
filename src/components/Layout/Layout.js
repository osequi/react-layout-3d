import React from "react";
import PropTypes from "prop-types";

import {
  SectionPropTypes,
  SectionDefaultProps,
} from "@bit/osequi.test.section";

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
  /**
   * The width of the layout
   * @type {string}
   */
  w: PropTypes.string,
  /**
   * The height of the layout
   * @type {string}
   */
  h: PropTypes.string,
  /**
   * The `<section>` props
   * @type {SectionPropTypes}
   */
  section: PropTypes.shape(SectionPropTypes),
};

/**
 * Defines the default props
 */
const defaultProps = {
  dimension: 1,
  w: "100%",
  h: "100%",
  section: { ...SectionDefaultProps, display: false }, // NOTE: make sure Section display is false by default
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
