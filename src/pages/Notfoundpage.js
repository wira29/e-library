import React from 'react'
import { Link } from 'react-router-dom'

import svg from "../assets/images/element/error404-01.svg"

function Notfoundpage() {
  return (
    <main>
<section className="pt-5">
	<div className="container">
		<div className="row">
			<div className="col-12 text-center">
				{/* <!-- Image --> */}
				<img src={svg} className="h-200px h-md-400px mb-4" alt="" />
				{/* <!-- Title --> */}
				<h1 className="display-1 text-danger mb-0">404</h1>
				{/* <!-- Subtitle --> */}
				<h2>Oh no, something went wrong!</h2>
				{/* <!-- info --> */}
				<p className="mb-4">Either something went wrong or this page doesn't exist anymore.</p>
				{/* <!-- Button --> */}
				<Link to='/' className="btn btn-primary mb-0">Take me to Homepage</Link>
			</div>
		</div>
	</div>
</section>
</main>
  )
}

export default Notfoundpage