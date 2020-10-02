import React, { useState } from 'react';
import classes from './Paginator.module.scss';

type Props = {
  totalItemsCount: number
  pageSize: number
  currentPage: number
  onPageChanged: () => void
  portionSize: number
}

const Paginator = ({
  totalItemsCount,
  pageSize,
  currentPage,
  onPageChanged,
  portionSize = 10,
}: Props) => {
  let pagesCount = Math.ceil(totalItemsCount / pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  let portionCount = Math.ceil(pagesCount / portionSize);
  let [portionNumber, setPortionNumber] = useState(1);
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionPageNumber = portionNumber * portionSize;

  return (
    <div className={classes.wrapper}>
      <div className={classes.pages}>
        {portionNumber > 1 && (
          <button
            className={classes.arrow}
            onClick={() => {
              setPortionNumber(portionNumber - 1);
            }}
          >
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 256 256"
              width="15px"
              height="15px"
            >
              <polygon points="207.093,30.187 176.907,0 48.907,128 176.907,256 207.093,225.813 109.28,128 		" />
            </svg>
          </button>
        )}
        {pages
          .filter(
            (page) =>
              page >= leftPortionPageNumber && page <= rightPortionPageNumber
          )
          .map((page) => {
            return (
              <span
                className={
                  currentPage === page
                    ? classes.selectedPage
                    : classes.pageNumber
                }
                onClick={() => {
                  onPageChanged(page);
                }}
              >
                {page}
              </span>
            );
          })}
        {portionCount > portionNumber && (
          <button
            className={classes.arrow}
            onClick={() => {
              setPortionNumber(portionNumber + 1);
            }}
          >
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 256 256"
              width="15px"
              height="15px"
            >
              <polygon points="79.093,0 48.907,30.187 146.72,128 48.907,225.813 79.093,256 207.093,128 		" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

export default Paginator;
