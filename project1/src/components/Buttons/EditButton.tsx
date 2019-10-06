import React from "react";
import EditRoundedIcon from "@material-ui/icons/EditRounded";
import Typography from "@material-ui/core/Typography";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import { styles } from "./styles/EditButtonStyle";
import { Link } from "react-router-dom";

interface EditButtonProps {
  onEdit: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  slug: string;
}

const EditButton: React.FC<
  EditButtonProps & WithStyles<typeof styles>
> = props => {
  return (
    <Link
      to={`/editor/${props.slug}`}
      className={`${props.classes.root} ${props.classes.edit}`}
    >
      <EditRoundedIcon className={props.classes.icon} />
      <span> Edit Article</span>
    </Link>
  );
};

export default withStyles(styles)(EditButton);
