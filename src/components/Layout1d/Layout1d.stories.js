import React from "react";
import Layout1d from "./Layout1d";

export default {
  title: "Componens/Layout1d",
  component: Layout1d,
};

export const Default = () => <Layout1d />;
Default.decorators = [
  (Story) => (
    <div>
      <p>It should be empty because `children` is not set by default.</p>
      <Story />
    </div>
  ),
];

export const WithChildren = () => (
  <div style={{ background: "lightgray" }}>
    <Layout1d
      children={
        <p style={{ background: "lightblue" }}>
          Layout1d content is always fully stretched inside the container.
        </p>
      }
      width="50vw"
      height="50vh"
    />
  </div>
);

export const WithSpacing = () => (
  <div style={{ background: "lightgray" }}>
    <Layout1d
      children={
        <p style={{ background: "lightblue" }}>
          Spacing is set at the layout level, not at component level.
        </p>
      }
      width="50vw"
      height="50vh"
      spacing="gutter"
    />
  </div>
);
