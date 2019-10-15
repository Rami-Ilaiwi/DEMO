import { createStyles } from "@material-ui/core/styles";

export const styles = createStyles({
  input: {
    backgroundColor: "#fff",
    width: "600px",
    "& label.Mui-focused": {
      color: "rgb(92, 184, 92)"
    },

    "& .MuiOutlinedInput-root": {
      "&:hover fieldset": {
        borderColor: "#449D44"
      },
      "&.Mui-focused fieldset": {
        borderColor: "rgb(92, 184, 92)"
      }
    }
  }
});
