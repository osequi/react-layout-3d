import React from "react";
import Layout2d from "./Layout2d";

export default {
  title: "Componens/Layout2d",
  component: Layout2d,
};

const Template = (args) => <Layout2d {...args} />;

const Article = (
  <article style={{ border: "1px solid" }}>
    <h3>Article</h3>
    <p>Article body</p>
  </article>
);

export const Default = Template.bind({});
Default.decorators = [
  (Story) => (
    <div>
      <p>It should be empty because `children` is not set by default.</p>
      <Story />
    </div>
  ),
];

export const WithAChildren = Template.bind({});
WithAChildren.args = { children: Article };

export const WithChildren = Template.bind({});
WithChildren.args = {
  children: (
    <>
      {Article}
      {Article}
    </>
  ),
};

export const ColumnSet = Template.bind({});
ColumnSet.args = {
  ...WithChildren.args,
  columns: "1fr 1fr",
};
