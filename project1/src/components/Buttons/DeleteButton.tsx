import React from "react";
import DeleteForeverRoundedIcon from "@material-ui/icons/DeleteForeverRounded";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import { styles } from "./styles/DeleteButtonStyle";

interface DeleteButtonProps {
  onDelete: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const DeleteButton: React.FC<
  DeleteButtonProps & WithStyles<typeof styles>
> = props => {
  return (
    <button
      onClick={props.onDelete}
      className={`${props.classes.root} ${props.classes.delete}`}
    >
      <DeleteForeverRoundedIcon
        className={props.classes.icon}
      ></DeleteForeverRoundedIcon>
      <span> Delete Article</span>
    </button>
  );
};

export default withStyles(styles)(DeleteButton);
