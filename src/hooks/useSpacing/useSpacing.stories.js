import React from "react";
import { storiesOf } from "@storybook/react";

import useSpacing from "./useSpacing";
import description from "./useSpacing.md";

storiesOf("useSpacing", module).add("Overview", () => <useSpacing />, {
  notes: { markdown: description }
});
