import { createStyles } from "@material-ui/core/styles";

export const styles = () =>
  createStyles({
    root: {
      opacity: 0.8,
      borderRadius: "0.2rem",
      fontSize: "0.875rem",
      padding: "2px 6px 2px 6px",
      textDecoration: "none",
      border: "1px solid transparent",
      cursor: "pointer",
      textTransform: "none"
    },

    edit: {
      color: "#999",
      backgroundColor: "transparent",
      border: "1px solid #999",
      "&:hover": {
        backgroundColor: "#f5f5f5"
      }
    },

    icon: {
      fontSize: "inherit",
      cursor: "pointer"
    },
    button: {
      padding: 0
    }
  });
