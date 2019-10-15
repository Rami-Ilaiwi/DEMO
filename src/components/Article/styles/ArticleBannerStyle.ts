import { createStyles } from "@material-ui/core/styles";

export const styles = () =>
  createStyles({
    root: {
      backgroundColor: "#333",
      width: "100%",
      color: "white",
      height: "200px",
      paddingLeft: "15%"
    },
    title: {
      fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
      color: "inherit",
      fontSize: "2.5rem",
      padding: "25px 0px 45px 0px"
    }
  });
