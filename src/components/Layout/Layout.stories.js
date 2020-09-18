import React from "react";
import Layout from "./Layout";

export default {
  title: "Componens/Layout",
  component: Layout,
};

export const Default = () => <Layout />;
Default.decorators = [
  (Story) => (
    <div>
      <p>It should be empty because `children` is not set by default.</p>
      <Story />
    </div>
  ),
];

export const WithChildren = () => (
  <Layout children="Displays Layout1d by default" />
);

export const Layout2d = () => (
  <Layout
    dimension={2}
    children="Displays Layout2d when dimension is set to 2"
  />
);
