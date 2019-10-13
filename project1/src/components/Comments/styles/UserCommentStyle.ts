import { createStyles } from "@material-ui/core/styles";

export const styles = () =>
  createStyles({
    input: {
      backgroundColor: "#fff",
      width: "100%",
      "& label.Mui-focused": {
        color: "rgb(92, 184, 92)"
      },

      "& .MuiOutlinedInput-root": {
        "&:hover fieldset": {
          borderColor: "#449D44"
        },
        "&.Mui-focused fieldset": {
          borderColor: "rgb(92, 184, 92)"
        }
      }
    },

    root: {
      maxWidth: 600,
      boxShadow: "none !important",
      position: "relative",
      display: "block",
      marginBottom: "0.75rem",
      borderRadius: "0.25rem",
      marginLeft: "19%",
      borderTop: "1px solid #e5e5e5",
      fontSize: "0.8rem",
      fontWeight: 300
    },
    postComment: {
      textAlign: "center",
      whiteSpace: "nowrap",
      verticalAlign: "middle",
      cursor: "pointer",
      userSelect: "none",
      border: "1px solid transparent",
      padding: "0.25rem 0.5rem",
      fontSize: "0.875rem",
      borderRadius: "0.2rem",
      opacity: 0.8,
      color: "white",
      backgroundColor: "#5cb85c",
      float: "right",
      "&:hover, &focus, &active": {
        color: "#fff",
        backgroundColor: "#449d44",
        borderColor: " #419641"
      },
      "&active:hover, active:focus": {
        color: "#fff",
        backgroundColor: "#398439",
        borderColor: "#2d672d"
      }
    },
    comment: {
      display: "block",
      paddingTop: "0.5rem",
      width: "100%",
      minWidth: "60px",
      minHeight: "150px",
      lineHeight: "1.25",
      color: "#55595c",
      backgroundColor: "#fff",
      backgroundImage: "none",
      backgroundClip: "padding-box",
      border: "1px solid rgba(0, 0, 0, 0.15)",
      borderRadius: "0.25rem",
      fontFamily: "'Source Sans Pro', sans-serif",
      fontSize: "1.25rem",
      resize: "vertical"
    },
    userImage: { height: "30px", width: "30px", borderRadius: "30px" }
  });
