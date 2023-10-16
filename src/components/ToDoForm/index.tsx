import { useContext, useEffect, useState } from "react";
import { FaRegTimesCircle } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import DatePicker, { registerLocale } from "react-datepicker";
import ptBR from "date-fns/locale/pt-BR";
import "react-datepicker/dist/react-datepicker.css";

import {
  CloseButton,
  DateWrapper,
  Input,
  InputWrapperContainer,
  Label,
  ModalContainer,
  ModalContent,
  Title,
} from "./styles";
import { OwnProps } from "./types";
import AddButton from "../AddButton";
import { ToDoContext } from "../../contexts/toDoContext";

export const ToDoModal = ({ isOpen }: OwnProps) => {
  registerLocale("ptBR", ptBR);
  const {
    modal: { toDoId },
    handleAddToDo,
    handleEditToDo,
    getToDo,
    toggleModal,
  } = useContext(ToDoContext);

  const { t } = useTranslation("form");

  const [dueToDate, setDueToDate] = useState<number>(Date.now());
  const [description, setDescription] = useState("");

  const resetModal = () => {
    setDescription("");
    setDueToDate(Date.now());
  };

  const handleSubmit = () => {
    if (toDoId) {
      handleEditToDo({ id: toDoId, description, dueToDate });
      toggleModal();
    } else {
      handleAddToDo(description, dueToDate);
    }
    resetModal();
  };

  const handleCloseModal = () => {
    toggleModal();
    resetModal();
  };

  useEffect(() => {
    if (toDoId) {
      const toDo = getToDo(toDoId);
      if (toDo) {
        setDueToDate(toDo.dueToDate);
        setDescription(toDo.description);
      }
    }
  }, [toDoId]);

  return (
    <ModalContainer data-testid="togglemodal" data-isopen={isOpen}>
      <ModalContent>
        <CloseButton data-testid="closebutton" onClick={handleCloseModal}>
          <FaRegTimesCircle />
        </CloseButton>
        <Title>{toDoId ? t("titleEdit") : t("title")}</Title>
        <InputWrapperContainer>
          <Label>{t("dueToDate")}</Label>
          <DateWrapper>
            <DatePicker
              data-testid="date"
              className="date-picker"
              locale="ptBR"
              selected={new Date(dueToDate)}
              onChange={(date: Date) => setDueToDate(date.getTime())}
              dateFormat={t("dateFormat")}
            />
          </DateWrapper>
          <Label>{t("description")}</Label>
          <Input
            data-testid="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </InputWrapperContainer>
        <AddButton
          name={toDoId ? t("edit") : t("submit")}
          onClick={handleSubmit}
        />
      </ModalContent>
    </ModalContainer>
  );
};
