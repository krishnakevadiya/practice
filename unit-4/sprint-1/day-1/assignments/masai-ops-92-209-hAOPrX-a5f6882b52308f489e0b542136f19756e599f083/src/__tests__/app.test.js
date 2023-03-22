import { render } from "@testing-library/react";
import React from "react";

import Button from "../Components/Button";
import Avatar from "../Components/Avatar";

// Do not change anything in the file
// We will be overrdiing this file while running our tests
// ensure you are submitting your entire project

beforeAll(() => {
  global.score = 1;
  console.log("Score rest to 1");
});

describe("Button Component", () => {
  test.only("Button with text click me", () => {
    expect(Button).toBeDefined();
    const { getByRole } = render(<Button />);
    const button = getByRole("button");
    expect(button.textContent.trim().toLowerCase()).toMatch(/click me/i);
    expect(button.style.padding).toBe("1rem");
    expect(button.style.backgroundColor).toBe("tomato");
    global.score += 3;
  });
});
describe("Avatar  Component", () => {
  test.only("Avatar with caption", () => {
    expect(Avatar).toBeDefined();
    let props = {
      image: "https://via.placeholder.com/140x100",
      caption: "Masai",
    };
    const { getByRole } = render(<Avatar {...props} />);
    const image = getByRole("img");
    const heading = getByRole("heading");
    expect(heading.tagName).toBe("H2");
    expect(image.getAttribute("alt")).toBe(props.caption);
    expect(image.getAttribute("src")).toBe(props.image);
    expect(image.style.borderRadius).toBe("50%");
    global.score += 3;
  });
});
describe("Avatar  Component 2", () => {
  test.only("Avatar with caption", () => {
    expect(Avatar).toBeDefined();
    let props = {
      image: "https://via.placeholder.com/140x100",
      caption: "Masai School",
    };
    const { getByRole } = render(<Avatar {...props} />);
    const image = getByRole("img");
    const heading = getByRole("heading");
    expect(heading.tagName).toBe("H2");
    expect(image.getAttribute("alt")).toBe(props.caption);
    expect(image.getAttribute("src")).toBe(props.image);
    expect(image.style.borderRadius).toBe("50%");
    global.score += 3;
  });
});

afterAll(() => {
  console.log("Final Score is", global.score);
});
