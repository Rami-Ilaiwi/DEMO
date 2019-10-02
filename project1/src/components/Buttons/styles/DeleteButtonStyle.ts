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
      border: "1px solid transparent",
      cursor: "pointer"
    },

    delete: {
      color: "#b85c5c",
      backgroundImage: "none",
      backgroundColor: "transparent",
      borderColor: "#b85c5c"
    },

    icon: {
      fontSize: "inherit",
      cursor: "pointer"
    }
  });
