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
  handleDoneToDo,
}: OwnProps): JSX.Element => {
  return (
    <CardContainer>
      <CheckboxContainer>
        <Checkbox className="checkmark">
          <Checkmark checked={done} onClick={() => handleDoneToDo(id)} />
        </Checkbox>
      </CheckboxContainer>
      <Title>{description}</Title>
      <DueToDateTag>{dueToDate}</DueToDateTag>
      <TrashIcon />
    </CardContainer>
  );
};

export default Card;
