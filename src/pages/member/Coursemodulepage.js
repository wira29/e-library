import React from 'react'

function Coursemodulepage() {
  return (
    <main>

{/* <!-- ======================= */}
{/* Page intro START --> */}
<section className="bg-blue py-7">
	<div className="container">
		<div className="row justify-content-lg-between">

			<div className="col-lg-8">
				{/* <!-- Title --> */}
				<h1 className="text-white">The Complete Digital Marketing Course - 12 Courses in 1</h1>
				<p className="text-white">Satisfied conveying a dependent contented he gentleman agreeable do be. Warrant private blushes removed an in equally totally if. Delivered dejection necessary objection do Mr prevailed. Mr feeling does chiefly cordial in do.</p>
				
				{/* <!-- Content --> */}
				<ul className="list-inline mb-5">
					<li className="list-inline-item h6 me-4 mb-1 mb-sm-0 text-white"><span className="fw-light">By</span> Lori Stevens</li>
					<li className="list-inline-item me-4 mb-1 mb-sm-0">
						<ul className="list-inline mb-0">
							<li className="list-inline-item me-0 small"><i className="fas fa-star text-warning"></i></li>
							<li className="list-inline-item me-0 small"><i className="fas fa-star text-warning"></i></li>
							<li className="list-inline-item me-0 small"><i className="fas fa-star text-warning"></i></li>
							<li className="list-inline-item me-0 small"><i className="fas fa-star text-warning"></i></li>
							<li className="list-inline-item me-0 small"><i className="fas fa-star-half-alt text-warning"></i></li>
							<li className="list-inline-item ms-2 h6 text-white">4.5/5.0</li>
							<li className="list-inline-item text-white">(1,586 reviews)</li>
						</ul>
					</li>
					<li className="list-inline-item h6 mb-0 text-white"><i className="fas fa-globe text-info me-2"></i>English</li>
				</ul>
			</div>

			<div className="col-lg-3">
				<h6 className="text-white lead fw-light mb-3"><i className="fas fa-user-graduate text-orange me-2"></i>12,155 already enrolled</h6>
				{/* <!-- Button --> */}
				<a href="#" className="btn btn-warning mb-3 w-100">Enroll Course</a>

				{/* <!-- Progress item --> */}
				<div className="overflow-hidden mb-4">
					<h6 className="text-white">Your Progress</h6>
					<div className="progress progress-sm bg-white bg-opacity-10 mb-1">
						<div className="progress-bar bg-white aos" role="progressbar" data-aos="slide-right" data-aos-delay="200" data-aos-duration="1000" data-aos-easing="ease-in-out" style={{ width: '25%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
					</div>
					<small className="text-white">08 of 135 Completed</small>
				</div>
			</div>

		</div>
	</div>
</section>
{/* <!-- ======================= */}
{/* Page intro END --> */}

{/* <!-- ======================= */}
{/* Page content START --> */}
<section className="pt-0">
	<div className="container">
		<div className="row">
			{/* <!-- Main content START --> */}
			<div className="col-12">
				<div className="card shadow rounded-2 p-0 mt-n5">
					{/* <!-- Tabs START --> */}
					<div className="card-header border-bottom px-4 pt-3 pb-0">
						<ul className="nav nav-bottom-line py-0" id="course-pills-tab" role="tablist">
							{/* <!-- Tab item --> */}
							<li className="nav-item me-2 me-sm-4" role="presentation">
								<button className="nav-link mb-2 mb-md-0 active" id="course-pills-tab-1" data-bs-toggle="pill" data-bs-target="#course-pills-1" type="button" role="tab" aria-controls="course-pills-1" aria-selected="true">Course Materials</button>
							</li>
							{/* <!-- Tab item --> */}
							<li className="nav-item me-2 me-sm-4" role="presentation">
								<button className="nav-link mb-2 mb-md-0" id="course-pills-tab-2" data-bs-toggle="pill" data-bs-target="#course-pills-2" type="button" role="tab" aria-controls="course-pills-2" aria-selected="false">Notes</button>
							</li>
							{/* <!-- Tab item --> */}
							<li className="nav-item me-2 me-sm-4" role="presentation">
								<button className="nav-link mb-2 mb-md-0" id="course-pills-tab-3" data-bs-toggle="pill" data-bs-target="#course-pills-3" type="button" role="tab" aria-controls="course-pills-3" aria-selected="false">Discussion</button>
							</li>
						</ul>
					</div>
					{/* <!-- Tabs END --> */}

					{/* <!-- Tab contents START --> */}
					<div className="card-body p-sm-4">
						<div className="tab-content" id="course-pills-tabContent">
							{/* <!-- Content START --> */}
							<div className="tab-pane fade show active" id="course-pills-1" role="tabpanel" aria-labelledby="course-pills-tab-1">
								{/* <!-- Accordion START --> */}
								<div className="accordion accordion-icon accordion-border" id="accordionExample2">
									{/* <!-- Item --> */}
									<div className="accordion-item mb-3">
										<h6 className="accordion-header font-base" id="heading-1">
											<button className="accordion-button fw-bold rounded d-flex collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-1" aria-expanded="true" aria-controls="collapse-1">
												Week 1 - 
												<span className="small ms-2">April 15 - 20</span> 
												<span className="small ms-0 ms-sm-2 d-none d-sm-block">(4 Items)</span> 

												{/* <!-- Mark button --> */}
												<span className="text-secondary ms-auto pe-4" data-bs-toggle="tooltip" data-bs-placement="top" title="Mark as completed">
													<i className="bi bi-check-circle-fill"></i>
												</span>
											</button>
										</h6>
										
										<div id="collapse-1" className="accordion-collapse collapse show" aria-labelledby="heading-1" data-bs-parent="#accordionExample2">
											<div className="accordion-body mt-3">
												{/* <!-- Course lecture --> */}
												<div className="d-flex justify-content-between align-items-center">
													<div className="d-flex align-items-center">
														{/* <!-- Video button --> */}
														<a data-glightbox data-gallery="office-tour" href="https://www.youtube.com/embed/tXHviS-4ygo" className="icon-md position-relative">
															<img src={require("../../assets/images/courses/4by3/01.jpg")} className="rounded-1"  alt=""/>
															<small className="text-white position-absolute top-50 start-50 translate-middle"><i className="fas fa-play me-0 "></i></small>
														</a>

														{/* <!-- Content --> */}
														<div className="ms-3">
															<a href="#" className="d-inline-block text-truncate mb-0 h6 fw-normal w-100px w-sm-200px w-md-400px"> What is Digital Marketing What is Digital Marketing</a>
															<ul className="nav nav-divider small mb-0">
																<li className="nav-item">15m 10s</li>
																<li className="nav-item">20pts</li>
																<li className="nav-item"><a href="#" className="text-success">Submitted</a></li>
															</ul>
														</div>
													</div>

													{/* <!-- Actions Mark button --> */}
													<a href="#" className="p-2 mb-0 text-success" data-bs-toggle="tooltip" data-bs-placement="top" title="Completed">
														<i className="bi bi-check-circle-fill"></i>
													</a>
												</div>

												{/* <hr> <!-- Divider --> */}

												{/* <!-- Course assignment --> */}
												<div className="d-flex justify-content-between align-items-center">
													<div className="position-relative d-flex align-items-center">
														<div className="d-flex align-items-center">
															{/* <!-- Video button --> */}
															<a href="#" className="icon-md mb-0 position-static flex-shrink-0 text-body">
																<i className="fas fa-fw fa-file-signature fs-5"></i>
															</a>
															{/* <!-- Content --> */}
															<div className="ms-3">
																<a href="#" className="d-inline-block text-truncate mb-0 h6 fw-normal w-100px w-sm-200px w-md-400px">Assignments 1 - Research about marketing</a>
																<ul className="nav nav-divider small mb-0">
																	<li className="nav-item">20pts</li>
																	<li className="nav-item"><a href="#">Submit</a></li>
																</ul>
															</div>
														
														</div>
													</div>
													{/* <!-- Actions Mark button --> */}
													<a href="#" className="p-2 mb-0 text-success" data-bs-toggle="tooltip" data-bs-placement="top" title="Completed">
														<i className="bi bi-check-circle-fill"></i>
													</a>	
												</div>

												{/* <hr> <!-- Divider -->  */}

												{/* <!-- Course slide --> */}
												<div className="d-flex justify-content-between align-items-center">
													<div className="position-relative d-flex align-items-center">
														<div className="d-flex align-items-center">
															{/* <!-- Video button --> */}
															<a href="#" className="icon-md mb-0 position-static flex-shrink-0 text-body">
																<i className="fas fa-fw fa-file-alt fs-5"></i>
															</a>
															{/* <!-- Content --> */}
															<div className="ms-3">
																<a href="#" className="d-inline-block text-truncate mb-0 h6 fw-normal w-100px w-sm-200px w-md-400px" data-bs-toggle="modal" data-bs-target="#slideModal">
																	Slide - Digital Marketing
																</a>
																<ul className="nav nav-divider small mb-0">
																	<li className="nav-item">View</li>
																	<li className="nav-item">05 Slide</li>
																</ul>
															</div>
														
														</div>
													</div>
													{/* <!-- Actions --> */}
													<div className="hstack gap-2 align-items-center">
														{/* <!-- Resume button --> */}
														<a className="btn btn-sm btn-primary mb-0" data-bs-toggle="collapse" href="#addnote-1" role="button" aria-expanded="false">
															<span className="d-none d-sm-block">Resume</span>
															<span className="d-sm-none"><i className="bi bi-play-fill"></i></span>
														</a>

														{/* <!-- Mark button --> */}
														<a href="#" className="p-2 mb-0 text-secondary" data-bs-toggle="tooltip" data-bs-placement="top" title="Mark as Complete">
															<i className="bi bi-check-circle-fill"></i>
														</a>
													</div>
												</div>

												{/* <hr> <!-- Divider -->  */}

												{/* <!-- Course slide --> */}
												<div className="d-flex justify-content-between align-items-center">
													<div className="position-relative d-flex align-items-center">
														<div className="d-flex align-items-center">
															{/* <!-- Video button --> */}
															<a href="#" className="icon-md mb-0 position-static flex-shrink-0 text-body">
																<i className="fas fa-question-circle fa-fw fs-5"></i>
															</a>
															{/* <!-- Content --> */}
															<div className="ms-3">
																<a href="#" className="d-inline-block text-truncate mb-0 h6 fw-normal w-100px w-sm-200px w-md-400px">Quiz - Digital Marketing</a>
																<ul className="nav nav-divider small mb-0">
																	<li className="nav-item">12 April</li>
																	<li className="nav-item">10 pts</li>
																</ul>
															</div>
														
														</div>
													</div>
													{/* <!-- Actions Mark button --> */}
													<a href="#" className="p-2 mb-0 text-secondary" data-bs-toggle="tooltip" data-bs-placement="top" title="Mark as Complete">
														<i className="bi bi-check-circle-fill"></i>
													</a>
												</div>
											</div>
										</div>
									</div>

									{/* <!-- Item --> */}
									<div className="accordion-item mb-3">
										<h6 className="accordion-header font-base" id="heading-2">
											<button className="accordion-button fw-bold collapsed rounded d-flex" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-2" aria-expanded="false" aria-controls="collapse-2">
												Week 2 - 
												<span className="small ms-2">April 22 - 24</span> 
												<span className="small ms-0 ms-sm-2 d-none d-sm-block">(3 Items)</span> 
											</button>
										</h6>
										<div id="collapse-2" className="accordion-collapse collapse" aria-labelledby="heading-2" data-bs-parent="#accordionExample2">
											{/* <!-- Accordion body START --> */}
											<div className="accordion-body mt-3">
												
												{/* <!-- Course assignment --> */}
												<div className="d-flex justify-content-between align-items-center">
													<div className="position-relative d-flex align-items-center">
														<div className="d-flex align-items-center">
															{/* <!-- Video button --> */}
															<a href="#" className="icon-md mb-0 position-static flex-shrink-0 text-body">
																<i className="fas fa-fw fa-file-signature fs-5"></i>
															</a>
															{/* <!-- Content --> */}
															<div className="ms-3">
																<a href="#" className="d-inline-block text-truncate mb-0 h6 fw-normal w-100px w-sm-200px w-md-400px">Assignments 2 - Research about customer life cycle</a>
																<ul className="nav nav-divider small mb-0">
																	<li className="nav-item">20pts</li>
																	<li className="nav-item"><a href="#">Submit</a></li>
																</ul>
															</div>
														
														</div>
													</div>
													{/* <!-- Actions Mark button --> */}
													<a href="#" className="p-2 mb-0 text-secondary" data-bs-toggle="tooltip" data-bs-placement="top" title="Mark as Complete">
														<i className="bi bi-check-circle-fill"></i>
													</a>	
												</div>

												{/* <hr> <!-- Divider -->  */}

												{/* <!-- Course assignment --> */}
												<div className="d-flex justify-content-between align-items-center">
													<div className="position-relative d-flex align-items-center">
														<div className="d-flex align-items-center">
															{/* <!-- Video button --> */}
															<a href="#" className="icon-md mb-0 position-static flex-shrink-0 text-body">
																<i className="fas fa-fw fa-file-signature fs-5"></i>
															</a>
															{/* <!-- Content --> */}
															<div className="ms-3">
																<a href="#" className="d-inline-block text-truncate mb-0 h6 fw-normal w-100px w-sm-200px w-md-400px">Assignments 3 - SEO Optimization</a>
																<ul className="nav nav-divider small mb-0">
																	<li className="nav-item">20pts</li>
																	<li className="nav-item"><a href="#">Submit</a></li>
																</ul>
															</div>
														
														</div>
													</div>
													{/* <!-- Actions Mark button --> */}
													<a href="#" className="p-2 mb-0 text-secondary" data-bs-toggle="tooltip" data-bs-placement="top" title="Mark as Complete">
														<i className="bi bi-check-circle-fill"></i>
													</a>	
												</div>

												{/* <hr> <!-- Divider --> */}

												{/* <!-- Course slide --> */}
												<div className="d-flex justify-content-between align-items-center">
													<div className="position-relative d-flex align-items-center">
														<div className="d-flex align-items-center">
															{/* <!-- Video button --> */}
															<a href="#" className="icon-md mb-0 position-static flex-shrink-0 text-body">
																<i className="fas fa-fw fa-file-alt fs-5"></i>
															</a>
															{/* <!-- Content --> */}
															<div className="ms-3">
																<a href="#" className="d-inline-block text-truncate mb-0 h6 fw-normal w-100px w-sm-200px w-md-400px" data-bs-toggle="modal" data-bs-target="#slideModal">
																	Slide - Type of Marketing
																</a>
																<ul className="nav nav-divider small mb-0">
																	<li className="nav-item">View</li>
																	<li className="nav-item">05 Slide</li>
																</ul>
															</div>
														</div>
													</div>

													{/* <!-- Mark button --> */}
													<a href="#" className="p-2 mb-0 text-secondary" data-bs-toggle="tooltip" data-bs-placement="top" title="Mark as Complete">
														<i className="bi bi-check-circle-fill"></i>
													</a>
												</div>

											</div>
											{/* <!-- Accordion body END --> */}
										</div>
									</div>

									{/* <!-- Item --> */}
									<div className="accordion-item mb-3">
										<h6 className="accordion-header font-base" id="heading-3">
											<button className="accordion-button fw-bold collapsed rounded d-flex" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-3" aria-expanded="false" aria-controls="collapse-3">
												Week 3 - 
												<span className="small ms-2">April 28 - May 05</span> 
												<span className="small ms-0 ms-sm-2 d-none d-sm-block">(3 Items)</span> 
											</button>
										</h6>
										<div id="collapse-3" className="accordion-collapse collapse" aria-labelledby="heading-3" data-bs-parent="#accordionExample2">
											{/* <!-- Accordion body START --> */}
											<div className="accordion-body mt-3">
												
												{/* <!-- Course assignment --> */}
												<div className="d-flex justify-content-between align-items-center">
													<div className="position-relative d-flex align-items-center">
														<div className="d-flex align-items-center">
															{/* <!-- Video button --> */}
															<a href="#" className="icon-md mb-0 position-static flex-shrink-0 text-body">
																<i className="fas fa-fw fa-file-signature fs-5"></i>
															</a>
															{/* <!-- Content --> */}
															<div className="ms-3">
																<a href="#" className="d-inline-block text-truncate mb-0 h6 fw-normal w-100px w-sm-200px w-md-400px">Assignments 2 - Research about customer life cycle</a>
																<ul className="nav nav-divider small mb-0">
																	<li className="nav-item">20pts</li>
																	<li className="nav-item"><a href="#">Submit</a></li>
																</ul>
															</div>
														
														</div>
													</div>
													{/* <!-- Actions Mark button --> */}
													<a href="#" className="p-2 mb-0 text-secondary" data-bs-toggle="tooltip" data-bs-placement="top" title="Mark as Complete">
														<i className="bi bi-check-circle-fill"></i>
													</a>	
												</div>

												{/* <hr> <!-- Divider -->  */}

												{/* <!-- Course assignment --> */}
												<div className="d-flex justify-content-between align-items-center">
													<div className="position-relative d-flex align-items-center">
														<div className="d-flex align-items-center">
															{/* <!-- Video button --> */}
															<a href="#" className="icon-md mb-0 position-static flex-shrink-0 text-body">
																<i className="fas fa-fw fa-file-signature fs-5"></i>
															</a>
															{/* <!-- Content --> */}
															<div className="ms-3">
																<a href="#" className="d-inline-block text-truncate mb-0 h6 fw-normal w-100px w-sm-200px w-md-400px">Assignments 3 - SEO Optimization</a>
																<ul className="nav nav-divider small mb-0">
																	<li className="nav-item">20pts</li>
																	<li className="nav-item"><a href="#">Submit</a></li>
																</ul>
															</div>
														
														</div>
													</div>
													{/* <!-- Actions Mark button --> */}
													<a href="#" className="p-2 mb-0 text-secondary" data-bs-toggle="tooltip" data-bs-placement="top" title="Mark as Complete">
														<i className="bi bi-check-circle-fill"></i>
													</a>	
												</div>

												{/* <hr> <!-- Divider --> */}

												{/* <!-- Course slide --> */}
												<div className="d-flex justify-content-between align-items-center">
													<div className="position-relative d-flex align-items-center">
														<div className="d-flex align-items-center">
															{/* <!-- Video button --> */}
															<a href="#" className="icon-md mb-0 position-static flex-shrink-0 text-body">
																<i className="fas fa-fw fa-file-alt fs-5"></i>
															</a>
															{/* <!-- Content --> */}
															<div className="ms-3">
																<a href="#" className="d-inline-block text-truncate mb-0 h6 fw-normal w-100px w-sm-200px w-md-400px" data-bs-toggle="modal" data-bs-target="#slideModal">
																	Slide - Type of Marketing
																</a>
																<ul className="nav nav-divider small mb-0">
																	<li className="nav-item">View</li>
																	<li className="nav-item">05 Slide</li>
																</ul>
															</div>
														</div>
													</div>

													{/* <!-- Mark button --> */}
													<a href="#" className="p-2 mb-0 text-secondary" data-bs-toggle="tooltip" data-bs-placement="top" title="Mark as Complete">
														<i className="bi bi-check-circle-fill"></i>
													</a>
												</div>

											</div>
											{/* <!-- Accordion body END --> */}
										</div>
									</div>

									{/* <!-- Item --> */}
									<div className="accordion-item mb-3">
										<h6 className="accordion-header font-base" id="heading-4">
											<button className="accordion-button fw-bold rounded d-flex collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-4" aria-expanded="false" aria-controls="collapse-4">
												Week 4 - 
												<span className="small ms-2">May 08 - 15</span> 
												<span className="small ms-0 ms-sm-2 d-none d-sm-block">(4 Items)</span> 
											</button>
										</h6>
										
										<div id="collapse-4" className="accordion-collapse collapse" aria-labelledby="heading-4" data-bs-parent="#accordionExample2">
											<div className="accordion-body mt-3">
												{/* <!-- Course lecture --> */}
												<div className="d-flex justify-content-between align-items-center">
													<div className="d-flex align-items-center">
														{/* <!-- Video button --> */}
														<a data-glightbox data-gallery="office-tour" href="https://www.youtube.com/embed/tXHviS-4ygo" className="icon-md position-relative">
															<img src={require("../../assets/images/courses/4by3/01.jpg")} className="rounded-1"  alt=""/>
															<small className="text-white position-absolute top-50 start-50 translate-middle"><i className="fas fa-play me-0 "></i></small>
														</a>

														{/* <!-- Content --> */}
														<div className="ms-3">
															<a href="#" className="d-inline-block text-truncate mb-0 h6 fw-normal w-100px w-sm-200px w-md-400px"> What is Digital Marketing What is Digital Marketing</a>
															<ul className="nav nav-divider small mb-0">
																<li className="nav-item">15m 10s</li>
																<li className="nav-item">20pts</li>
																<li className="nav-item"><a href="#">Submit</a></li>
															</ul>
														</div>
													</div>

													{/* <!-- Actions Mark button --> */}
													<a className="p-2 mb-0 text-secondary" data-bs-toggle="tooltip" data-bs-placement="top" title="Mark as Complete">
														<i className="bi bi-check-circle-fill"></i>
													</a>
												</div>

												{/* <hr> <!-- Divider --> */}

												{/* <!-- Course lecture --> */}
												<div className="d-flex justify-content-between align-items-center">
													<div className="d-flex align-items-center">
														{/* <!-- Video button --> */}
														<a data-glightbox data-gallery="office-tour" href="https://www.youtube.com/embed/tXHviS-4ygo" className="icon-md position-relative">
															<img src={require("../../assets/images/courses/4by3/01.jpg")} className="rounded-1"  alt=""/>
															<small className="text-white position-absolute top-50 start-50 translate-middle"><i className="fas fa-play me-0 "></i></small>
														</a>

														{/* <!-- Content --> */}
														<div className="ms-3">
															<a href="#" className="d-inline-block text-truncate mb-0 h6 fw-normal w-100px w-sm-200px w-md-400px"> Measuring SEO Effectiveness</a>
															<ul className="nav nav-divider small mb-0">
																<li className="nav-item">30m 10s</li>
																<li className="nav-item">20pts</li>
																<li className="nav-item"><a href="#">Submit</a></li>
															</ul>
														</div>
													</div>

													{/* <!-- Actions Mark button --> */}
													<a className="p-2 mb-0 text-secondary" data-bs-toggle="tooltip" data-bs-placement="top" title="Mark as Complete">
														<i className="bi bi-check-circle-fill"></i>
													</a>
												</div>

												{/* <hr> <!-- Divider --> */}

												{/* <!-- Course lecture --> */}
												<div className="d-flex justify-content-between align-items-center">
													<div className="d-flex align-items-center">
														{/* <!-- Video button --> */}
														<a data-glightbox data-gallery="office-tour" href="https://www.youtube.com/embed/tXHviS-4ygo" className="icon-md position-relative">
															<img src={require("../../assets/images/courses/4by3/01.jpg")} className="rounded-1"  alt=""/>
															<small className="text-white position-absolute top-50 start-50 translate-middle"><i className="fas fa-play me-0 "></i></small>
														</a>

														{/* <!-- Content --> */}
														<div className="ms-3">
															<a href="#" className="d-inline-block text-truncate mb-0 h6 fw-normal w-100px w-sm-200px w-md-400px"> Keywords in Blog and Articles</a>
															<ul className="nav nav-divider small mb-0">
																<li className="nav-item">30m 10s</li>
																<li className="nav-item">20pts</li>
																<li className="nav-item"><a href="#">Submit</a></li>
															</ul>
														</div>
													</div>

													{/* <!-- Actions Mark button --> */}
													<a className="p-2 mb-0 text-secondary" data-bs-toggle="tooltip" data-bs-placement="top" title="Mark as Complete">
														<i className="bi bi-check-circle-fill"></i>
													</a>
												</div>

												{/* <hr> <!-- Divider --> */}

												{/* <!-- Course slide --> */}
												<div className="d-flex justify-content-between align-items-center">
													<div className="position-relative d-flex align-items-center">
														<div className="d-flex align-items-center">
															{/* <!-- Video button --> */}
															<a href="#" className="icon-md mb-0 position-static flex-shrink-0 text-body">
																<i className="fas fa-fw fa-file-alt fs-5"></i>
															</a>
															{/* <!-- Content --> */}
															<div className="ms-3">
																<a href="#" className="d-inline-block text-truncate mb-0 h6 fw-normal w-100px w-sm-200px w-md-400px" data-bs-toggle="modal" data-bs-target="#slideModal">
																	Slide - Digital Marketing
																</a>
																<ul className="nav nav-divider small mb-0">
																	<li className="nav-item">View</li>
																	<li className="nav-item">05 Slide</li>
																</ul>
															</div>
														
														</div>
													</div>
													{/* <!-- Mark button --> */}
													<a href="#" className="p-2 mb-0 text-secondary" data-bs-toggle="tooltip" data-bs-placement="top" title="Mark as Complete">
														<i className="bi bi-check-circle-fill"></i>
													</a>
												</div>

												{/* <hr> <!-- Divider -->  */}

												{/* <!-- Course slide --> */}
												<div className="d-flex justify-content-between align-items-center">
													<div className="position-relative d-flex align-items-center">
														<div className="d-flex align-items-center">
															{/* <!-- Video button --> */}
															<a href="#" className="icon-md mb-0 position-static flex-shrink-0 text-body">
																<i className="fas fa-question-circle fa-fw fs-5"></i>
															</a>
															{/* <!-- Content --> */}
															<div className="ms-3">
																<a href="#" className="d-inline-block text-truncate mb-0 h6 fw-normal w-100px w-sm-200px w-md-400px">Quiz - Digital Marketing</a>
																<ul className="nav nav-divider small mb-0">
																	<li className="nav-item">12 April</li>
																	<li className="nav-item">10 pts</li>
																</ul>
															</div>
														
														</div>
													</div>
													{/* <!-- Actions Mark button --> */}
													<a href="#" className="p-2 mb-0 text-secondary" data-bs-toggle="tooltip" data-bs-placement="top" title="Mark as Complete">
														<i className="bi bi-check-circle-fill"></i>
													</a>
												</div>
											</div>
										</div>
									</div>
								</div>
								{/* <!-- Accordion END --> */}
							</div>
							{/* <!-- Content END --> */}

							{/* <!-- Content START --> */}
							<div className="tab-pane fade" id="course-pills-2" role="tabpanel" aria-labelledby="course-pills-tab-2">
								<div className="card">
									{/* <!-- Card header --> */}
									<div className="card-header border-bottom p-0 pb-3">
										{/* <!-- Title and select --> */}
										<div className="d-sm-flex justify-content-between align-items-center">
											<h4 className="mb-0">All Notes</h4>
											{/* <!-- Short by filter --> */}
											<form className="col-sm-6 col-lg-3 bg-light-input">
												<select className="form-select js-choice z-index-9" aria-label=".form-select-sm">
													<option value="">Sort by</option>
													<option>All</option>
													<option>Introductions</option>
													<option>What is Digital Marketing</option>
													<option>Most Viewed</option>
												</select>
											</form>
										</div>
									</div>

									{/* <!-- Card body --> */}
									<div className="card-body p-0 pt-3">
										{/* <!-- Note item --> */}
										<div className="row g-4">
											{/* <!-- Image --> */}
											<div className="col-sm-2 col-xl-1">
												<img src={require("../../assets/images/courses/4by3/01.jpg")} className="rounded flex-shrink-0" alt=""/>
											</div>
											{/* <!-- Content --> */}
											<div className="col-sm-10 col-xl-11">
												<h5>Introduction (2:34)</h5>
												<p>Departure defective arranging rapturous did believe him all had supported. Supposing so be resolving breakfast am or perfectly. It drew a hill from me. Valley by oh twenty direct me so. Departure defective arranging rapturous did believe him all had supported. Family months lasted simple set nature vulgar him. Picture for attempt joy excited ten carried manners talking how. Family months lasted simple set nature vulgar him. Picture for attempt joy excited ten carried manners talking how.</p>
												{/* <!-- Buttons --> */}
												<div className="hstack gap-3 flex-wrap">
													<a href="#" className="btn btn-sm btn-primary mb-0"><i className="bi bi-play-fill me-2"></i>Play</a>
													<a href="#" className="text-success mb-0"><i className="bi bi-pencil-square me-2"></i>Edit</a>
													<a href="#" className="text-danger mb-0"><i className="bi bi-trash me-2"></i>Delete</a>
												</div>
											</div>
										</div>
                                        
                                        <hr></hr>
										{/*  <!-- Divider --> */}
										
										{/* <!-- Note item --> */}
										<div className="row g-4">
											{/* <!-- Image --> */}
											<div className="col-sm-2 col-xl-1">
												<img src={require("../../assets/images/courses/4by3/01.jpg")} className="rounded flex-shrink-0" alt=""/>
											</div>
											{/* <!-- Content --> */}
											<div className="col-sm-10 col-xl-11">
												<h5> What is Digital Marketing What is Digital Marketing (10:20)</h5>
												<p>Arranging rapturous did believe him all had supported. Supposing so be resolving breakfast am or perfectly. It drew a hill from me. Valley by oh twenty direct me so. Departure defective arranging rapturous did believe him all had supported. Family months lasted simple set nature vulgar him. Picture for attempt joy excited ten carried manners talking how. Family months lasted simple set nature vulgar him. Picture for attempt joy excited ten carried manners talking how.</p>
												{/* <!-- Buttons --> */}
												<div className="hstack gap-3 flex-wrap">
													<a href="#" className="btn btn-sm btn-primary mb-0"><i className="bi bi-play-fill me-2"></i>Play</a>
													<a href="#" className="text-success mb-0"><i className="bi bi-pencil-square me-2"></i>Edit</a>
													<a href="#" className="text-danger mb-0"><i className="bi bi-trash me-2"></i>Delete</a>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							{/* <!-- Content END --> */}

							{/* <!-- Content START --> */}
							<div className="tab-pane fade" id="course-pills-3" role="tabpanel" aria-labelledby="course-pills-tab-3">
								<div className="card">
									{/* <!-- Card header --> */}
									<div className="card-header border-bottom p-0 pb-3">
										{/* <!-- Title --> */}
										<h4 className="mb-3">Discussion</h4>
										<form className="row g-4">
											{/* <!-- Search --> */}
											<div className="col-sm-6 col-lg-3">
												<div className="position-relative">
													<input className="form-control pe-5 bg-transparent" type="search" placeholder="Search" aria-label="Search"/>
													<button className="bg-transparent p-2 position-absolute top-50 end-0 translate-middle-y border-0 text-primary-hover text-reset" type="submit">
														<i className="fas fa-search fs-6 "></i>
													</button>
												</div>
											</div>

											{/* <!-- Select option --> */}
											<div className="col-sm-6 col-lg-3">
												<select className="js-choice">
													<option value="">Select item</option>
													<option>Week 1</option>
													<option>Week 2</option>
													<option>Week 3</option>
													<option>Week 4</option>
													<option>Week 5</option>
													<option>Week 6</option>
												</select>
											</div>
						
											{/* <!-- Select option --> */}
											<div className="col-sm-6 col-lg-3">
												<select className="js-choice">
													<option value="">Filter</option>
													<option>All</option>
													<option>Answered</option>
													<option>Unanswered</option>
												</select>
											</div>

											{/* <!-- Button --> */}
											<div className="col-sm-6 col-lg-3">
												<a href="#" className="btn btn-primary-soft mb-0 w-100" data-bs-toggle="modal" data-bs-target="#modalCreatePost">Create Post</a>
											</div>
										</form>
									</div>

									{/* <!-- Card body --> */}
									<div className="card-body p-0 pt-3">
										<div className="vstack gap-3">
											{/* <!-- Question item START --> */}
											<div className="border-bottom">
												{/* <!-- Name and time --> */}
												<div className="d-sm-flex justify-content-sm-between mb-3">
													<div className="d-flex align-items-center">
														{/* <!-- Avatar --> */}
														<div className="avatar avatar-sm flex-shrink-0">
															<img className="avatar-img rounded-circle" src={require("../../assets/images/avatar/03.jpg")} alt="avatar"/>
														</div>
														{/* <!-- Info --> */}
														<div className="ms-2">
															<h6 className="mb-0"><a href="#">Samuel Bishop</a></h6>
															<small>posted 9 minutes ago</small>
														</div>
													</div>
												</div>

												{/* <!-- Question --> */}
												<h5>How can you categorize Digital marketing?</h5>
												<p className="mb-2">As it so contrasted oh estimating instrument. Size like body someone had. Are conduct viewing boy minutes warrant the expense? Tolerably behavior may admit daughters offending her ask own. Praise effect wishes change way and any wanted. Lively use looked latter regard had. Do he it part more last in.</p>

												{/* <!-- Action button --> */}
												<ul className="nav nav-divider pb-3 small">
													<li className="nav-item"> <a className="text-primary-hover" href="#"> <i className="bi bi-hand-thumbs-up me-2"></i>Like (3)</a> </li>
													<li className="nav-item"> <a className="text-primary-hover" href="#"> <i className="bi bi-chat-left me-2"></i>Reply</a> </li>
												</ul>
											</div>
											{/* <!-- Question item END --> */}

											{/* <!-- Question item START --> */}
											<div>
												{/* <!-- Name and time --> */}
												<div className="d-sm-flex justify-content-sm-between mb-3">
													<div className="d-flex align-items-center">
														{/* <!-- Avatar --> */}
														<div className="avatar avatar-sm flex-shrink-0">
															<img className="avatar-img rounded-circle" src={require("../../assets/images/avatar/05.jpg")} alt="avatar"/>
														</div>
														{/* <!-- Info --> */}
														<div className="ms-2">
															<h6 className="mb-0"><a href="#">Carolyn Ortiz</a></h6>
															<small>posted 50 minutes ago</small>
														</div>
													</div>
												</div>

												{/* <!-- Question --> */}
												<h5> What are the key areas where you can use keywords to optimize your site ranking?</h5>
												<p className="mb-2">As it so contrasted oh estimating instrument. Size like body someone had. Are conduct viewing boy minutes warrant the expense? Tolerably behavior may admit daughters offending her ask own. Praise effect wishes change way and any wanted. Lively use looked latter regard had. Do he it part more last in.</p>

												{/* <!-- Action button --> */}
												<ul className="nav nav-divider pb-0 small">
													<li className="nav-item"> <a className="text-primary-hover" href="#"> <i className="bi bi-hand-thumbs-up me-2"></i>Like (3)</a> </li>
													<li className="nav-item"> <a className="text-primary-hover" href="#"> <i className="bi bi-chat-left me-2"></i>Reply</a> </li>
												</ul>
											</div>
											{/* <!-- Question item END --> */}
										</div>
									</div>
								</div>

							</div>
							{/* <!-- Content END --> */}

						</div>
					</div>
					{/* <!-- Tab contents END --> */}
				</div>
			</div>
			{/* <!-- Main content END --> */}
            </div>
        {/* <!-- Row END --> */}
	</div>
</section>
{/* <!-- ======================= */}
{/* Page content END --> */}

</main>
  )
}

export default Coursemodulepage