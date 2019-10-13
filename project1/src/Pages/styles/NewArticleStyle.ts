import { createStyles } from "@material-ui/core/styles";

export const styles = createStyles({
  input: {
    backgroundColor: "#fff",
    width: "700px",
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
  },
  submit: {
    fontSize: "1.25rem",
    textTransform: "none",
    borderRadius: "0.3rem",
    fontWeight: "normal",
    verticalAlign: "middle",
    opacity: 0.8,
    color: "white",
    backgroundColor: "#5cb85c",
    "&:hover, &focus, &active": {
      color: "#fff",
      backgroundColor: "#449d44",
      borderColor: " #419641"
    }
  },
  button: {
    float: "right"
  }
});
