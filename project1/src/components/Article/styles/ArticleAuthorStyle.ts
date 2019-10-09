import { createStyles } from "@material-ui/core/styles";

export const styles = () =>
  createStyles({
    image: {
      height: "32px",
      width: "32px",
      borderRadius: "30px",
      boxSizing: "inherit",
      position: "relative"
    },

    date: {
      color: "#bbb",
      fontSize: "0.8rem",
      display: "block",
      fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif"
    },

    author: {
      fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
      textDecoration: "none",
      color: "#5CB85C",
      "&:hover": {
        textDecoration: "underline",
        color: "#3d8b3d"
      }
    }
  });
