import { useContext, useState } from "react";
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

registerLocale("ptBR", ptBR);

export const ToDoModal = ({ isOpen, onClose }: OwnProps) => {
  const { handleAddToDo } = useContext(ToDoContext);

  const [dueToDate, setDueToDate] = useState<number>(Date.now());
  const [description, setDescription] = useState("");

  const handleSubmit = () => {
    handleAddToDo(description, dueToDate);
    setDescription("");
  };

  const handleCloseModal = () => {
    onClose();
    setDescription("");
  };

  const { t } = useTranslation("form");
  return (
    <ModalContainer data-isopen={isOpen}>
      <ModalContent>
        <CloseButton onClick={handleCloseModal}>
          <FaRegTimesCircle />
        </CloseButton>
        <Title>{t("title")}</Title>
        <InputWrapperContainer>
          <Label>{t("dueToDate")}</Label>
          <DateWrapper>
            <DatePicker
              locale="ptBR"
              selected={new Date(dueToDate)}
              onChange={(date: Date) => setDueToDate(date.getTime())}
              dateFormat={t("dateFormat")}
            />
          </DateWrapper>
          <Label>{t("description")}</Label>
          <Input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </InputWrapperContainer>
        <AddButton name={t("submit")} onClick={handleSubmit} />
      </ModalContent>
    </ModalContainer>
  );
};
