import {
  CardContainer,
  Checkbox,
  CheckboxContainer,
  Checkmark,
  DescriptionContainer,
  DueToDateTag,
  EditIcon,
  Options,
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
  return (
    <CardContainer key={id}>
      <CheckboxContainer
        className="checkboxarea"
        onClick={() => handleDoneToDo(id)}
      >
        <Checkbox className="checkmark">
          <Checkmark checked={done} />
        </Checkbox>
      </CheckboxContainer>
      <DescriptionContainer>
        <Title>{description}</Title>
        <DueToDateTag>
          {new Date(dueToDate).toLocaleDateString(t("dateLocale"))}
        </DueToDateTag>
      </DescriptionContainer>
      <Options>
        <EditIcon />
        <TrashIcon onClick={() => handleRemoveToDo(id)} />
      </Options>
    </CardContainer>
  );
};

export const Card = React.memo(CardDefault, (prev, next) => {
  return Object.is(prev.toDo, next.toDo);
});
