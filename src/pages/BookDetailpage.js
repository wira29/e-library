import React from 'react'

function BookDetailpage() {
  return (
    <main>

{/* <!-- ======================= */}
{/* Page content START --> */}
<section class="pt-5">
	<div class="container" data-sticky-container>
		<div class="row g-4 g-sm-5">

			{/* <!-- Left sidebar START --> */}
			<div class="col-xl-4">
				<div data-sticky data-margin-top="80" data-sticky-for="992">
					<div class="row justify-content-center">
						<div class="col-md-8 col-xl-12">

							{/* <!-- Card START --> */}
							<div class="card shadow">
								{/* <!-- Image --> */}
								<div class="rounded-3">
									<img src={require("../assets/images/book/01.jpg")} class="card-img-top" alt="book image"/>
								</div>
			
								{/* <!-- Card body --> */}
								<div class="card-body pb-3">
									{/* <!-- Buttons and price --> */}
									<div class="text-center">
										{/* <!-- Buttons --> */}
										<a href="#" class="btn btn-success-soft mb-2 mb-sm-0 me-00 me-sm-3"><i class="bi bi-cart3 me-2"></i>Add to Cart</a>
										<a href="#" class="btn btn-light mb-0"><i class="bi bi-bookmark me-2"></i>Add wishlist</a>
									</div>
								</div>
							</div>
							{/* <!-- Card END --> */}

						</div>
                    </div>
					{/*  <!-- Row End --> */}
				</div>
			</div>
			{/* <!-- Left sidebar END --> */}
				
			{/* <!-- Main content START --> */}
			<div class="col-xl-8">
			
				{/* <!-- Title --> */}
				<h1 class="mb-4">HTML and CSS: Design and Build Websites (Paperback)</h1>

				{/* <!-- Rating --> */}
				<div class="d-flex align-items-center mb-4">
					<h2 class="me-3 mb-0">4.5</h2>
					<div>
						<ul class="list-inline mb-0">
							<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
							<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
							<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
							<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
							<li class="list-inline-item me-0 small"><i class="fas fa-star-half-alt text-warning"></i></li>
						</ul>
						<p class="mb-0 small mt-n1">Reviews from our buyers</p>
					</div>
				</div>

				{/* <!-- Price Item START --> */}
				<ul class="list-inline mb-4">
					{/* <!-- Price --> */}
					<li class="list-inline-item">
						<input type="radio" class="btn-check" name="options" id="option1" checked />
						<label class="btn btn-success-soft-check" for="option1">
							<span class="mb-2 h6 fw-light">Paperback</span>
							{/* <!-- Price and discount --> */}
							<span class="d-flex align-items-center">
								<span class="mb-0 h5 me-2 text-success">$215</span>
								<span class="text-decoration-line-through fs-6 mb-0 me-2">$350</span>
								<span class="badge text-bg-dark mb-0">60% off</span>
							</span>
						</label>
					</li>

					{/* <!-- Price --> */}
					<li class="list-inline-item">
						<input type="radio" class="btn-check" name="options" id="option2" />
						<label class="btn btn-success-soft-check" for="option2">
							<span class="mb-2 h6 fw-light">Compact disk</span>
						{/* <!-- Price and discount --> */}
						<span class="d-flex align-items-center">
							<span class="mb-0 h5 me-2 text-success">$180</span>
							<span class="text-decoration-line-through fs-6 mb-0 me-2">$240</span>
							<span class="badge text-bg-dark mb-0">40% off</span>
						</span>
						</label>
					</li>
				</ul>
				{/* <!-- Price Item END --> */}

				{/* <!-- Content --> */}
				<h4>Description</h4>
				<p>Satisfied conveying a dependent contented he gentleman agreeable do be. Warrant private blushes removed an in equally totally if. Delivered dejection necessary objection do Mr prevailed. Mr feeling does chiefly cordial in do.</p>
				<p>We focus a great deal on the understanding of behavioral psychology and influence triggers which are crucial for becoming a well-rounded Digital Marketer. We understand that theory is important to build a solid foundation, we understand that theory alone isn't going to get the job done so that's why this course is packed with practical hands-on examples that you can follow step by step.</p>
				
				{/* <!-- Additional info --> */}
				<div class="row mb-3">
					<div class="col-md-6">
						{/* <!-- List START --> */}
						<ul class="list-group list-group-borderless">
							<li class="list-group-item px-0">
								<span class="h6 fw-light"><i class="bi fa-fw bi-calendar-fill text-primary me-2"></i>Published date:</span>
								<span class="h6">12 Dec 2021</span>
							</li>
							<li class="list-group-item px-0">
								<span class="h6 fw-light"><i class="fas fa-fw fa-book text-primary me-2"></i>Page count:</span>
								<span class="h6">180</span>
							</li>
							<li class="list-group-item px-0">
								<span class="h6 fw-light"><i class="fas fa-fw fa-font text-primary me-2"></i>Word count:</span>
								<span class="h6">15879</span>
							</li>
							<li class="list-group-item px-0">
								<span class="h6 fw-light"><i class="bi fa-fw bi-translate text-primary me-2"></i>Language:</span>
								<span class="h6">English</span>
							</li>
						</ul>
						{/* <!-- List END --> */}
					</div>

					<div class="col-md-6">
						{/* <!-- List START --> */}
						<ul class="list-group list-group-borderless">
							<li class="list-group-item px-0">
								<span class="h6 fw-light"><i class="bi fa-fw bi-person-circle text-primary me-2"></i>Published by:</span>
								<span class="h6">Dennis Barrett</span>
							</li>
							<li class="list-group-item px-0">
								<span class="h6 fw-light"><i class="bi fa-fw bi-eye-fill text-primary me-2"></i>Visited by:</span>
								<span class="h6">18K</span>
							</li>
							<li class="list-group-item px-0">
								<span class="h6 fw-light"><i class="bi fa-fw bi-bag-fill text-primary me-2"></i>Purchase by:</span>
								<span class="h6">8245</span>
							</li>
							<li class="list-group-item px-0">
								<span class="h6 fw-light"><i class="bi fa-fw bi-star-fill text-primary me-2"></i>Rating/Review:</span>
								<span class="h6">4.5 (568)</span>
							</li>
						</ul>
						{/* <!-- List END --> */}
					</div>
				</div>

				<p>Crucial for becoming a well-rounded Digital Marketer. We understand that theory is important to build a solid foundation, we understand that theory alone isn't going to get the job done so that's why this course is packed with practical hands-on examples that you can follow step by step.</p>
				
				{/* <!-- Book detail START --> */}
				<div class="col-12">
					{/* <!-- Tabs START --> */}
					<ul class="nav nav-pills nav-pills-bg-soft px-3" id="book-pills-tab" role="tablist">
						{/* <!-- Tab item --> */}
						<li class="nav-item me-2 me-sm-4" role="presentation">
							<button class="nav-link mb-0 active" id="book-pills-tab-1" data-bs-toggle="pill" data-bs-target="#book-pills-1" type="button" role="tab" aria-controls="book-pills-1" aria-selected="true">Author</button>
						</li>
						{/* <!-- Tab item --> */}
						<li class="nav-item me-2 me-sm-4" role="presentation">
							<button class="nav-link mb-0" id="book-pills-tab-2" data-bs-toggle="pill" data-bs-target="#book-pills-2" type="button" role="tab" aria-controls="book-pills-2" aria-selected="false">Reviews</button>
						</li>
						{/* <!-- Tab item --> */}
						<li class="nav-item me-2 me-sm-4" role="presentation">
							<button class="nav-link mb-0" id="book-pills-tab-3" data-bs-toggle="pill" data-bs-target="#book-pills-3" type="button" role="tab" aria-controls="book-pills-3" aria-selected="false">Shipping Method </button>
						</li>
					</ul>
					{/* <!-- Tabs END --> */}

					{/* <!-- Tab contents START --> */}
					<div class="tab-content pt-4 px-3" id="book-pills-tabContent">
						{/* <!-- Content START --> */}
						<div class="tab-pane fade show active" id="book-pills-1" role="tabpanel" aria-labelledby="book-pills-tab-1">
							<div class="row g-4">
								<div class="col-md-3">
									<img src={require("../assets/images/instructor/08.jpg")} class="rounded-3" alt=""/>
								</div>
								<div class="col-md-9">
									<div class="d-sm-flex justify-content-sm-between">

										{/* <!-- Title --> */}
										<div class="mb-3">
											<h3 class="mb-0">Dennis Barrett</h3>
											<span>Publisher</span>
										</div>

										{/* <!-- Social icon --> */}
										<ul class="list-inline mb-0">
											<li class="list-inline-item"> 
												<a class="mb-0 me-1 text-facebook" href="#"><i class="fab fa-fw fa-facebook-f"></i></a> 
											</li>
											<li class="list-inline-item"> 
												<a class="mb-0 me-1 text-instagram-gradient" href="#"><i class="fab fa-fw fa-instagram"></i></a> 
											</li>
											<li class="list-inline-item"> 
												<a class="mb-0 me-1 text-twitter" href="#"><i class="fab fa-fw fa-twitter"></i></a> 
											</li>
											<li class="list-inline-item"> 
												<a class="mb-0 text-linkedin" href="#"><i class="fab fa-fw fa-linkedin-in"></i></a> 
											</li>
										</ul>
									</div>
									{/* <!-- Content --> */}
									<p class="mt-3 mt-sm-0 mb-0">We understand that theory is important to build a solid foundation, we understand that theory alone isn't going to get the job done so that's why this course is packed with practical hands-on examples that you can follow step by step.</p>
								</div>
							</div>
						</div>
						{/* <!-- Content END --> */}

						{/* <!-- Content START --> */}
						<div class="tab-pane fade" id="book-pills-2" role="tabpanel" aria-labelledby="book-pills-tab-2">
							{/* <!-- Review START --> */}
							<div class="row mb-4">
								<h4 class="mb-4">All Reviews</h4>

								{/* <!-- Rating info --> */}
								<div class="col-md-4 mb-3 mb-md-0">
									<div class="text-center">
										{/* <!-- Info --> */}
										<h2 class="mb-0">4.5</h2>
										{/* <!-- Star --> */}
										<ul class="list-inline mb-0">
											<li class="list-inline-item me-0"><i class="fas fa-star text-warning"></i></li>
											<li class="list-inline-item me-0"><i class="fas fa-star text-warning"></i></li>
											<li class="list-inline-item me-0"><i class="fas fa-star text-warning"></i></li>
											<li class="list-inline-item me-0"><i class="fas fa-star text-warning"></i></li>
											<li class="list-inline-item me-0"><i class="fas fa-star-half-alt text-warning"></i></li>
										</ul>
										<p class="mb-0">(Based on 155 review)</p>
									</div>
								</div>

								{/* <!-- Progress-bar and star --> */}
								<div class="col-md-8">
									<div class="row align-items-center text-center">
										{/* <!-- Progress bar and Rating --> */}
										<div class="col-6 col-sm-8">
											{/* <!-- Progress item --> */}
											<div class="progress progress-sm bg-warning bg-opacity-15">
												<div class="progress-bar bg-warning" role="progressbar" style={{ width: '100%' }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
												</div>
											</div>
										</div>

										<div class="col-6 col-sm-4">
											{/* <!-- Star item --> */}
											<ul class="list-inline mb-0">
												<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
												<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
												<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
												<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
												<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
											</ul>
										</div>

										{/* <!-- Progress bar and Rating --> */}
										<div class="col-6 col-sm-8">
											{/* <!-- Progress item --> */}
											<div class="progress progress-sm bg-warning bg-opacity-15">
												<div class="progress-bar bg-warning" role="progressbar" style={{ width: '80%' }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
												</div>
											</div>
										</div>

										<div class="col-6 col-sm-4">
											{/* <!-- Star item --> */}
											<ul class="list-inline mb-0">
												<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
												<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
												<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
												<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
												<li class="list-inline-item me-0 small"><i class="far fa-star text-warning"></i></li>
											</ul>
										</div>

										{/* <!-- Progress bar and Rating --> */}
										<div class="col-6 col-sm-8">
											{/* <!-- Progress item --> */}
											<div class="progress progress-sm bg-warning bg-opacity-15">
												<div class="progress-bar bg-warning" role="progressbar" style={{ width: '60%' }} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
												</div>
											</div>
										</div>

										<div class="col-6 col-sm-4">
											{/* <!-- Star item --> */}
											<ul class="list-inline mb-0">
												<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
												<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
												<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
												<li class="list-inline-item me-0 small"><i class="far fa-star text-warning"></i></li>
												<li class="list-inline-item me-0 small"><i class="far fa-star text-warning"></i></li>
											</ul>
										</div>

										{/* <!-- Progress bar and Rating --> */}
										<div class="col-6 col-sm-8">
											{/* <!-- Progress item --> */}
											<div class="progress progress-sm bg-warning bg-opacity-15">
												<div class="progress-bar bg-warning" role="progressbar" style={{ width: '40%' }} aria-valuenow="40" aria-valuemin="0" aria-valuemax="100">
												</div>
											</div>
										</div>

										<div class="col-6 col-sm-4">
											{/* <!-- Star item --> */}
											<ul class="list-inline mb-0">
												<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
												<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
												<li class="list-inline-item me-0 small"><i class="far fa-star text-warning"></i></li>
												<li class="list-inline-item me-0 small"><i class="far fa-star text-warning"></i></li>
												<li class="list-inline-item me-0 small"><i class="far fa-star text-warning"></i></li>
											</ul>
										</div>

										{/* <!-- Progress bar and Rating --> */}
										<div class="col-6 col-sm-8">
											{/* <!-- Progress item --> */}
											<div class="progress progress-sm bg-warning bg-opacity-15">
												<div class="progress-bar bg-warning" role="progressbar" style={{ width: '20%' }} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
												</div>
											</div>
										</div>

										<div class="col-6 col-sm-4">
											{/* <!-- Star item --> */}
											<ul class="list-inline mb-0">
												<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
												<li class="list-inline-item me-0 small"><i class="far fa-star text-warning"></i></li>
												<li class="list-inline-item me-0 small"><i class="far fa-star text-warning"></i></li>
												<li class="list-inline-item me-0 small"><i class="far fa-star text-warning"></i></li>
												<li class="list-inline-item me-0 small"><i class="far fa-star text-warning"></i></li>
											</ul>
										</div>
									</div>
								</div>
							</div>
							{/* <!-- Review END --> */}

							{/* <!-- Student review START --> */}
							<div class="row">
								{/* <!-- Review item START --> */}
								<div class="d-md-flex my-4">
									{/* <!-- Avatar --> */}
									<div class="avatar avatar-xl me-4 flex-shrink-0">
										<img class="avatar-img rounded-circle" src={require("../assets/images/avatar/09.jpg")} alt="avatar" />
									</div>
									{/* <!-- Text --> */}
									<div>
										<div class="d-sm-flex mt-1 mt-md-0 align-items-center">
											<h5 class="me-3 mb-0">Jacqueline Miller</h5>
											{/* <!-- Review star --> */}
											<ul class="list-inline mb-0">
												<li class="list-inline-item me-0"><i class="fas fa-star text-warning"></i></li>
												<li class="list-inline-item me-0"><i class="fas fa-star text-warning"></i></li>
												<li class="list-inline-item me-0"><i class="fas fa-star text-warning"></i></li>
												<li class="list-inline-item me-0"><i class="fas fa-star text-warning"></i></li>
												<li class="list-inline-item me-0"><i class="far fa-star text-warning"></i></li>
											</ul>
										</div>
										{/* <!-- Info --> */}
										<p class="small mb-2">2 days ago</p>
										<p class="mb-2">Perceived end knowledge certainly day sweetness why cordially. Ask a quick six seven offer see among. Handsome met debating sir dwelling age material. As style lived he worse dried. Offered related so visitors we private removed. Moderate do subjects to distance. </p>
										
										{/* <!-- Reply button --> */}
										<a href="#" class="text-body mb-0"><i class="fas fa-reply me-2"></i>Reply</a>
									</div>
								</div>
								{/* <!-- Divider --> */}
								<hr/>
								{/* <!-- Review item END --> */}

								{/* <!-- Review item START --> */}
								<div class="d-md-flex my-4">
									{/* <!-- Avatar --> */}
									<div class="avatar avatar-xl me-4 flex-shrink-0">
										<img class="avatar-img rounded-circle" src={require("../assets/images/avatar/07.jpg")} alt="avatar" />
									</div>
									{/* <!-- Text --> */}
									<div>
										<div class="d-sm-flex mt-1 mt-md-0 align-items-center">
											<h5 class="me-3 mb-0">Dennis Barrett</h5>
											{/* <!-- Review star --> */}
											<ul class="list-inline mb-0">
												<li class="list-inline-item me-0"><i class="fas fa-star text-warning"></i></li>
												<li class="list-inline-item me-0"><i class="fas fa-star text-warning"></i></li>
												<li class="list-inline-item me-0"><i class="fas fa-star text-warning"></i></li>
												<li class="list-inline-item me-0"><i class="fas fa-star text-warning"></i></li>
												<li class="list-inline-item me-0"><i class="far fa-star text-warning"></i></li>
											</ul>
										</div>
										{/* <!-- Info --> */}
										<p class="small mb-2">2 days ago</p>
										<p class="mb-2">Handsome met debating sir dwelling age material. As style lived he worse dried. Offered related so visitors we private removed. Moderate do subjects to distance. </p>
										{/* <!-- Reply button --> */}
										<a href="#" class="text-body mb-0"><i class="fas fa-reply me-2"></i>Reply</a>
									</div>	
								</div>
								{/* <!-- Review item END --> */}
								{/* <!-- Divider --> */}
								<hr/>
							</div>
							{/* <!-- Student review END --> */}

							{/* <!-- Leave Review START --> */}
							<div class="mt-2">
								<h5 class="mb-4">Leave a Review</h5>
								<form class="row g-3">
									{/* <!-- Name --> */}
									<div class="col-md-6">
										<input type="text" class="form-control" id="inputtext" placeholder="Name" aria-label="First name"/>
									</div>
									{/* <!-- Email --> */}
									<div class="col-md-6">
										<input type="email" class="form-control" placeholder="Email" id="inputEmail4"/>
									</div>
									{/* <!-- Rating --> */}
									<div class="col-12">
										<select id="inputState2" class="form-select  js-choice">
											<option selected="">★★★★★ (5/5)</option>
											<option>★★★★☆ (4/5)</option>
											<option>★★★☆☆ (3/5)</option>
											<option>★★☆☆☆ (2/5)</option>
											<option>★☆☆☆☆ (1/5)</option>
										</select>
									</div>
									{/* <!-- Message --> */}
									<div class="col-12">
										<textarea class="form-control" id="exampleFormControlTextarea1" placeholder="Your review" rows="3"></textarea>
									</div>
									{/* <!-- Button --> */}
									<div class="col-12">
										<button type="submit" class="btn btn-primary mb-0">Post Review</button>
									</div>
								</form>
							</div>
							{/* <!-- Leave Review END --> */}

						</div>
						{/* <!-- Content END --> */}

						{/* <!-- Content START --> */}
						<div class="tab-pane fade" id="book-pills-3" role="tabpanel" aria-labelledby="book-pills-tab-3">
							
							<p>As it so contrasted oh estimating instrument. Size like body someone had. Are conduct viewing boy minutes warrant the expense? Tolerably behavior may admit daughters offending her ask own. Praise effect wishes change way and any wanted. Lively use looked latter regard had. Do he it part more last in.</p>
							
							{/* <!-- Process START --> */}
							<div class="row mb-4">
								<div class="col-12">
									<div class="bg-light p-4 rounded-3">
										<div class="row g-4 text-center mx-auto">

											{/* <!-- Process item --> */}
											<div class="col-md-4 text-center">	
												{/* <!-- Icon --> */}
												<div class="icon-xl bg-dark bg-opacity-10 mx-auto rounded-circle mb-3">
													<i class="far fa-fw fa-file-alt"></i>
												</div>
												<h6>You place your order</h6>
											</div>

											{/* <!-- Process item --> */}
											<div class="col-md-4 text-center">
												{/* <!-- Icon --> */}
												<div class="icon-xl bg-dark bg-opacity-10 mx-auto rounded-circle mb-3">
													<i class="fas fa-fw fa-truck-moving"></i>
												</div>
												{/* <!-- Title --> */}
												<h6>We Ship Your Order</h6>
											</div>

											{/* <!-- Process item --> */}
											<div class="col-md-4 text-center">
												{/* <!-- Icon --> */}
												<div class="icon-xl bg-dark bg-opacity-10 mx-auto rounded-circle mb-3">
													<i class="fas fa-fw fa-people-carry"></i>
												</div>
												{/* <!-- Title --> */}
												<h6>Delivery</h6>
											</div>
										</div>
									</div>

								</div>
							</div>
							{/* <!-- Process END --> */}

							{/* <!-- Content --> */}
							<p>Are conduct viewing boy minutes warrant the expense? Tolerably behavior may admit daughters offending her ask own. Praise effect wishes change way and any wanted. Lively use looked latter regard had. Do he it part more last in.</p>
							<p><b>Processing time:</b> The time it takes to prepare your item(s) to ship from our warehouse. This includes preparing your items, performing quality checks, and packing for shipment.</p>
							<p><b>Shipping time:</b> The time for your item(s) to travel from our warehouse to your destination.</p>
							<p>Tolerably behavior may admit daughters offending her ask own. Praise effect wishes change way and any wanted. Lively use looked latter regard had. Do he it part more last in.</p>
							
						</div>
						{/* <!-- Content END --> */}
					</div>
					{/* <!-- Tab contents END --> */}
				</div>
				{/* <!-- Book detail END --> */}
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

export default BookDetailpage