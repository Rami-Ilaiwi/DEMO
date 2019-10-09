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
    },
    card: {
      maxWidth: 345
    },
    media: {
      height: 0,
      paddingTop: "56.25%" // 16:9
    },
    expand: {
      transform: "rotate(0deg)",
      marginLeft: "auto"
    },
    expandOpen: {
      transform: "rotate(180deg)"
    },
    avatar: {}
  });
