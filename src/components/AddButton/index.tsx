import { AddIcon, Button } from "./styles";
import { OwnProps } from "./types";

const AddButton = ({ onClick }: OwnProps): React.ReactNode => {
  return (
    <Button onClick={onClick}>
      <AddIcon />
    </Button>
  );
};

export default AddButton;
