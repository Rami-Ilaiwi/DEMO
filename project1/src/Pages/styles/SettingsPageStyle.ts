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
    marginLeft: "410px"
  },
  logout: {
    fontSize: "1.25rem",
    textTransform: "none",
    borderRadius: "0.3rem",
    fontWeight: "normal",
    verticalAlign: "middle",
    opacity: 0.8,
    borderColor: "#b85c5c",
    color: "#b85c5c",
    backgroundColor: "transparent",
    "&:hover, &focus, &active": {
      color: "#fff",
      backgroundColor: "#b85c5c",
      borderColor: " #b85c5c"
    }
  }
});
