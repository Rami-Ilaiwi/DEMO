import { createStyles } from "@material-ui/core/styles";

export const styles = () =>
  createStyles({
    root: {
      backgroundColor: "transparent",
      borderColor: "#5cb85c",
      whiteSpace: "nowrap",
      opacity: 0.8,
      borderRadius: "0.2rem",
      fontSize: "0.875rem",
      padding: "0.25rem 0.5rem",
      textDecoration: "none",
      border: "1px solid transparent",
      cursor: "pointer"
    },

    edit: {
      color: "#999",
      backgroundColor: "transparent",
      border: "1px solid #999",
      "&:hover": {
        backgroundColor: "#CCC"
      },
      "&:active": {
        backgroundColor: "#999",
        color: "#CCC"
      }
    },

    icon: {
      fontSize: "inherit",
      cursor: "pointer"
    }
  });
