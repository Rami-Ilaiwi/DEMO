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

const EditButton: React.FC<EditButtonProps & WithStyles<typeof styles>> = ({
  onEdit,
  slug,
  classes
}) => {
  return (
    <>
      <Button className={classes.button}>
        <Link
          to={`/editor/${slug}`}
          className={`${classes.root} ${classes.edit}`}
        >
          <EditRoundedIcon className={classes.icon} />
          <span> Edit Article</span>
        </Link>
      </Button>
    </>
  );
};

export default withStyles(styles)(EditButton);
