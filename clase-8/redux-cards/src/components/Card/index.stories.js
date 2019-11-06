import React from "react";
import { storiesOf } from "@storybook/react";
import { text } from "@storybook/addon-knobs";

import Card from ".";

storiesOf("Card Component", module).add("Initial", () => <Card />, {
  notes: "Basic component with default data"
});

storiesOf("Card Component", module).add(
  "WithProps",
  () => (
    <Card
      title={text("Title", "This is a really big title")}
      description={text("Description", "This is a really big description")}
    />
  ),
  {
    notes: "Component with props"
  }
);
