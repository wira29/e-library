import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function Card({ col }) {
  return (
    <div className={col}>
        <div className='card shadow h-100'>
            <div className='card-body'>
                <Skeleton height={100} className="mb-3" />
                <Skeleton count={4} />
            </div>
        </div>
    </div>
  )
}

export default Card