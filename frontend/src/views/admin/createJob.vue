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
                        <label for="PhoneNumber" class="form-label">Mode of Application</label>
                        <input type="text" class="form-control" id="PhoneNumber" placeholder="Phone Number">
                     </div>
                     <div class="col-12 col-lg-6">
                        <label for="InputEmail" class="form-label">Category</label>
                        <input type="text" class="form-control" id="InputEmail" placeholder="Enter Email Address">
                     </div>
                     <div class="col-12 col-lg-6">
                        <label for="advt_file" class="form-label">Advt file url</label>
                         <input type="text" class="form-control" id="advt_file" placeholder="Advt file url">
                     </div>
                     <div class="col-12 col-lg-6">
                        <label for="InputCountry" class="form-label">From date</label>
                        <select class="form-select" id="InputCountry" aria-label="Default select example">
                           <option value="1">One</option>
                           <option value="2">Two</option>
                           <option value="3">Three</option>
                        </select>
                     </div>
                     <div class="col-12 col-lg-6">
                        <label for="InputLanguage" class="form-label">To date</label>
                        <select class="form-select" id="InputLanguage" aria-label="Default select example">
                           <option value="1">One</option>
                           <option value="2">Two</option>
                           <option value="3">Three</option>
                        </select>
                     </div>
                     <div class="col-12 col-lg-6">
                        <label for="InputLanguage" class="form-label">Fee Apply</label>
                        <select class="form-select" id="InputLanguage" aria-label="Default select example">
                           <option value="1">One</option>
                           <option value="2">Two</option>
                           <option value="3">Three</option>
                        </select>
                     </div>
                     <div class="col-12 col-lg-6">
                        <label for="InputLanguage" class="form-label">Fee</label>
                        <select class="form-select" id="InputLanguage" aria-label="Default select example">
                           <option value="1">One</option>
                           <option value="2">Two</option>
                           <option value="3">Three</option>
                        </select>
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