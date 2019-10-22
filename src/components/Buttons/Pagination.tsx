import React from "react";
import TablePagination from "@material-ui/core/TablePagination";

interface PaginationProps {
  articlesCount: number;
  page: number;
  onChangePage: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  articlesCount,
  page,
  onChangePage
}) => {
  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null,
    page: number
  ) => {
    onChangePage(page);
  };

  return (
    <>
      <TablePagination
        page={page}
        component="nav"
        rowsPerPage={10}
        count={articlesCount}
        onChangePage={handleChangePage}
        rowsPerPageOptions={[10]}
      />
    </>
  );
};

export default Pagination;
