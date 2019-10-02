import React, { useState, useEffect } from "react";
import { createStyles, withStyles, WithStyles } from "@material-ui/core/styles";
import TablePagination from "@material-ui/core/TablePagination";

export const styles = () =>
  createStyles({
    root: {
      border: "1px solid #ddd",
      position: "relative",
      padding: "0.5rem 0.75rem",
      minWidth: "20px",
      minHeight: "20px"
    },

    primary: {
      color: "#5CB85C",
      backgroundColor: "#fff",
      textDecoration: "none"
    },
    secondary: {
      color: "#fff",
      backgroundColor: "#5CB85C",
      textDecoration: "underline"
    }
  });

interface PaginationProps {
  numberOfPages: number;
}

const Pagination: React.FC<
  PaginationProps & WithStyles<typeof styles>
> = props => {
  // class Pagination extends React.Component<
  //   PaginationProps & WithStyles<typeof styles>
  // > {
  const [value, setValue] = useState(1);
  const [numberOfPages, setNumberOfPages] = useState(0);
  const [page, setPage] = useState(props.numberOfPages);

  useEffect(() => {
    setNumberOfPages(props.numberOfPages);
  }, []);
  const handleChange = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null,
    page: number
  ) => {
    // this.setState({ value: event.currentTarget.id });
  };

  const classes = props.classes;
  return (
    <>
      {console.log(numberOfPages)}
      <TablePagination
        page={0}
        component="nav"
        rowsPerPage={10}
        count={500}
        onChangePage={handleChange}
        rowsPerPageOptions={[10]}
      />

      {/* <button
        className={`${classes.root} ${
          isActive(1) ? classes.secondary : classes.primary
        }`}
        onClick={handleChange}
        id="1"
      >
        1
      </button>
      <button
        className={`${classes.root} ${
          isActive(2) ? classes.secondary : classes.primary
        }`}
        onClick={handleChange}
        id="2"
      >
        2
      </button>
      <button
        className={`${classes.root} ${
          isActive(3) ? classes.secondary : classes.primary
        }`}
        onClick={handleChange}
        id="3"
      >
        3
      </button>
      <button
        className={`${classes.root} ${
          isActive(4) ? classes.secondary : classes.primary
        }`}
        onClick={handleChange}
        id="4"
      >
        4
      </button> */}
    </>
  );
};

export default withStyles(styles)(Pagination);
