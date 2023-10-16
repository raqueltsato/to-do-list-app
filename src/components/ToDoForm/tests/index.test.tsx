import { act, fireEvent, render, RenderResult } from "@testing-library/react";
import { ToDoModal } from "..";
import { ToDoContext, ToDoProvider } from "../../../contexts/toDoContext";
import { I18nextProvider } from "react-i18next";
import i18n from "../../../config/i18n";
import StylesProvider from "../../../providers";
import { useContext, useEffect } from "react";

let wrapper: RenderResult;

const ComponentContext = ({
  id,
  children,
}: {
  id?: string;
  children: React.ReactNode;
}) => {
  const { toggleModal } = useContext(ToDoContext);

  useEffect(() => {
    if (id) {
      toggleModal(id);
    }
  }, [id]);

  return children;
};

describe("ToDoModal tests", () => {
  afterAll(() => {
    localStorage.clear();
  });
  beforeEach(() => {
    wrapper = render(
      <ToDoProvider>
        <I18nextProvider i18n={i18n}>
          <StylesProvider>
            <ToDoModal isOpen={true} />
          </StylesProvider>
        </I18nextProvider>
      </ToDoProvider>
    );
  });

  it("should render correctly", () => {
    const { getByText } = wrapper;
    const title = getByText(/cadastre sua tarefa/i);
    const dueToDate = getByText(/finalizar até/i);
    const description = getByText(/descrição da tarefa/i);
    const submit = getByText(/cadastrar/i);

    expect(title).toBeDefined();
    expect(dueToDate).toBeDefined();
    expect(description).toBeDefined();
    expect(submit).toBeDefined();
  });

  it("should call handleCloseModal when close button is clicked", () => {
    const closeIcon = wrapper.getByTestId("closebutton");
    const toggleModal = wrapper.getByTestId("togglemodal") as HTMLElement & {
      "data-isopen": boolean;
    };

    fireEvent.click(closeIcon);

    expect(toggleModal["data-isopen"]).toBeFalsy();
  });

  it("should add new to do", () => {
    const description = wrapper.getByTestId("description");

    fireEvent.change(description, { target: { value: "Novo to do" } });

    const submitButton = wrapper.getByText(/cadastrar/i);

    act(() => {
      submitButton.click();
    });

    jest.advanceTimersByTime(1000);

    const storageToDos = JSON.parse(localStorage.getItem("toDos") as string);

    expect(storageToDos[0].description).toBe("Novo to do");
  });

  it("should edit an exists to do", async () => {
    const storageToDos = JSON.parse(localStorage.getItem("toDos") as string);
    const toDoId = storageToDos[0].id;

    wrapper = render(
      <ToDoProvider>
        <I18nextProvider i18n={i18n}>
          <StylesProvider>
            <ComponentContext id={toDoId}>
              <ToDoModal isOpen={true} />
            </ComponentContext>
          </StylesProvider>
        </I18nextProvider>
      </ToDoProvider>
    );

    const editTitle = wrapper.getByText(/edite sua tarefa/i);
    const [, description] = wrapper.getAllByTestId(
      "description"
    ) as HTMLInputElement[];
    const editButton = wrapper.getByText(/salvar/i);

    expect(description.value).toBe("Novo to do");

    fireEvent.change(description, { target: { value: "Ler livro" } });

    expect(editTitle).toBeDefined();
    expect(description.value).toBe("Ler livro");

    fireEvent.click(editButton);

    jest.advanceTimersByTime(1000);

    const storageAfterUpdateToDos = JSON.parse(
      localStorage.getItem("toDos") as string
    );

    const toDoAfterEdit = storageAfterUpdateToDos[0];

    expect(toDoAfterEdit.description).toBe("Ler livro");
  });
});
