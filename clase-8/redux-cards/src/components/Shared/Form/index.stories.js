import React from "react";
import { storiesOf } from "@storybook/react";
import { text } from "@storybook/addon-knobs";

import { Input } from ".";

storiesOf("Form Components", module).add(
  "Input",
  () => (
    <Input
      placeholder={text(
        "Placeholder",
        "Label, Placeholder, Helper text, whatever you want"
      )}
    />
  ),
  {
    notes: "Basic component with default data"
  }
);
