import React from "react";
import DeleteForeverRoundedIcon from "@material-ui/icons/DeleteForeverRounded";
import { createStyles, withStyles, WithStyles } from "@material-ui/core/styles";

const styles = () =>
  createStyles({
    root: {
      float: "right",
      backgroundColor: "transparent",
      borderColor: "#5cb85c",
      whiteSpace: "nowrap",
      opacity: 0.8,
      borderRadius: "0.2rem",
      fontSize: "0.875rem",
      padding: "0.25rem 0.5rem",
      marginRight: "1%",
      border: "1px solid transparent",
      cursor: "pointer"
    },

    delete: {
      color: "#b85c5c",
      backgroundImage: "none",
      backgroundColor: "transparent",
      borderColor: "#b85c5c"
    },

    icon: {
      fontSize: "inherit",
      cursor: "pointer"
    }
  });

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
