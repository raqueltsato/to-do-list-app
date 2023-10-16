import { fireEvent, render } from "@testing-library/react";
import { Card } from "..";
import { toDosMock } from "../../../data";
import { OwnProps } from "../types";
import StylesProvider from "../../../providers";

const props = {
  toDo: toDosMock[0],
  handleEditToDo: jest.fn(),
  handleRemoveToDo: jest.fn(),
  toggleModal: jest.fn(),
  t: jest.fn((key: string) => (key === "dateLocale" ? "pt-br" : key)),
} as unknown as OwnProps;

describe("Card tests", () => {
  it("should render correctly", () => {
    const { getByText } = render(
      <StylesProvider>
        <Card {...props} />
      </StylesProvider>
    );
    const dueToDate = getByText("15/10/2023");
    const description = getByText("Ir ao mercado");

    expect(dueToDate).toBeDefined();
    expect(description).toBeDefined();
  });

  it("should mark as done", () => {
    const { getByTestId } = render(
      <StylesProvider>
        <Card {...props} />
      </StylesProvider>
    );

    const checkBox = getByTestId("checkboxarea");
    fireEvent.click(checkBox);

    expect(props.handleEditToDo).toBeCalledWith({ id: "1", done: true });
  });

  it("should call toggleModal to edit", () => {
    const { getByTestId } = render(
      <StylesProvider>
        <Card {...props} />
      </StylesProvider>
    );

    const editButton = getByTestId("edit");
    fireEvent.click(editButton);

    expect(props.toggleModal).toBeCalledWith("1");
  });

  it("should call handleRemoveToDo to delete", () => {
    const { getByTestId } = render(
      <StylesProvider>
        <Card {...props} />
      </StylesProvider>
    );

    const deleteButton = getByTestId("delete");
    fireEvent.click(deleteButton);

    expect(props.handleRemoveToDo).toBeCalledWith("1");
  });
});
