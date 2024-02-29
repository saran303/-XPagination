import React from 'react'
import styles from './Pagination.module.css'
const Pagination = ({ nPages, currentPage, setCurrentPage }) => {   

    const goToNextPage = () => {
            if(currentPage !== nPages) setCurrentPage(currentPage + 1)
    }
    const goToPrevPage = () => {
        if(currentPage !== 1) setCurrentPage(currentPage - 1)
    }
    return (
        <nav>
            <div className={styles.paginationCSS}>
                <button onClick={goToPrevPage} className={styles.btn}>Previous</button>
                <div className={styles.pageNum}>{currentPage }</div>
                <button onClick={goToNextPage} className={styles.btn}>Next</button>

            </div>
        </nav>
    )
}

export default Pagination