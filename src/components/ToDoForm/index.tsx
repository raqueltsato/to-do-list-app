import { useState } from "react";
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

registerLocale("ptBR", ptBR);

export const ToDoModal = ({ isOpen, onClose }: OwnProps) => {
  const [dueToDate, setDueToDate] = useState<Date | null>(new Date());

  const { t } = useTranslation("form");
  return (
    <ModalContainer isOpen={isOpen}>
      <ModalContent>
        <CloseButton onClick={onClose}>
          <FaRegTimesCircle />
        </CloseButton>
        <Title>{t("title")}</Title>
        <InputWrapperContainer>
          <Label>{t("dueToDate")}</Label>
          <DateWrapper>
            <DatePicker
              locale="ptBR"
              selected={dueToDate}
              onChange={(date) => setDueToDate(date)}
              dateFormat={t("dateFormat")}
            />
          </DateWrapper>
          <Label>{t("description")}</Label>
          <Input />
        </InputWrapperContainer>
        <AddButton name={t("submit")} onClick={console.log} />
      </ModalContent>
    </ModalContainer>
  );
};
