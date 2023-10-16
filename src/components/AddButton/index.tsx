import { AddIcon, Button, Title } from "./styles";
import { OwnProps } from "./types";

const AddButton = ({
  name,
  onClick,
  "data-testid": testId,
}: OwnProps): React.ReactNode => {
  return (
    <Button onClick={onClick} data-isround={!name} data-testid={testId}>
      {name ? <Title>{name}</Title> : <AddIcon />}
    </Button>
  );
};

export default AddButton;
