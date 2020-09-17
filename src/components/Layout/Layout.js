import React from "react";
import PropTypes from "prop-types";

import Section, {
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
  width: PropTypes.string,
  /**
   * The height of the layout
   * @type {string}
   */
  height: PropTypes.string,
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
  /**
   * The `<section>` props. `<section>` servers as the container element of the layout.
   * @type {SectionPropTypes}
   */
  section: PropTypes.shape(SectionPropTypes),
  /**
   * The content of the container
   * @type {any}
   */
  children: PropTypes.any,
};

/**
 * Defines the default props
 */
const defaultProps = {
  dimension: 1,
  width: "100%",
  height: "100%",
  spacing: "gutter",
  section: { ...SectionDefaultProps, display: false }, // NOTE: make sure Section display is false by default
  children: null,
};

/**
 * Displays the component
 */
const Layout = (props) => {
  const { dimension, children } = props;

  /**
   * Displays nothing if the content for the layout is missing
   */
  if (!children) return null;

  switch (dimension) {
    case 1:
    default:
      return <Layout1d {...props} />;
  }
};

Layout.propTypes = propTypes;
Layout.defaultProps = defaultProps;

Section.propTypes = propTypes.section;
Section.defaultProps = defaultProps.section;

export default Layout;
export {
  propTypes as LayoutPropTypes,
  defaultProps as LayoutDefaultProps,
  Section,
};
