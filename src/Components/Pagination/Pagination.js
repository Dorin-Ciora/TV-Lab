import React from 'react';

const Pagination = (props) => {
    const pageLinks = []

    for(let i=1; i <= props.pages + 1; i++) {
        pageLinks.push(<li className='page-link' key={i} onClick={() => props.nextPage(i)}>
            <a>{i}</a>
        </li>)
    }
    return (
        <div className='box'>
        <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center">
    
                {pageLinks}

            </ul>
            </nav>
            </div>
    )
}

export default Pagination;