import React from "react";
import { storiesOf } from "@storybook/react";
import { text } from "@storybook/addon-knobs";

import List from ".";

storiesOf("List Component", module).add("Initial", () => <List />, {
  notes: "Basic component with default data"
});

storiesOf("List Component", module).add(
  "WithProps",
  () => <List title={text("Title", "This is a really big title")} />,
  {
    notes: "Component with props"
  }
);
