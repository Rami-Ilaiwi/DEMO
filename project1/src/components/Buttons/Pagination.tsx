import React, { useState, useEffect } from "react";
import TablePagination from "@material-ui/core/TablePagination";

interface PaginationProps {
  articlesCount: number;
  page: number;
  onChangePage: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = props => {
  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null,
    page: number
  ) => {
    props.onChangePage(page);
  };

  return (
    <>
      <TablePagination
        page={props.page}
        component="nav"
        rowsPerPage={10}
        count={props.articlesCount}
        onChangePage={handleChangePage}
        rowsPerPageOptions={[10]}
      />
    </>
  );
};

export default Pagination;
