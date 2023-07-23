import React from "react";
import ReactPaginate from "react-paginate";

const Pagination = () => {
  const handlePageClick = () => {
    
  };
  return (
    <div>
      <ReactPaginate
        breakLabel="..."
        breakClassName="break"
        breakLinkClassName="break-link"
        pageClassName="page"
        pageLinkClassName="page-link"
        activeClassName="active-page"
        activeLinkClassName="active-link"
        previousClassName="PN-btn"
        previousLinkClassName="PN-btn-link"
        nextClassName="PN-btn"
        nextLinkClassName="PN-btn-link"
        nextLabel="التالي >"
        onPageChange={(e) => handlePageClick(e.selected + 1)}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={100}
        previousLabel="< السابق"
        containerClassName=" pajContainer "
      />
    </div>
  );
};

export default Pagination;
