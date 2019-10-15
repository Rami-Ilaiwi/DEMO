import { createStyles } from "@material-ui/core/styles";

export const styles = createStyles({
  input: {
    backgroundColor: "#fff",
    width: "500px",
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
  },
  link: {
    color: "#5CB85C !important",
    textDecoration: "none",
    "&:hover": {
      color: "#3d8b3d !important",
      textDecoration: "underline"
    },
    "&:focus": {
      outline: "thin dotted",
      outlineDffset: "-2px"
    }
  },
  error: {
    color: "#B85C5C",
    fontWeight: "bold"
  }
});
