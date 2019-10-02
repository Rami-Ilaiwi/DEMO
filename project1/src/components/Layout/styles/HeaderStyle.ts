import { createStyles } from "@material-ui/core/styles";

export const styles = () =>
  createStyles({
    root: {
      marginTop: "1%"
    },
    title: {
      textDecoration: "none",
      color: "#5cb85c"
    },
    subtitle: {
      textDecoration: "none",
      color: "rgba(0, 0, 0, 0.8)",
      fontFamily: "'Titillium Web', sans-serif",
      fontSize: "1.5rem"
    },
    userPicture: {
      height: "26px",
      borderRadius: "50px",
      float: "left",
      boxSizing: "inherit",
      marginRight: "5px",
      position: "relative"
    },
    icon: {
      fontSize: "15px"
    },
    logoText: {
      fontFamily: "'Titillium Web', sans-serif",
      fontSize: "1.5rem"
    }
  });
