import React from 'react'

function Pagination({links, changePage, currentPage}) {
  return (
    <div className="col-12">
        <nav className="mt-4 d-flex justify-content-center" aria-label="navigation">
            <ul className="pagination pagination-primary-soft d-inline-block d-md-flex rounded mb-0">
                {links.map((val, idx) => {
                    return (idx == 0) ? (<li className="page-item mb-0"><a className="page-link" href="#" tabIndex="-1" onClick={() => changePage(currentPage-1)}><i className="fas fa-angle-double-left"></i></a></li>)
                    : (idx == (links.length - 1)) ? (<li className="page-item mb-0"><a className="page-link" href="#" onClick={() => changePage(currentPage+1)}><i className="fas fa-angle-double-right"></i></a></li>)
                    : (<li className={(val.active) ? "page-item mb-0 active" : "page-item mb-0"}><a className="page-link" href="#" tabIndex="-1" onClick={() => changePage(idx)}>{idx}</a></li>)
                })}
            </ul>
        </nav>
    </div>
  )
}

export default Pagination