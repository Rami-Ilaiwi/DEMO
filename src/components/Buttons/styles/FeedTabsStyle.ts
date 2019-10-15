import { createStyles } from "@material-ui/core/styles";

export const styles = () =>
  createStyles({
    root: {
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
    },
    tabs: {
      width: "60%",
      marginTop: "1%"
    }
  });
