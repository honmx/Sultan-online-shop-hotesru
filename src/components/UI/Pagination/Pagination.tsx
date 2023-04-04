import React, { Dispatch, FC, SetStateAction, useEffect } from "react";
import IconButton from "../IconButton/IconButton";
import leftArrow from "../../../assets/left-arrow-accent.svg";
import rightArrow from "../../../assets/right-arrow-accent.svg";
import Button from "../Button/Button";
import s from "./Pagination.module.scss";

interface Props {
  countOfPages: number;
  currentPage: number;
  setPage: Dispatch<SetStateAction<number>>;
  className?: string;
}

const Pagination: FC<Props> = ({ countOfPages, currentPage, setPage, className }) => {

  useEffect(() => {
    if (currentPage >= countOfPages) setPage(0);
  }, [countOfPages]);
  
  if (countOfPages === 1) return null;

  const handlePreviousPageClick = () => setPage(prev => prev != 0 ? prev - 1 : prev)

  const handleNextPageClick = () => setPage(prev => prev != countOfPages - 1 ? prev + 1 : prev)

  return (
    <div className={`${s.pagination} ${className}`}>
      <IconButton img={leftArrow} ar={1} w="40px" onClick={handlePreviousPageClick} />
      <div className={s.pages}>
        {
          Array(countOfPages)
            .fill("")
            .slice(0, 5)
            .map((elem, i) => <Button
              key={i}
              className={`${s.pageButton} ${i + (Math.floor(currentPage / 5) * 5) === currentPage && s.activePage}`}
              ar={1}
              w="30px"
              p="0px"
              onClick={() => setPage((Math.floor(currentPage / 5) * 5) + i)}
            >
              {(Math.floor(currentPage / 5) * 5) + i + 1}
            </Button>)
        }
      </div>
      <IconButton img={rightArrow} ar={1} w="40px" onClick={handleNextPageClick} />
    </div>
  )
};

export default Pagination;
