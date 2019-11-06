import React from "react";
import { create } from "react-test-renderer";
import { render } from "react-dom";

import CreateList from ".";

describe("CreateList component", () => {
  it("should render the component", () => {
    const createList = create(<CreateList />);
    createList.root.findByType("form").props.onSubmit();
  });
});
