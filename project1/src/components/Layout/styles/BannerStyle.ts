import { createStyles } from "@material-ui/core/styles";

export const styles = () =>
  createStyles({
    root: {
      background: "#5cb85c",
      boxShadow:
        "inset 0 8px 8px -8px rgba(0, 0, 0, 0.3) inset 0 -8px 8px -8px rgba(0, 0, 0, 0.3)",
      marginBottom: "1%"
    },
    contentHeader: {
      textShadow: "0px 1px 3px rgba(0, 0, 0, 0.3)",
      textAlign: "center",
      fontSize: "3.5rem",
      fontFamily: "'Titillium Web', sans-serif",
      color: "#fff",
      padding: "3%"
    },
    contentBody: {
      color: "#fff",
      textAlign: "center",
      fontSize: "1.5rem"
    }
  });
