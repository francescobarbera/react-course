import { shallow } from "enzyme";
import React from "react";

import Button from "./";

describe("Button component", () => {
  it("renders provided name", () => {
    const component = shallow(
      <Button name="my_name" onClick={jest.fn()}></Button>
    );
    expect(component.find(".button").text()).toBe("my_name");
  });
});
