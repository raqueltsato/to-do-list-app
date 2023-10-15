import React from "react";
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

const CardDefault = ({
  toDo: { id, description, dueToDate, done },
  handleEditToDo,
  handleRemoveToDo,
  toggleModal,
  t,
}: OwnProps): JSX.Element => {
  return (
    <CardContainer key={id}>
      <CheckboxContainer
        className="checkboxarea"
        onClick={() => handleEditToDo({ id, done: !done })}
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
        <EditIcon onClick={() => toggleModal(id)} />
        <TrashIcon onClick={() => handleRemoveToDo(id)} />
      </Options>
    </CardContainer>
  );
};

export const Card = React.memo(CardDefault, (prev, next) => {
  return Object.is(prev.toDo, next.toDo);
});
