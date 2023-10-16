import { RenderResult, fireEvent, render } from "@testing-library/react";
import { ToDoProvider } from "../../../contexts/toDoContext";
import { I18nextProvider } from "react-i18next";
import i18n from "../../../config/i18n";
import StylesProvider from "../../../providers";
import Home from "..";

let wrapper: RenderResult;

describe("ToDoModal tests", () => {
  beforeEach(() => {
    wrapper = render(
      <ToDoProvider>
        <I18nextProvider i18n={i18n}>
          <StylesProvider>
            <Home />
          </StylesProvider>
        </I18nextProvider>
      </ToDoProvider>
    );
  });

  it("should open to do form when click on add button", async () => {
    const addButton = wrapper.getByTestId("addbutton");
    fireEvent.click(addButton);
    const modal = wrapper.getByTestId("togglemodal");
    expect(modal.getAttribute("data-isopen")).toBeTruthy();
  });
});
