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

const Card = ({
  toDo: { id, description, dueToDate, done },
  handleDoneToDo,
  handleRemoveToDo,
}: OwnProps): JSX.Element => {
  const { t } = useTranslation("locale");
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

export default Card;
