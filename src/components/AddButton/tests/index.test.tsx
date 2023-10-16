import { fireEvent, render } from "@testing-library/react";
import AddButton from "..";
import StylesProvider from "../../../providers";

const onChangeEvent = jest.fn();

describe("Button tests", () => {
  it("should call onChange when button is clicked", () => {
    const { getByRole } = render(
      <StylesProvider>
        <AddButton onClick={onChangeEvent} />
      </StylesProvider>
    );

    const buttonElement = getByRole("button");
    fireEvent.click(buttonElement);
    expect(onChangeEvent).toBeCalled();
  });

  it("should have button description", () => {
    const { getByText } = render(
      <StylesProvider>
        <AddButton onClick={onChangeEvent} name="Cadastrar" />
      </StylesProvider>
    );

    const buttonElement = getByText("Cadastrar");
    expect(buttonElement).toBeDefined();
  });
});
