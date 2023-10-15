import { fireEvent, render } from "@testing-library/react";
import AddButton from "..";
import theme from "../../../theme";
import { ThemeProvider } from "styled-components/";

const onChangeEvent = jest.fn();

describe("Button tests", () => {
  it("should call onChange when button is clicked", () => {
    const { getByRole } = render(
      <ThemeProvider theme={theme}>
        <AddButton onClick={onChangeEvent} />
      </ThemeProvider>
    );

    const buttonElement = getByRole("button");
    fireEvent.click(buttonElement);
    expect(onChangeEvent).toBeCalled();
  });

  it("should have button description", () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <AddButton onClick={onChangeEvent} name="Cadastrar" />
      </ThemeProvider>
    );

    const buttonElement = getByText("Cadastrar");
    expect(buttonElement).toBeDefined();
  });
});
