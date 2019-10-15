import React from "react";
import EditRoundedIcon from "@material-ui/icons/EditRounded";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import { styles } from "./styles/EditButtonStyle";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

interface EditButtonProps {
  onEdit: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  slug: string;
}

const EditButton: React.FC<
  EditButtonProps & WithStyles<typeof styles>
> = props => {
  return (
    <>
      <Button className={props.classes.button}>
        <Link
          to={`/editor/${props.slug}`}
          className={`${props.classes.root} ${props.classes.edit}`}
        >
          <EditRoundedIcon className={props.classes.icon} />
          <span> Edit Article</span>
        </Link>
      </Button>
    </>
  );
};

export default withStyles(styles)(EditButton);
