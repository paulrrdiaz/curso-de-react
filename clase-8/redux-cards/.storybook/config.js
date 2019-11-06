import React from "react";
import { configure, addParameters, addDecorator } from "@storybook/react";
import { themes } from "@storybook/theming";
import { Global, css } from "@emotion/core";
import Styles from "components/Shared/Styles";
import { withKnobs } from "@storybook/addon-knobs";
import { withA11y } from '@storybook/addon-a11y';

configure(require.context("../src", true, /\.stories\.js$/), module);

addParameters({
  options: {
    theme: themes.dark,
    panelPosition: "bottom",
    isToolshown: true,
    showPanel: true
  }
});

addDecorator(story => (
  <>
    <Global
      styles={css`
        ${Styles}
      `}
    />
    <div id="storybook-root">{story()}</div>
  </>
));

addDecorator(withKnobs);
addDecorator(withA11y);
