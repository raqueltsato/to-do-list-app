import { RenderResult, render } from "@testing-library/react";
import { ToDoProvider } from "../../../contexts/toDoContext";
import { I18nextProvider } from "react-i18next";
import i18n from "../../../config/i18n";
import StylesProvider from "../../../providers";
import { ToDoList } from "..";
import { toDosMock } from "../../../data";

let wrapper: RenderResult;

describe("ToDoModal tests", () => {
  afterEach(() => {
    localStorage.clear();
  });
  beforeEach(() => {
    wrapper = render(
      <ToDoProvider>
        <I18nextProvider i18n={i18n}>
          <StylesProvider>
            <ToDoList />
          </StylesProvider>
        </I18nextProvider>
      </ToDoProvider>
    );
  });

  it("should render empty state", async () => {
    const emptyImage = wrapper.queryByTestId("emptyimage");
    const emptyText = wrapper.queryByText("Não há tarefas cadastradas.");

    expect(emptyImage).toBeDefined();
    expect(emptyText).toBeDefined();
  });

  it("should render to dos", async () => {
    jest
      .spyOn(Storage.prototype, "getItem")
      .mockReturnValue(JSON.stringify(toDosMock));

    wrapper = render(
      <ToDoProvider>
        <I18nextProvider i18n={i18n}>
          <StylesProvider>
            <ToDoList />
          </StylesProvider>
        </I18nextProvider>
      </ToDoProvider>
    );

    const cards = wrapper.getAllByTestId("card");
    expect(cards.length).toBe(3);
  });
});
