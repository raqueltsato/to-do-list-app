import React, { useContext } from "react";
import { ToDoContext } from "../../contexts/toDoContext";
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
  handleDoneToDo,
  handleRemoveToDo,
  t,
}: OwnProps): JSX.Element => {
  const { toggleModal } = useContext(ToDoContext);

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
        <EditIcon onClick={() => toggleModal(id)} />
        <TrashIcon onClick={() => handleRemoveToDo(id)} />
      </Options>
    </CardContainer>
  );
};

export const Card = React.memo(CardDefault, (prev, next) => {
  return Object.is(prev.toDo, next.toDo);
});
