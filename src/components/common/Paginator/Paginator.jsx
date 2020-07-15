import React from 'react';
import classes from './Paginator.module.scss';

const Paginator = ({ totalUsersCount, pageSize, currentPage, onPageChanged }) => {
  let pagesCount = Math.ceil(
    totalUsersCount / pageSize
  );
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
    <div className={classes.wrapper}>
      <div className={classes.pages}>
        {pages.map((page) => {
          if (page <= 20) {
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
          }
        })}
      </div>
    </div>
  );
};

export default Paginator;
