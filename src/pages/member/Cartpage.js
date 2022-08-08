import React from 'react'
import { Link } from 'react-router-dom'

function Cartpage() {
  return (
    <main>
	
{/* <!-- ======================= */}
{/* Page Banner START --> */}
<section className="py-0">
	<div className="container">
		<div className="row">
			<div className="col-12">
				<div className="bg-light p-4 text-center rounded-3">
					<h1 className="m-0">My cart</h1>
					{/* <!-- Breadcrumb --> */}
					<div className="d-flex justify-content-center">
						<nav aria-label="breadcrumb">
							<ol className="breadcrumb breadcrumb-dots mb-0">
								<li className="breadcrumb-item"><a href="#">Home</a></li>
								<li className="breadcrumb-item"><a href="#">Courses</a></li>
								<li className="breadcrumb-item active" aria-current="page">Cart</li>
							</ol>
						</nav>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
{/* <!-- ======================= */}
{/* Page Banner END --> */}

{/* <!-- ======================= */}
{/* Page content START --> */}
<section className="pt-5">
	<div className="container">
	
		<div className="row g-4 g-sm-5">
			{/* <!-- Main content START --> */}
			<div className="col-lg-8 mb-4 mb-sm-0">
				<div className="card card-body p-4 shadow">
					{/* <!-- Alert --> */}
					<div className="alert alert-danger alert-dismissible d-flex justify-content-between align-items-center fade show py-3 pe-2" role="alert">
						<div>
							<span className="fs-5 me-1">🔥</span>
							These courses are at a limited discount, please checkout within<strong className="text-danger ms-1">2 days and 18 hours</strong>
						</div>
						<button type="button" className="btn btn-link mb-0 text-end" data-bs-dismiss="alert" aria-label="Close"><i className="bi bi-x-lg text-dark"></i></button>
					</div>



					<div className="table-responsive border-0 rounded-3">
						{/* <!-- Table START --> */}
						<table className="table align-middle p-4 mb-0">
							{/* <!-- Table head --> */}
							{/* <!-- Table body START --> */}
							<tbody className="border-top-0">
								{/* <!-- Table item --> */}
								<tr>
									{/* <!-- Course item --> */}
									<td>
										<div className="d-lg-flex align-items-center">
											{/* <!-- Image --> */}
											<div className="w-100px w-md-80px mb-2 mb-md-0">
												<img src={require("../../assets/images/courses/4by3/08.jpg")} className="rounded" alt="" />
											</div>
											{/* <!-- Title --> */}
											<h6 className="mb-0 ms-lg-3 mt-2 mt-lg-0">	
												<a href="#">Building Scalable APIs with GraphQL</a>
											</h6>
										</div>
									</td>

									{/* <!-- Amount item --> */}
									<td className="text-center">
										<h5 className="text-success mb-0">$350</h5>
									</td>
									{/* <!-- Action item --> */}
									<td>
										<a href="#" className="btn btn-sm btn-success-soft px-2 me-1 mb-1 mb-md-0"><i className="far fa-fw fa-edit"></i></a>
										<button className="btn btn-sm btn-danger-soft px-2 mb-0"><i className="fas fa-fw fa-times"></i></button>
									</td>
								</tr>

								{/* <!-- Table item --> */}
								<tr>
									{/* <!-- Course item --> */}
									<td>
										<div className="d-lg-flex align-items-center">
											{/* <!-- Image --> */}
											<div className="w-100px w-md-80px mb-2 mb-md-0">
												<img src={require("../../assets/images/courses/4by3/10.jpg")} className="rounded" alt="" />
											</div>
											{/* <!-- Title --> */}
											<h6 className="mb-0 ms-lg-3 mt-2 mt-lg-0">	
												<a href="#">Bootstrap 5 From Scratch</a>
											</h6>
										</div>
									</td>

									{/* <!-- Amount item --> */}
									<td className="text-center">
										<h5 className="text-success mb-0">$150</h5>
									</td>
									{/* <!-- Action item --> */}
									<td>
										<a href="#" className="btn btn-sm btn-success-soft px-2 me-1 mb-1 mb-md-0"><i className="far fa-fw fa-edit"></i></a>
										<button className="btn btn-sm btn-danger-soft px-2 mb-0"><i className="fas fa-fw fa-times"></i></button>
									</td>
								</tr>
							</tbody>
						</table>
					</div>

					{/* <!-- Coupon input and button --> */}
					<div className="row g-3 mt-2">
						<div className="col-md-6">
							<div className="input-group">
								<input className="form-control form-control " placeholder="COUPON CODE" />
								<button type="button" className="btn btn-primary">Apply coupon</button>
							</div>
						</div>
						{/* <!-- Update button --> */}
						<div className="col-md-6 text-md-end">
							<button className="btn btn-primary mb-0" disabled>Update cart</button>
						</div>
					</div>	
				</div>
			</div>
			{/* <!-- Main content END --> */}

			{/* <!-- Right sidebar START --> */}
			<div className="col-lg-4">
				{/* <!-- Card total START --> */}
				<div className="card card-body p-4 shadow">
					{/* <!-- Title --> */}
					<h4 className="mb-3">Cart Total</h4>

					{/* <!-- Price and detail --> */}
					<ul className="list-group list-group-borderless mb-2">
						<li className="list-group-item px-0 d-flex justify-content-between">
							<span className="h6 fw-light mb-0">Original Price</span>
							<span className="h6 fw-light mb-0 fw-bold">$500</span>
						</li>
						<li className="list-group-item px-0 d-flex justify-content-between">
							<span className="h6 fw-light mb-0">Coupon Discount</span>
							<span className="text-danger">-$20</span>
						</li>
						<li className="list-group-item px-0 d-flex justify-content-between">
							<span className="h5 mb-0">Total</span>
							<span className="h5 mb-0">$480</span>
						</li>
					</ul>

					{/* <!-- Button --> */}
					<div className="d-grid">
						<Link to='/checkout' className="btn btn-lg btn-success">Proceed to Checkout</Link>
					</div>

					{/* <!-- Content --> */}
					<p className="small mb-0 mt-2 text-center">By completing your purchase, you agree to these <a href="#"><strong>Terms of Service</strong></a></p>

				</div>
				{/* <!-- Card total END --> */}
			</div>
			{/* <!-- Right sidebar END --> */}
            </div>
		{/* <!-- Row END --> */}
	</div>
</section>
{/* <!-- ======================= */}
{/* Page content END --> */}

</main>
  )
}

export default Cartpage