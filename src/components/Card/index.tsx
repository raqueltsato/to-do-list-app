import { useTranslation } from "react-i18next";
import {
  CardContainer,
  Checkbox,
  CheckboxContainer,
  Checkmark,
  DueToDateTag,
  Title,
  TrashIcon,
} from "./styles";
import { OwnProps } from "./types";
import React from "react";

const CardDefault = ({
  toDo: { id, description, dueToDate, done },
  handleDoneToDo,
  handleRemoveToDo,
  t,
}: OwnProps): JSX.Element => {
  console.log("Renderizou o card", description, Date.now());
  return (
    <CardContainer key={id}>
      <CheckboxContainer>
        <Checkbox className="checkmark">
          <Checkmark checked={done} onClick={() => handleDoneToDo(id)} />
        </Checkbox>
      </CheckboxContainer>
      <Title>{description}</Title>
      <DueToDateTag>
        {new Date(dueToDate).toLocaleDateString(t("dateLocale"))}
      </DueToDateTag>
      <TrashIcon onClick={() => handleRemoveToDo(id)} />
    </CardContainer>
  );
};

export const Card = React.memo(CardDefault, (prev, next) => {
  return Object.is(prev.toDo, next.toDo);
});
