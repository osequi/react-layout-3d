import React from "react";
import { storiesOf } from "@storybook/react";

import Layout2d from "./Layout2d";
import description from "./Layout2d.md";

storiesOf("Layout2d", module).add("Overview", () => <Layout2d />, {
  notes: { markdown: description }
});
