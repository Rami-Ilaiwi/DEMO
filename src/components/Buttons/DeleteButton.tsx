import React from "react";
import DeleteForeverRoundedIcon from "@material-ui/icons/DeleteForeverRounded";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import { styles } from "./styles/DeleteButtonStyle";
import Button from "@material-ui/core/Button";

interface DeleteButtonProps {
  onDelete: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const DeleteButton: React.FC<
  DeleteButtonProps & WithStyles<typeof styles>
> = props => {
  return (
    <Button
      onClick={props.onDelete}
      className={`${props.classes.root} ${props.classes.delete}`}
    >
      <DeleteForeverRoundedIcon className={props.classes.icon} />
      <span> Delete Article</span>
    </Button>
  );
};

export default withStyles(styles)(DeleteButton);
