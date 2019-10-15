import { createStyles } from "@material-ui/core/styles";

export const styles = () =>
  createStyles({
    root: {
      backgroundColor: "#f3f3f3",
      width: "100%",
      color: "#373a3c",
      marginTop: "1%"
    },
    title: {
      fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
      color: "inherit",
      fontSize: "2.5rem",
      padding: "10px 0px 5px 0px",
      textAlign: "center"
    },
    container: {
      width: "55%"
    },
    avatar: {
      width: 110,
      height: 110,
      margin: 10
    },
    bio: {
      color: "#aaa",
      fontWeight: "lighter",
      margin: "0 auto 0.5rem auto"
    },
    banner: {
      padding: 10
    }
  });
