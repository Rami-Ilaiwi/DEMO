import { createStyles } from "@material-ui/core/styles";

export const styles = createStyles({
  title: {
    fontFamily: "'Source Sans Pro', sans-serif",
    lineHeight: 1.5,
    fontWeight: 500,
    color: "#373a3c",
    marginBottom: 0,
    marginTop: "5%"
  },
  input: {
    marginTop: "1.5%",
    padding: "0.5rem 0.75rem",
    width: "100%",
    lineHeight: "1.25",
    color: "#55595c",
    backgroundColor: "#fff",
    backgroundClip: "padding-box",
    border: "1px solid rgba(0, 0, 0, 0.15)",
    borderRadius: "0.25rem",
    fontFamily: "'Source Sans Pro', sans-serif",
    fontSize: "1.25rem"
  },
  submit: {
    padding: "0.75rem 1.5rem",
    fontSize: "1.25rem",
    borderRadius: "0.3rem",
    marginTop: "1%",
    borderColor: "#5cb85c",
    display: "inline-block",
    fontWeight: "normal",
    lineHeight: "1.25",
    textAlign: "center",
    whiteSpace: "nowrap",
    verticalAlign: "middle",
    cursor: "pointer",
    userSelect: "none",
    border: "1px solid transparent",
    opacity: 0.8,
    color: "white",
    backgroundColor: "#5cb85c",
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
  textarea: {
    maxWidth: "1000px",
    minHeight: "150px",
    resize: "vertical"
  }
});
