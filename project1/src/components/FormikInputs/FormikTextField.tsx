import React from "react";
import Grid from "@material-ui/core/Grid";
import { Field, FieldProps, ErrorMessage } from "formik";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import { styles } from "./styles/FormikTextFieldStyle";
import { PropTypes } from "@material-ui/core";

interface FormikTextFieldProps {
  name: string;
  label: string;
  margin: PropTypes.Margin;
  type?: string;
  multiline?: boolean;
  rows?: string;
}

const FormikTextField: React.FC<
  FormikTextFieldProps & WithStyles<typeof styles>
> = props => {
  return (
    <Grid item>
      {/* <FormikTextField /> */}
      <Field name={props.name}>
        {({ field }: FieldProps) => {
          return (
            <TextField
              {...field}
              type={props.type}
              label={props.label}
              margin={props.margin}
              variant="outlined"
              className={props.classes.input}
              multiline={props.multiline ? props.multiline : false}
              rows={props.rows ? props.rows : "1"}
            />
          );
        }}
      </Field>
      <Typography className={props.classes.error}>
        <ErrorMessage name={props.name} />
      </Typography>
    </Grid>
  );
};

export default withStyles(styles)(FormikTextField);
