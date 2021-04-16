import React , {useState} from 'react';
import s from "./Paginator.module.css";
import cn from "classnames";

let Paginator = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 10}) => {

    let pageCount = Math.ceil(totalItemsCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pageCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return <div className={s.paginator}>
        {portionNumber > 1 &&
        <button onClick={() => { setPortionNumber(portionNumber - 1)}}>PREV</button>}

            {pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map((p) => {
                return <span key={p}
                             className={ cn({[s.selected]: currentPage === p}, s.pageNumber)}
                             onClick={(e) => {
                                 onPageChanged(p)
                             }}>{p}</span>
            })}
        {portionCount > portionNumber &&
        <button onClick={() => {setPortionNumber(portionNumber + 1) }}>NEXT</button> }
        <span className={s.totalTitle}>Total Users Count: </span><span className={s.total}>{totalItemsCount}</span>
        </div>
};


export default Paginator;