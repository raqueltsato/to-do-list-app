import { ToDoType } from "../../contexts/toDoContext/types";
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

const Card = ({
  toDo: { id, description, dueToDate, done },
}: OwnProps): JSX.Element => {
  return (
    <CardContainer>
      <CheckboxContainer>
        <Checkbox className="checkmark">
          <Checkmark checked={done} />
        </Checkbox>
      </CheckboxContainer>
      <Title>{description}</Title>
      <DueToDateTag>{dueToDate}</DueToDateTag>
      <TrashIcon />
    </CardContainer>
  );
};

export default Card;
