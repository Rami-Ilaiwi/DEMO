import { createStyles } from "@material-ui/core/styles";

export const styles = () =>
  createStyles({
    root: {
      marginTop: "1%"
    },
    title: {
      fontFamily: "'Titillium Web', sans-serif",
      fontSize: "1.5rem !important",
      textDecoration: "none",
      color: "#5cb85c !important"
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
      fontSize: "15px !important"
    },
    link: {
      color: "inherit",
      textDecoration: "none"
    }
  });
