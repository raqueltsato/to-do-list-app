import { AddIcon, Button, Title } from "./styles";
import { OwnProps } from "./types";

const AddButton = ({ name, onClick }: OwnProps): React.ReactNode => {
  return (
    <Button onClick={onClick} data-isround={!name}>
      {name ? <Title>{name}</Title> : <AddIcon />}
    </Button>
  );
};

export default AddButton;
