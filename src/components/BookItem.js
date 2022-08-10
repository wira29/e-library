import React from 'react'
import { Link } from 'react-router-dom'

function BookItem({ destination, image, title, desc, author, publisher, categories, id}) {
  return (
    <div className="col-sm-6 col-lg-4 col-xl-3">
        <div className="card shadow h-100">
            {/* <!-- Image --> */}
            <img src={`http://192.168.0.2:8000/storage/${image}`} className="card-img-top" alt="course image"/>
            {/* <!-- Card body --> */}
            <div className="card-body pb-0">
                {/* <!-- Badge and favorite --> */}
                {/* <div className="d-flex justify-content-start mb-2">
                    {
                        categories.map((e) => (
                            <a href="#" className="badge bg-purple bg-opacity-10 text-purple me-2">{e}</a>
                        ))
                    }
                </div> */}
                {/* <!-- Title --> */}
                <h5 className="card-title fw-normal"><Link to={`/books/${destination}`} state={{ id: id }}>{title}</Link></h5>
                <p className="mb-2 text-truncate-2">{desc}</p>
            </div>
            {/* <!-- Card footer --> */}
            <div className="card-footer pt-0 pb-3">
                <hr/>
                <div className="d-flex justify-content-between">
                    <span className="h6 fw-light mb-0"><i className="far fa-user text-danger me-2"></i>{author}</span>
                    <span className="h6 fw-light mb-0"><i className="fas fa-table text-orange me-2"></i>{publisher}</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BookItem