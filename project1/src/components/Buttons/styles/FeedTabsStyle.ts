import { createStyles } from "@material-ui/core/styles";

export const styles = () =>
  createStyles({
    root: {
      //   padding: "0.25rem 0.5rem",
      //   fontSize: "0.875rem",
      //   borderRadius: "0.2rem",
      //   fontWeight: "normal",
      //   lineHeight: "1.25",
      //   textAlign: "center",
      //   verticalAlign: "middle",
      //   cursor: "pointer",
      //   borderBottom: "1px solid",
      //   color: "#5cb85c",
      //   backgroundColor: "transparent",
      //   borderColor: "#5cb85c"
      flexGrow: 1
    },
    favorite: {
      color: "#5cb85c",
      backgroundColor: "transparent",
      borderColor: "#5cb85c"
    },

    unfavorite: {
      color: "#fff",
      backgroundColor: "#5cb85c",
      borderColor: "#5cb85c"
    },
    icon: {
      fontSize: "inherit"
    },
    indicator: {
      backgroundColor: "#5cb85c"
    }
  });
