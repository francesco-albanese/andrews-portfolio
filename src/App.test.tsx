import { render, screen } from "@testing-library/react";
import { InputPassword } from "components/Header/InputPassword";

describe("<InputPassword />", () => {
  it("renders hopefully", () => {
    render(<InputPassword />);
    screen.debug();
  });
});
