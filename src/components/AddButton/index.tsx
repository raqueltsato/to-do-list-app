import { AddIcon, Button, Title } from "./styles";
import { OwnProps } from "./types";

const AddButton = ({
  name,
  onClick,
  "data-testid": testId,
  disabled,
}: OwnProps): React.ReactNode => {
  return (
    <Button
      onClick={onClick}
      data-isround={!name}
      data-testid={testId}
      disabled={disabled}
    >
      {name ? <Title>{name}</Title> : <AddIcon />}
    </Button>
  );
};

export default AddButton;
