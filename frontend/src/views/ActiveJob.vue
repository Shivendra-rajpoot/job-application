<template>
    <div class="card">
					<div class="card-body">
						<nav class="navbar navbar-expand-lg navbar-dark btn-light rounded">
							<div class="container-fluid">	
                                <a class="navbar-brand" href="#"><img
          src="/assets/images/logo-icon.png"
          alt="Logo"
          style="width: 200px;"
          class="img-fluid"
        /></a>
								<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent2" aria-controls="navbarSupportedContent2" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span>
								</button>
								<div class="collapse navbar-collapse" id="navbarSupportedContent2">
									<ul class="navbar-nav me-auto mb-2 mb-lg-0">
										<li class="nav-item"> <a class="nav-link active" aria-current="page" href="#"><i class="bx bx-home-alt me-1"></i>Home</a>
										</li>
										<li class="nav-item"> <a class="nav-link" href="#"><i class="bx bx-user me-1"></i>About</a>
										</li>
										<li class="nav-item"> <a class="nav-link" href="#"><i class="bx bx-category-alt me-1"></i>Features</a>
										</li>
										<li class="nav-item"> <a class="nav-link" href="#"><i class="bx bx-microphone me-1"></i>Contact</a>
										</li>
										<li class="nav-item dropdown"> <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
							Dropdown
						  </a>
											<ul class="dropdown-menu">
												<li><a class="dropdown-item" href="#">Action</a>
												</li>
												<li><a class="dropdown-item" href="#">Another action</a>
												</li>
												<li>
													<hr class="dropdown-divider">
												</li>
												<li><a class="dropdown-item" href="#">Something else here</a>
												</li>
											</ul>
										</li>
									</ul>
									<form class="d-flex">
										<button class="btn btn-light px-4" type="submit"><i class="bx bx-cart"></i> Buy Now</button>
									</form>
								</div>
							</div>
						</nav>
					</div>
				</div>
  <div class="page-content">

    <!-- Header / Breadcrumb -->
    <!-- <div class="page-breadcrumb d-flex justify-content-between align-items-center mb-3">

    
      <div class="d-flex align-items-center">
        <img
          src="/assets/images/logo-icon.png"
          alt="Logo"
          style="width: 200px;"
          class="img-fluid"
        />
      </div>

     
      <div class="flex-grow-1 text-center">
       <h5 class="m-0 fw-bold bg-primary text-white px-3 py-2 rounded d-inline-block">
  Welcome to RCB Online Job Portal
</h5>

      </div>

      
      <div class="d-flex align-items-center gap-2">

       
        <button class="btn btn-primary btn-sm d-flex align-items-center">
          <i class="bx bx-briefcase-alt-2 me-1"></i> Active Positions
        </button>

       
        <button class="btn btn-secondary btn-sm d-flex align-items-center">
          <i class="bx bx-file me-1"></i> My Applications
        </button>

       
         <div class="d-flex align-items-center theme-icons shadow-sm p-2 cursor-pointer rounded">
							<div class="font-22 text-primary">	<i class="fadeIn animated bx bx-log-out-circle"></i>
							</div>
							<div class="ms-2">Log-out</div>
						</div>


      </div>

    </div> -->
    <!-- End Header -->

    <!-- Active Jobs Section -->
    <div class="row">
      <div class="col-xl-9 mx-auto">

       <h6 class="mb-0 text-uppercase text-center ">Active Jobs</h6>

        <hr />

        <div class="card">
          <div class="card-body">
            <table class="table table-bordered mb-0">
              <thead>
                <tr>
                  <th>#</th>
                  <th>First</th>
                  <th>Last</th>
                  <th>Handle</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td colspan="2">Larry the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>

  </div>
</template>
