import { createStyles } from "@material-ui/core/styles";

export const styles = () =>
  createStyles({
    root: {
      boxShadow: "none",
      position: "relative",
      display: "block",
      marginBottom: "0.75rem",
      borderRadius: "0.25rem",
      marginLeft: "19%"
    },

    commentAuthor: {
      display: "inline-block",
      color: "inherit",
      textDecoration: "none"
    },

    commentAuthorImage: {
      display: "inline-block",
      verticalAlign: "middle",
      height: "30px",
      width: "30px",
      borderRadius: "30px"
    },

    cardWidth: {
      maxWidth: 600
    },

    date: {
      color: "#bbb",
      fontSize: "0.8rem",
      display: "block"
    }
  });

// import { makeStyles } from "@material-ui/core/styles";

// const useStyles = makeStyles({
//   cardWidth: {
//     maxWidth: 600
//   }
// });

// const classes = useStyles();
