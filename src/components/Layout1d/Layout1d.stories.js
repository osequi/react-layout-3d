import React from "react";
import { storiesOf } from "@storybook/react";

import Layout1d from "./Layout1d";
import description from "./Layout1d.md";

storiesOf("Layout1d", module).add("Overview", () => <Layout1d />, {
  notes: { markdown: description }
});
