import React from 'react'
import { Link } from 'react-router-dom'

function Mycoursespage() {
  return (
    <main>
	
{/* <!-- ======================= */}
{/* Page Banner START --> */}
<section className="pt-0">
	<div className="container-fluid px-0">
		<div className="card bg-blue h-100px h-md-200px rounded-0" style={{ background: 'url(assets/images/pattern/04.png) no-repeat center center', backgroundSize:'cover' }}>
		</div>
	</div>
	<div className="container mt-n4">
		<div className="row">
			<div className="col-12">
				<div className="card bg-transparent card-body pb-0 px-0 mt-2 mt-sm-0">
					<div className="row d-sm-flex justify-sm-content-between mt-2 mt-md-0">
						{/* <!-- Avatar --> */}
						<div className="col-auto">
							<div className="avatar avatar-xxl position-relative mt-n3">
								<img className="avatar-img rounded-circle border border-white border-3 shadow" src={require("../../assets/images/avatar/09.jpg")} alt="" />
								<span className="badge text-bg-success rounded-pill position-absolute top-50 start-100 translate-middle mt-4 mt-md-5 ms-n3 px-md-3">Pro</span>
							</div>
						</div>
						{/* <!-- Profile info --> */}
						<div className="col d-sm-flex justify-content-between align-items-center">
							<div>
								<h1 className="my-1 fs-4">Lori Stevens</h1>
								<ul className="list-inline mb-0">
									<li className="list-inline-item me-3 mb-1 mb-sm-0">
										<span className="h6">255</span>
										<span className="text-body fw-light">points</span>
									</li>
									<li className="list-inline-item me-3 mb-1 mb-sm-0">
										<span className="h6">7</span>
										<span className="text-body fw-light">Completed courses</span>
									</li>
									<li className="list-inline-item me-3 mb-1 mb-sm-0">
										<span className="h6">52</span>
										<span className="text-body fw-light">Completed lessons</span>
									</li>
								</ul>
							</div>
							{/* <!-- Button --> */}
							<div className="mt-2 mt-sm-0">
								<a href="student-course-list.html" className="btn btn-outline-primary mb-0">View my courses</a>
							</div>
						</div>
					</div>
				</div>

				{/* <!-- Advanced filter responsive toggler START --> */}
				{/* <!-- Divider --> */}
				<hr className="d-xl-none"/>
				<div className="col-12 col-xl-3 d-flex justify-content-between align-items-center">
					<a className="h6 mb-0 fw-bold d-xl-none" href="#">Menu</a>
					<button className="btn btn-primary d-xl-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasSidebar" aria-controls="offcanvasSidebar">
						<i className="fas fa-sliders-h"></i>
					</button>
				</div>
				{/* <!-- Advanced filter responsive toggler END --> */}
			</div>
		</div>
	</div>
</section>
{/* <!-- ======================= */}
{/* Page Banner END --> */}

{/* <!-- ======================= */}
{/* Page content START --> */}
<section className="pt-0">
	<div className="container">
		<div className="row">

			{/* <!-- Left sidebar START --> */}
			<div className="col-xl-3">
				{/* <!-- Responsive offcanvas body START --> */}
				<div className="offcanvas-xl offcanvas-end" tabIndex="-1" id="offcanvasSidebar" aria-labelledby="offcanvasSidebarLabel">
					{/* <!-- Offcanvas header --> */}
					<div className="offcanvas-header bg-light">
						<h5 className="offcanvas-title" id="offcanvasNavbarLabel">My profile</h5>
						<button  type="button" className="btn-close" data-bs-dismiss="offcanvas" data-bs-target="#offcanvasSidebar" aria-label="Close"></button>
					</div>
					{/* <!-- Offcanvas body --> */}
					<div className="offcanvas-body p-3 p-xl-0">
						<div className="bg-dark border rounded-3 pb-0 p-3 w-100">
							{/* <!-- Dashboard menu --> */}
							<div className="list-group list-group-dark list-group-borderless">
								<a className="list-group-item" href="student-dashboard.html"><i className="bi bi-ui-checks-grid fa-fw me-2"></i>Dashboard</a>
								<a className="list-group-item" href="student-subscription.html"><i className="bi bi-card-checklist fa-fw me-2"></i>My Subscriptions</a>
								<a className="list-group-item active" href="student-course-list.html"><i className="bi bi-basket fa-fw me-2"></i>My Courses</a>
								<a className="list-group-item" href="student-course-resume.html"><i className="far fa-fw fa-file-alt me-2"></i>Course Resume</a>
								<a className="list-group-item" href="student-quiz.html"><i className="bi bi-question-diamond fa-fw me-2"></i>Quiz</a>
								<a className="list-group-item" href="student-payment-info.html"><i className="bi bi-credit-card-2-front fa-fw me-2"></i>Payment info</a>
								<a className="list-group-item" href="student-bookmark.html"><i className="bi bi-cart-check fa-fw me-2"></i>Wishlist</a>
								<a className="list-group-item" href="instructor-edit-profile.html"><i className="bi bi-pencil-square fa-fw me-2"></i>Edit Profile</a>
								<a className="list-group-item" href="instructor-setting.html"><i className="bi bi-gear fa-fw me-2"></i>Settings</a>
								<a className="list-group-item" href="instructor-delete-account.html"><i className="bi bi-trash fa-fw me-2"></i>Delete Profile</a>
								<a className="list-group-item text-danger bg-danger-soft-hover" href="#"><i className="fas fa-sign-out-alt fa-fw me-2"></i>Sign Out</a>
							</div>
						</div>
					</div>
				</div>
				{/* <!-- Responsive offcanvas body END --> */}
			</div>
			{/* <!-- Left sidebar END --> */}

			{/* <!-- Main content START --> */}
			<div className="col-xl-9">
				<div className="card bg-transparent border rounded-3">
					{/* <!-- Card header START --> */}
					<div className="card-header bg-transparent border-bottom">
						<h3 className="mb-0">My Courses List</h3>
					</div>
					{/* <!-- Card header END --> */}

					{/* <!-- Card body START --> */}
					<div className="card-body">

						{/* <!-- Search and select START --> */}
						<div className="row g-3 align-items-center justify-content-between mb-4">
							{/* <!-- Content --> */}
							<div className="col-md-8">
								<form className="rounded position-relative">
									<input className="form-control pe-5 bg-transparent" type="search" placeholder="Search" aria-label="Search" />
									<button className="bg-transparent p-2 position-absolute top-50 end-0 translate-middle-y border-0 text-primary-hover text-reset" type="submit">
								<i className="fas fa-search fs-6 "></i>
							</button>
								</form>
							</div>

							{/* <!-- Select option --> */}
							<div className="col-md-3">
								{/* <!-- Short by filter --> */}
								<form>
									<select className="form-select js-choice border-0 z-index-9 bg-transparent" aria-label=".form-select-sm">
										<option value="">Sort by</option>
										<option>Free</option>
										<option>Newest</option>
										<option>Most popular</option>
										<option>Most Viewed</option>
									</select>
								</form>
							</div>
						</div>
						{/* <!-- Search and select END --> */}

						{/* <!-- Course list table START --> */}
						<div className="table-responsive border-0">
							<table className="table table-dark-gray align-middle p-4 mb-0 table-hover">
								{/* <!-- Table head --> */}
								<thead>
									<tr>
										<th scope="col" className="border-0 rounded-start">Course Title</th>
										<th scope="col" className="border-0">Total Lectures</th>
										<th scope="col" className="border-0">Completed Lecture</th>
										<th scope="col" className="border-0 rounded-end">Action</th>
									</tr>
								</thead>

								{/* <!-- Table body START --> */}
								<tbody>
									{/* <!-- Table item --> */}
									<tr>
										{/* <!-- Table data --> */}
										<td>
											<div className="d-flex align-items-center">
												{/* <!-- Image --> */}
												<div className="w-100px">
													<img src={require("../../assets/images/courses/4by3/08.jpg")} className="rounded" alt="" />
												</div>
												<div className="mb-0 ms-2">
													{/* <!-- Title --> */}
													<h6 className="table-responsive-title"><a href="#">Building Scalable APIs with GraphQL</a></h6>
													{/* <!-- Info --> */}
													<div className="overflow-hidden">
														<h6 className="mb-0 text-end">85%</h6>
														<div className="progress progress-sm bg-primary bg-opacity-10">
															<div className="progress-bar bg-primary aos" role="progressbar" data-aos="slide-right" data-aos-delay="200" data-aos-duration="1000" data-aos-easing="ease-in-out" style={{ width: '85%' }} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">
															</div>
														</div>
													</div>
												</div>
											</div>
										</td>

										{/* <!-- Table data --> */}
										<td>56</td>

										{/* <!-- Table data --> */}
										<td>40</td>

										{/* <!-- Table data --> */}
										<td>
											<Link to='/my-courses/test' className="btn btn-sm btn-primary-soft me-1 mb-1 mb-md-0"><i className="bi bi-play-circle me-1"></i>Continue</Link>
										</td>
									</tr>

									{/* <!-- Table item --> */}
									<tr>
										{/* <!-- Table data --> */}
										<td>
											<div className="d-flex align-items-center">
												{/* <!-- Image --> */}
												<div className="w-100px">
													<img src={require("../../assets/images/courses/4by3/03.jpg")} className="rounded" alt="" />
												</div>
												<div className="mb-0 ms-2">
													{/* <!-- Title --> */}
													<h6 className="table-responsive-title"><a href="#">Create a Design System in Figma</a></h6>
													{/* <!-- Info --> */}
													<div className="overflow-hidden">
														<h6 className="mb-0 text-end">100%</h6>
														<div className="progress progress-sm bg-primary bg-opacity-10">
															<div className="progress-bar bg-primary aos" role="progressbar" data-aos="slide-right" data-aos-delay="200" data-aos-duration="1000" data-aos-easing="ease-in-out" style={{ width: '100%' }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
															</div>
														</div>
													</div>
												</div>
											</div>
										</td>

										{/* <!-- Table data --> */}
										<td>42</td>

										{/* <!-- Table data --> */}
										<td>42</td>

										{/* <!-- Table data --> */}
										<td>
											<button className="btn btn-sm btn-success me-1 mb-1 mb-x;-0 disabled"><i className="bi bi-check me-1"></i>Complete</button>
											<a href="#" className="btn btn-sm btn-light me-1"><i className="bi bi-arrow-repeat me-1"></i>Restart</a>
										</td>
									</tr>
								</tbody>
								{/* <!-- Table body END --> */}
							</table>
						</div>
						{/* <!-- Course list table END --> */}

						{/* <!-- Pagination START --> */}
						<div className="d-sm-flex justify-content-sm-between align-items-sm-center mt-4 mt-sm-3">
							{/* <!-- Content --> */}
							<p className="mb-0 text-center text-sm-start">Showing 1 to 8 of 20 entries</p>
							{/* <!-- Pagination --> */}
							<nav className="d-flex justify-content-center mb-0" aria-label="navigation">
								<ul className="pagination pagination-sm pagination-primary-soft d-inline-block d-md-flex rounded mb-0">
									<li className="page-item mb-0"><a className="page-link" href="#" tabIndex="-1"><i className="fas fa-angle-left"></i></a></li>
									<li className="page-item mb-0"><a className="page-link" href="#">1</a></li>
									<li className="page-item mb-0 active"><a className="page-link" href="#">2</a></li>
									<li className="page-item mb-0"><a className="page-link" href="#">3</a></li>
									<li className="page-item mb-0"><a className="page-link" href="#"><i className="fas fa-angle-right"></i></a></li>
								</ul>
							</nav>
						</div>
						{/* <!-- Pagination END --> */}
					</div>
					{/* <!-- Card body START --> */}
				</div>
			</div>
			{/* <!-- Main content END --> */}
            </div>
        {/*  <!-- Row END --> */}
	</div>	
</section>
{/* <!-- ======================= */}
{/* Page content END --> */}

</main>
  )
}

export default Mycoursespage