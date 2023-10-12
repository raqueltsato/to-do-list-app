import {
  CardContainer,
  Checkbox,
  CheckboxContainer,
  Checkmark,
  DueToDateTag,
  Title,
  TrashIcon,
} from "./styles";

const Card = (): JSX.Element => {
  return (
    <CardContainer>
      <CheckboxContainer>
        <Checkbox className="checkmark">
          <Checkmark disabled={false} />
        </Checkbox>
      </CheckboxContainer>
      <Title>Comer chocolate</Title>
      <DueToDateTag>15/10/2023</DueToDateTag>
      <TrashIcon />
    </CardContainer>
  );
};

export default Card;
