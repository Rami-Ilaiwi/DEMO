import { createStyles } from "@material-ui/core/styles";

export const styles = () =>
  createStyles({
    footer: {
      position: "fixed",
      bottom: 0,
      width: "100%",
      background: "linear-gradient(#485563, #29323c)",
      textAlign: "center",
      padding: "15px",
      boxShadow: "0 5px 5px 5px rgba(0, 0, 0, 0.4)",
      zIndex: 999,
      color: "#fff !important",
      fontSize: "1.5rem",
      display: "block",
      "&:hover": {
        textDecoration: "underline"
      }
    }
  });
