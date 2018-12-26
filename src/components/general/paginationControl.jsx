import React from "react";
import _ from "lodash";

// const loadPages = pages => {
//   // obs: This array also can be load with lodash (npm i lodash)
//   const pagesArray = [];
//   for (let p = 1; p <= pages; p++) {
//     pagesArray.push(p);
//   }
//   return pagesArray;
// };

const PaginationControl = props => {
  const { listSize, pageSize, currentPage, onPageChange } = props;
  const pages = Math.ceil(listSize / pageSize);
  if (pages !== 0 && pages < currentPage) {
    onPageChange(pages);
  }
  if (pages <= 1) {
    return null;
  }
  const pagesArray = _.range(1, pages + 1);
  return (
    <nav aria-label="Page navigation">
      <ul className="pagination">
        {pagesArray.map(page => (
          <li
            className={page === currentPage ? "page-item active" : "page-item"}
            key={page}
          >
            <a className="page-link" onClick={() => onPageChange(page)}>
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default PaginationControl;
