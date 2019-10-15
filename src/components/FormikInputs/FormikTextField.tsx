import React from "react";
import Grid from "@material-ui/core/Grid";
import { Field, FieldProps, ErrorMessage } from "formik";
import TextField, { OutlinedTextFieldProps } from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import { styles } from "./styles/FormikTextFieldStyle";

interface FormikTextFieldProps extends Omit<OutlinedTextFieldProps, "variant"> {
  name: string;
}

const FormikTextField: React.FC<
  FormikTextFieldProps & WithStyles<typeof styles>
> = props => {
  return (
    <Grid item>
      <Field name={props.name}>
        {({ field }: FieldProps) => {
          return (
            <TextField
              {...props}
              {...field}
              className={props.classes.input}
              variant="outlined"
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
