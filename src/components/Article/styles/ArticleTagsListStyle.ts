import { createStyles } from "@material-ui/core/styles";

export const styles = () =>
  createStyles({
    root: {},

    list: {
      fontSize: "15px !important",
      border: "1px solid #ddd",
      color: "#aaa !important",
      display: "inline-block",
      marginRight: "3px",
      paddingRight: "0.6em",
      paddingLeft: "0.6em",
      borderRadius: "10rem"
    },

    tag: { marginBottom: "1%" },

    icon: {
      fontSize: "inherit",
      cursor: "pointer"
    }
  });
