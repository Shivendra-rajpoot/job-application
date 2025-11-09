<template>
   <div class="page-content">
      <!--breadcrumb-->
      <div class="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
         <div class="breadcrumb-title pe-3">Create Job</div>
         <div class="ms-auto">
            <div class="btn-group">
               <button type="button" class="btn btn-primary">Job List</button>
            </div>
         </div>
      </div>
      <!--end breadcrumb-->
      <div class="card">
         <div class="card-body">
            <div class="bs-stepper-content">
               <form >
                  <div class="row g-3">
                     <div class="col-12 col-lg-6">
                        <label for="FisrtName" class="form-label">Advt. No. (Job Ref. No.)</label>
                        <input type="text" class="form-control" id="FisrtName" placeholder="RCB/01/2021/Recruitment/HR">
                     </div>

                     <div class="col-12 col-lg-6">
                        <label for="title" class="form-label">Title</label>
                        <input type="text" class="form-control" id="title" placeholder="Management Assistant">
                     </div>
                     <div class="col-12 col-lg-6">
                        <label for="code" class="form-label">Code</label>
                        <input type="text" class="form-control" id="code" placeholder="2021/A-2">
                     </div>
                    
                                          <div class="col-12 col-lg-6">
                        <label for="advt_file" class="form-label">Advt file url</label>
                         <input type="text" class="form-control" id="advt_file" placeholder="Advt file url">
                     </div>
                     <div class="col-12 col-lg-6">
                        <label for="InputEmail" class="form-label">Category</label>
                         <div class="form-check">
									<input class="form-check-input" type="checkbox" value="General" id="General" checked>
									<label class="form-check-label" for="General">General</label>
								</div>
                                <div class="form-check">
									<input class="form-check-input" type="checkbox" value="OBC" id="OBC" checked>
									<label class="form-check-label" for="OBC">OBC</label>
								</div>
                                <div class="form-check">
									<input class="form-check-input" type="checkbox" value="SC" id="SC" checked>
									<label class="form-check-label" for="SC">SC</label>
								</div>
                                <div class="form-check">
									<input class="form-check-input" type="checkbox" value="ST" id="ST" checked>
									<label class="form-check-label" for="ST">ST</label>
								</div>
                                <div class="form-check">
									<input class="form-check-input" type="checkbox" value="EWS" id="EWS" checked>
									<label class="form-check-label" for="EWS">EWS</label>
								</div>
                     </div>
                         <div class="col-12 col-lg-6">
                        <label for="Mode of Application" class="form-label">Mode of Application</label>
                        <div class="form-check">
									<input class="form-check-input" type="checkbox" value="Short Term Contract" id="Short Term Contract" checked>
									<label class="form-check-label" for="Short Term Contract">Short Term Contract</label>
								</div>
                        <div class="form-check">
									<input class="form-check-input" type="checkbox" value="Direct Recruitment" id="Direct Recruitment">
									<label class="form-check-label" for="Direct Recruitment">Direct Recruitment</label>
								</div>
                                <div class="form-check">
									<input class="form-check-input" type="checkbox" value="Deputation" id="Deputation">
									<label class="form-check-label" for="Deputation">Deputation</label>
								</div>
                                
                                
                     </div>
                     <div class="col-12 col-lg-6">
                        <label for="from_date" class="form-label">From date</label>
                       <input type="date" class="form-control" name="from_date">
                     </div>
                     <div class="col-12 col-lg-6">
                        <label for="to_date" class="form-label">To date</label>
                        <input type="date" class="form-control" name="to_date">
                     </div>
                     <div class="col-12 col-lg-6">
                        <label for="fee_apply" class="form-label">Fee Apply</label>
                        <select class="form-select" id="fee_apply" name="fee_apply" aria-label="Default select example">
                           <option value="Yes">Yes</option>
                           <option value="No">No</option>
                          
                        </select>
                     </div>
                     <div class="col-12 col-lg-6">
                        <label for="fee" class="form-label">Fee</label>
                        <input type="text" name="fee" class="form-control" id="fee" placeholder="200">
                     </div>
                     
                     <div class="col-12 col-lg-6">
                        <button class="btn btn-success px-4" onclick="stepper1.next()">Submit</button>
                     </div>
                  </div>
                  <!---end row-->
               </form>
            </div>
         </div>
      </div>
      <!--end stepper one--> 
   </div>
</template>