<template>
   <div>
    <!-- NAVIGATION CARD -->
    <div class="card">
      <div class="card-body">
        <nav class="navbar navbar-expand-lg navbar-dark rounded" style="background: #094280;">
          <div class="container-fluid">
            <a class="navbar-brand d-flex align-items-center" href="#"
               style="background:whitesmoke; padding:6px 10px; border-radius:4px;">
              <img src="/assets/images/logo-icon.png" alt="Logo" style="width: 200px;" class="img-fluid" />
            </a>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent2">
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent2">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" href="#"><i class="bi bi-briefcase-fill me-1"></i>Active Positions</a>
                </li>

                <li class="nav-item">
                  <a class="nav-link" href="#"><i class="bi bi-clipboard-check"></i>Previous Job Applications</a>
                </li>

                <li class="nav-item">
                  <a class="nav-link" href="#"><i class="bi bi-envelope"></i>Contact</a>
                </li>
              </ul>

              <form class="d-flex">
                <button class="btn btn-light px-4" type="submit">
                  <i class="fadeIn animated bx bx-log-out"></i> Log-out
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div>
    </div>
   <div class="page-content mb-0">
      <div class="container mb-0">
         <div class="text-center mb-0">
            <h4 class="fw-bold text-primary text-center">Application Form</h4>
            <h5 class="text-secondary mt-2">Job Title: {{ jobTitle }}</h5>
         </div>
         <div class="row mb-0">
            <div class="col-md-6 text-start">
               <h6 class="mb-0">Job Code: <span class="fw-normal">{{ jobCode }}</span></h6>
            </div>
            <div class="col-md-6 text-end">
               <h6 class="mb-0">Advt. No: <span class="fw-normal">{{ advtNo }}</span></h6>
            </div>
         </div>
         <hr >
      </div>
      <hr>
      <div id="stepper2" class="bs-stepper">
         <div class="card">
            <div class="card-body">
               <div id="stepper3" class="bs-stepper gap-4 vertical">
                  <div class="bs-stepper-header" role="tablist">
                     <div class="step" data-target="#personal-info-id">
                        <div class="step-trigger" role="tab" id="personal-info-tab" aria-controls="personal-info-id">
                           <div class="bs-stepper-circle"><i class='bx bx-user fs-4'></i></div>
                           <div class="">
                              <h5 class="mb-0 steper-title ">Personal Info</h5>
                              <!-- <p class="mb-0 steper-sub-title">Enter Your Details</p> -->
                           </div>
                        </div>
                     </div>
                     <div class="step" data-target="#education-id">
                        <div class="step-trigger" role="tab" id="education-details-tab" aria-controls="education-id">
                           <div class="bs-stepper-circle"><i class='bx bxs-graduation fs-4'></i></div>
                           <div class="">
                              <h5 class="mb-0 steper-title">Education</h5>
                              <!-- <p class="mb-0 steper-sub-title">Education Details</p> -->
                           </div>
                        </div>
                     </div>
                     <div class="step" data-target="#work-experience-id">
                        <div class="step-trigger" role="tab" id="stepper3trigger2" aria-controls="work-experience-id">
                           <div class="bs-stepper-circle"><i class='bx bx-briefcase fs-4'></i></div>
                           <div class="">
                              <h5 class="mb-0 steper-title">Work Experience</h5>
                              <!-- <p class="mb-0 steper-sub-title">Starting from present.</p> -->
                           </div>
                        </div>
                     </div>
                     <div class="step" data-target="#trainings-undergone-id">
                        <div class="step-trigger" role="tab" id="stepper3trigger4" aria-controls="trainings-undergone-id">
                           <div class="bs-stepper-circle"><i class='bi bi-lightbulb'></i></div>
                           <div class="">
                              <h5 class="mb-0 steper-title">Trainings Undergone</h5>
                              <!-- <p class="mb-0 steper-sub-title">Experience Details</p> -->
                           </div>
                        </div>
                     </div>
                     <div class="step" data-target="#awards-honors-id">
                        <div class="step-trigger" role="tab" id="stepper3trigger4" aria-controls="awards-honors-id">
                           <div class="bs-stepper-circle"><i class="bi bi-trophy"></i></div>
                           <div class="">
                              <h5 class="mb-0 steper-title">Awards & Honors</h5>
                              <!-- <p class="mb-0 steper-sub-title">Experience Details</p> -->
                           </div>
                        </div>
                     </div>
                     <div class="step" data-target="#references-id">
                        <div class="step-trigger" role="tab" id="stepper3trigger4" aria-controls="references-id">
                           <div class="bs-stepper-circle"><i class="bi bi-person-lines-fill"></i></div>
                           <div class="">
                              <h5 class="mb-0 steper-title">Reference</h5>
                              <!-- <p class="mb-0 steper-sub-title">Experience Details</p> -->
                           </div>
                        </div>
                     </div>
                     <div class="step" data-target="#expertise-related-id">
                        <div class="step-trigger" role="tab" id="stepper3trigger4" aria-controls="expertise-related-id">
                           <div class="bs-stepper-circle"><i class="bi bi-gear"></i></div>
                           <div class="">
                              <h5 class="mb-0 steper-title">Expertise related to the position applied</h5>
                              <!-- <p class="mb-0 steper-sub-title">Experience Details</p> -->
                           </div>
                        </div>
                     </div>
                     <div class="step" data-target="#declaration-id">
                        <div class="step-trigger" role="tab" id="stepper3trigger4" aria-controls="declaration-id">
                           <div class="bs-stepper-circle"><i class="bi bi-check2-square"></i></div>
                           <div class="">
                              <h5 class="mb-0 steper-title">Declaration</h5>
                              <!-- <p class="mb-0 steper-sub-title">Experience Details</p> -->
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="bs-stepper-content">
                     <form >
                        <div id="personal-info-id" role="tabpane3" class="bs-stepper-pane content fade" aria-labelledby="personal-info-tab">
                           <h5 class="mb-1">Your Personal Information</h5>
                           <div class="row g-3">
                              <!-- First row fields -->
                              <div class="col-12 col-lg-6">
                                 <label for="first-name required-label" class="form-label">First Name</label>
                                 <input type="text" class="form-control" id="first-name" v-model="form.firstName" placeholder="First Name" required>
                              </div>
                              <div class="col-12 col-lg-6">
                                 <label for="gender" class="form-label required-label">Gender</label>
                                 <select name="gender" class="form-control" id="gender" v-model="form.gender" required>
                                    <option value="">Select</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Other">Other</option>
                                 </select>
                              </div>
                              <div class="col-12 col-lg-6">
                                 <label for="phone-number" class="form-label required-label">Phone Number</label>
                                 <input type="text" class="form-control" id="phone-number" v-model="form.phoneNumber" placeholder="Phone Number" required>
                              </div>
                              <div class="col-12 col-lg-6">
                                 <label for="input-email" class="form-label required-label">E-mail Address</label>
                                 <input type="email" class="form-control" id="input-email" v-model="form.email" placeholder="Enter Email Address" required>
                              </div>
                              <!-- Flatpickr Date of Birth -->
                              <div class="col-12 col-lg-6">
                                 <label for="date-of-birth" class="form-label required-label">Date of Birth</label>
                                 <flat-pickr
                                    id="date-of-birth"
                                    v-model="form.dateOfBirth"
                                    :config="dateConfig"
                                    class="form-control"
                                    placeholder="Choose a date"
                                    required
                                    />
                              </div>
                              <div class="col-12 col-lg-6">
                                 <label for="marital-status" class="form-label required-label">Marital Status</label>
                                 <select name="marital_status" class="form-control" id="marital-status" v-model="form.marital_status" required>
                                    <option value="">Select</option>
                                    <option value="Single">Single</option>
                                    <option value="Married">Married</option>
                                 </select>
                              </div>
                              <div class="col-12 col-lg-6">
                                 <label for="father-name" class="form-label required-label">Father's Name</label>
                                 <input type="text" class="form-control" id="father-name" v-model="form.fatherName" placeholder="Father's Name" required>
                              </div>
                              <div class="col-12 col-lg-6">
                                 <label for="nationality" class="form-label required-label">Nationality</label>
                                 <input type="text" class="form-control" id="nationality" v-model="form.nationality" placeholder="Nationality" required>
                              </div>
                              <div class="col-12 col-lg-6">
                                 <label for="mode-of-application" class="form-label required-label">Mode of Application</label>
                                
                                 <select class="form-select" id="mode_of_application" v-model="form.mode_of_application" aria-label="Mode of Application" required>
    
                                    <option v-for="(opt, idx) in mode_of_application" :key="idx" :value="opt">{{ opt }}</option>
                                 </select>
                              </div>
                              <div class="col-12 col-lg-6">
                                 <label for="current-organization" class="form-label required-label">Name of Current Organization & Type (Govt./Pvt.)</label>
                                 <input type="text" class="form-control" id="current-organization" v-model="form.currentOrganization" placeholder="Name of Current Organization & Type (i.e. Govt./Pvt. etc.)" required>
                              </div>
                              <div class="col-12 col-lg-6">
                                 <label for="total-emoluments" class="form-label required-label">Total Emoluments drawn presently</label>
                                 <input type="number" class="form-control" id="total-emoluments" v-model="form.totalEmoluments" placeholder="Total Emoluments drawn presently" required>
                              </div>
                              <div class="col-12 col-lg-6">
                                 <label for="total-year-exp" class="form-label required-label">Total years of Post Qualification Experience</label>
                                 <input type="number" class="form-control" id="total-year-exp" v-model="form.totalEmoluments" placeholder="Total years of Post Qualification Experience" required>
                              </div>
                              <div class="col-12 col-lg-6">
                                 <label for="aadhaar-number" class="form-label required-label">Aadhaar Number</label>
                                 <input type="text" class="form-control" id="aadhaar-number" v-model="form.aadhaarNumber" placeholder="Aadhaar Number" readonly>
                              </div>
                              <div class="col-12 col-lg-6">
                                 <label for="social-category" class="form-label required-label">Social Category</label>
                                 <select class="form-select" id="social-category" v-model="form.socialCategory" aria-label="Default select example" required>
    
                                    <option v-for="(opt, idx) in socialCategoryOptions" :key="idx" :value="opt">{{ opt }}</option>
                                 </select>
                              </div>

                               
                              <!-- Correspondence Address block -->
                              <div class="col-12 col-lg-6">
                                 <label for="address-correspondence" class="form-label required-label">Address for Correspondence</label>
                                 <textarea class="form-control" id="address-correspondence" v-model="form.correspondence.address" placeholder="Address for Correspondence" required></textarea>
                              </div>
                              <div class="col-12 col-lg-6">
                                 <label for="city-correspondence" class="form-label required-label">City</label>
                                 <input type="text" class="form-control" id="city-correspondence" v-model="form.correspondence.city" placeholder="City" required>
                              </div>
                              <div class="col-12 col-lg-6">
                                 <label for="state-correspondence" class="form-label required-label">State</label>
                                 <input type="text" class="form-control" id="state-correspondence" v-model="form.correspondence.state" placeholder="State" required>
                              </div>
                              <div class="col-12 col-lg-6">
                                 <label for="country-correspondence" class="form-label required-label">Country</label>
                                 <input type="text" class="form-control" id="country-correspondence" v-model="form.correspondence.country" placeholder="Country" required>
                              </div>
                              <div class="col-12 col-lg-6">
                                 <label for="pin-correspondence" class="form-label required-label">Pin/Zip Code</label>
                                 <input type="text" class="form-control" id="pin-correspondence" v-model="form.correspondence.pin" placeholder="Pin/Zip Code" required>
                              </div>
                              <div class="col-12 col-lg-6">
                                 <label for="phone-correspondence" class="form-label required-label">Phone No. at Correspondence Address</label>
                                 <input type="text" class="form-control" id="phone-correspondence" v-model="form.correspondence.phone" placeholder="Phone No. at Correspondence Address" required>
                              </div>
                              <!-- Checkbox to copy once -->
                              <div class="col-12 col-lg-12">
                                 <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="same-address-checkbox" v-model="sameAddresses" @change="copyAddressOnce">
                                    <label class="form-check-label" for="same-address-checkbox">
                                    Check if Correspondence Address & Permanent Address are same
                                    </label>
                                 </div>
                              </div>
                              <!-- Permanent Address block (same place, always visible) -->
                              <div class="col-12 col-lg-6">
                                 <label for="permanent-address" class="form-label required-label">Permanent Address</label>
                                 <textarea class="form-control" id="permanent-address" v-model="form.permanent.address" placeholder="Permanent Address" required></textarea>
                              </div>
                              <div class="col-12 col-lg-6">
                                 <label for="city-permanent" class="form-label required-label">City</label>
                                 <input type="text" class="form-control" id="city-permanent" v-model="form.permanent.city" placeholder="City" required>
                              </div>
                              <div class="col-12 col-lg-6">
                                 <label for="state-permanent" class="form-label required-label">State</label>
                                 <input type="text" class="form-control" id="state-permanent" v-model="form.permanent.state" placeholder="State" required>
                              </div>
                              <div class="col-12 col-lg-6">
                                 <label for="country-permanent" class="form-label required-label">Country</label>
                                 <input type="text" class="form-control" id="country-permanent" v-model="form.permanent.country" placeholder="Country" required>
                              </div>
                              <div class="col-12 col-lg-6">
                                 <label for="pin-permanent" class="form-label required-label">Pin/Zip Code</label>
                                 <input type="text" class="form-control" id="pin-permanent" v-model="form.permanent.pin" placeholder="Pin/Zip Code" required>
                              </div>
                              <div class="col-12 col-lg-6">
                                 <label for="phone-permanent" class="form-label required-label">Phone No. at Permanent Address</label>
                                 <input type="text" class="form-control" id="phone-permanent" v-model="form.permanent.phone" placeholder="Phone No. at Permanent Address" required>
                              </div>
                              <!-- Remaining fields -->
                              <div class="col-12 col-lg-6">
                                 <label for="police-station" class="form-label required-label">Nearest Police Station</label>
                                 <input type="text" class="form-control" id="police-station" v-model="form.policeStation" placeholder="Nearest Police Station" required>
                              </div>
                              <div class="col-12 col-lg-6">
                                 <label for="photo" class="form-label required-label">Photo</label>
                                 <input type="file" accept="image/*" class="form-control" id="photo" @change="onFileChange($event, 'photo')" required>
                              </div>
                              <div class="col-12 col-lg-6">
                                 <label for="signature" class="form-label required-label">Signature</label>
                                 <input type="file" accept="image/*" class="form-control" id="signature" @change="onFileChange($event, 'signature')" required>
                              </div>
                              <div class="col-12 col-lg-6">
                                 <label for="upload-cv" class="form-label required-label">Upload CV</label>
                                 <input type="file" accept="pdf/*" class="form-control" id="upload-cv" @change="onFileChange($event, 'cv')" required>
                              </div>
                              <div class="col-12 col-lg-6">
                                 <button class="btn btn-secondary me-2" type="button" @click="saveDraft">
                                 Save Draft
                                 </button>
                                 <button class="btn btn-primary px-4" type="button" onclick="stepper3.next()">Next<i class='bx bx-right-arrow-alt ms-2'></i></button>
                              </div>
                           </div>
                           <!-- end row -->
                        </div>
                        <div id="education-id" role="tabpane3" class="bs-stepper-pane content fade" aria-labelledby="education-details-tab">
                           <div class="d-flex align-items-center justify-content-between mb-3">
                              <div>
                                 <h5 class="mb-1">Your Education Information</h5>
                                 <!-- <p class="mb-0 text-muted">Inform companies about your education life</p> -->
                              </div>
                           </div>
                           <div class="card shadow-sm">
                              <div class="card-body p-2">
                                 <div class="table-responsive">
                                    <table class="table table-hover mb-0 align-middle">
                                       <thead class="table-light">
                                          <tr>
                                             <th>Examination</th>
                                             <th >Name of Degree / Certificate</th>
                                             <th>University / Institute / Board</th>
                                             <th  style="width:140px">Year (MM/YYYY)</th>
                                             <th>Subjects / Specialization</th>
                                             <th>Percentage / Grade / CGPA</th>
                                          </tr>
                                       </thead>
                                       <tbody>
                                          <tr v-for="(row, idx) in education" :key="row.key">
                                             <td>
                                                <select class="form-select form-select-sm" v-model="row.examination" required disabled>
                                                   <option>Doctoral</option>
                                                   <option>Master's</option>
                                                   <option >Bachelor's</option>
                                                   <option>Senior Secondary</option>
                                                   <option >Secondary</option>
                                                   <option>Any Other</option>
                                                </select>
                                             </td>
                                             <td>
                                                <input type="text" class="form-control form-control-sm" v-model="row.degreeName" placeholder="Degree / Certificate" required>
                                             </td>
                                             <td>
                                                <input type="text" class="form-control form-control-sm" v-model="row.institute" placeholder="University / Institute / Board" required>
                                             </td>
                                             <!-- using native month picker for month/year -->
                                             <td>
                                                <input type="month" class="form-control form-control-sm" v-model="row.year" :max="maxMonth" required>
                                             </td>
                                             <td>
                                                <input type="text" class="form-control form-control-sm" v-model="row.subjects" placeholder="Subjects / Specialization" required>
                                             </td>
                                             <td>
                                                <input type="text" class="form-control form-control-sm" v-model="row.grade" placeholder="Percentage / Grade / CGPA" required>
                                             </td>
                                          </tr>
                                       </tbody>
                                    </table>
                                 </div>
                                 <!-- actions -->
                                 <div class="d-flex justify-content-between align-items-center mt-3">
                                    <div>
                                       <button class="btn btn-primary me-2" type="button" onclick="stepper3.previous()">
                                       <i class="bx bx-left-arrow-alt me-2"></i>Previous
                                       </button>
                                       <button class="btn btn-secondary me-2" type="button" @click="saveDraft">
                                       Save Draft
                                       </button>
                                       <button class="btn btn-primary" type="button" onclick="stepper3.next()">
                                       Next <i class="bx bx-right-arrow-alt ms-2"></i>
                                       </button>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div id="work-experience-id" role="tabpane3" class="bs-stepper-pane content fade" aria-labelledby="stepper3trigger2">
                           <h5 class="mb-1">Work Experience</h5>
                           <!-- <p class="mb-4">List your previous organizations and roles</p> -->
                           <div class="card shadow-sm">
                              <!-- preserve original style idea of wider card-body without breaking layout -->
                              <div class="card-body p-2 card-body-wide">
                                 <div class="table-responsive">
                                    <table class="table table-hover mb-0 align-middle">
                                       <thead class="table-light">
                                          <tr>
                                             <th>Organization</th>
                                             <th>Position</th>
                                             <th>Pay Level / Salary</th>
                                             <th>From (MM-YYYY)</th>
                                             <th>To (MM-YYYY)</th>
                                             <th>Description of Jobs Handled</th>
                                             <th class="text-center">Action</th>
                                          </tr>
                                       </thead>
                                       <tbody>
                                          <tr v-for="(row, index) in experiences" :key="row.key">
                                             <td>
                                                <input
                                                   type="text"
                                                   class="form-control form-control-sm"
                                                   v-model="row.organization"
                                                   placeholder="Organization name"
                                                   />
                                             </td>
                                             <td>
                                                <input
                                                   type="text"
                                                   class="form-control form-control-sm"
                                                   v-model="row.position"
                                                   placeholder="Position / Role"
                                                   />
                                             </td>
                                             <td>
                                                <input
                                                   type="text"
                                                   class="form-control form-control-sm"
                                                   v-model="row.salary"
                                                   placeholder="Pay Level / Salary"
                                                   />
                                             </td>
                                             <td>
                                                <input
                                                   type="month"
                                                   class="form-control form-control-sm"
                                                   v-model="row.from"
                                                   />
                                             </td>
                                             <td>
                                                <input
                                                   type="month"
                                                   class="form-control form-control-sm"
                                                   v-model="row.to"
                                                   />
                                             </td>
                                             <td>
                                                <textarea
                                                   class="form-control form-control-sm"
                                                   v-model="row.description"
                                                   rows="2"
                                                   placeholder="Brief description of work handled"
                                                   ></textarea>
                                             </td>
                                             <td class="text-center">
                                                <button
                                                   class="btn btn-outline-danger btn-sm"
                                                   @click="deleteRowWorkExperience(index)"
                                                   v-if="experiences.length > 1"
                                                   >
                                                <i class="bi bi-trash-fill"></i>
                                                </button>
                                             </td>
                                          </tr>
                                       </tbody>
                                    </table>
                                    <div class="mt-3 text-end">
                                       <button class="btn btn-primary btn-sm" @click="addRowWorkExperience">
                                       <i class="bi bi-plus-circle"></i> Add Row
                                       </button>
                                    </div>
                                 </div>
                                 <!-- actions -->
                                 <div class="d-flex justify-content-between align-items-center mt-3">
                                    <div>
                                       <button class="btn btn-primary me-2" type="button" onclick="stepper3.previous()">
                                       <i class="bx bx-left-arrow-alt me-2"></i>Previous
                                       </button>
                                       <button class="btn btn-secondary me-2" type="button" @click="saveDraft">
                                       Save Draft
                                       </button>
                                       <button class="btn btn-primary" type="button" onclick="stepper3.next()">
                                       Next <i class="bx bx-right-arrow-alt ms-2"></i>
                                       </button>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <!---end row-->
                        </div>
                        <div id="trainings-undergone-id" role="tabpane3" class="bs-stepper-pane content fade" aria-labelledby="stepper3trigger2">
                           <h5 class="mb-1">Trainings Undergone</h5>
                           <!-- <p class="mb-4">List your previous organizations and roles</p> -->
                           <div class="card shadow-sm">
                              <!-- preserve original style idea of wider card-body without breaking layout -->
                              <div class="card-body p-2 card-body-wide">
                                 <div class="table-responsive">
                                    <table class="table table-hover mb-0 align-middle">
                                       <thead class="table-light">
                                          <tr>
                                             <th>S.No.</th>
                                             <th>Organization</th>
                                             <th>Name of the Course	</th>
                                             <th>Institute</th>
                                             <th>Duration(In days)</th>
                                          </tr>
                                       </thead>
                                       <tbody>
                                          <tr v-for="(row, index) in trainings" :key="row.key">
                                             <td>{{ index + 1 }}</td>
                                             <td>
                                                <input
                                                   type="text"
                                                   class="form-control form-control-sm"
                                                   v-model="row.organization"
                                                   placeholder="Organization name"
                                                   />
                                             </td>
                                             <td>
                                                <input
                                                   type="text"
                                                   class="form-control form-control-sm"
                                                   v-model="row.course"
                                                   placeholder="Name of the Course"
                                                   />
                                             </td>
                                             <td>
                                                <input
                                                   type="text"
                                                   class="form-control form-control-sm"
                                                   v-model="row.institute"
                                                   placeholder="Institute"
                                                   />
                                             </td>
                                             <td>
                                                <input
                                                   type="text"
                                                   class="form-control form-control-sm"
                                                   v-model="row.duration"
                                                   placeholder="Duration"
                                                   />
                                             </td>
                                             <td class="text-center">
                                                <button
                                                   class="btn btn-outline-danger btn-sm"
                                                   @click="deleteRowTrainings(index)"
                                                   title="Delete Row"
                                                   >
                                                <i class="bi bi-trash"></i>
                                                </button>
                                             </td>
                                          </tr>
                                       </tbody>
                                    </table>
                                    <div class="mt-3 text-end">
                                       <button class="btn btn-primary btn-sm" @click="addRowTrainings">
                                       <i class="bi bi-plus-circle"></i> Add Row
                                       </button>
                                    </div>
                                 </div>
                                 <!-- actions -->
                                 <div class="d-flex justify-content-between align-items-center mt-3">
                                    <div>
                                       <button class="btn btn-primary me-2" type="button" onclick="stepper3.previous()">
                                       <i class="bx bx-left-arrow-alt me-2"></i>Previous
                                       </button>
                                       <button class="btn btn-secondary me-2" type="button" @click="saveDraft">
                                       Save Draft
                                       </button>
                                       <button class="btn btn-primary" type="button" onclick="stepper3.next()">
                                       Next <i class="bx bx-right-arrow-alt ms-2"></i>
                                       </button>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <!---end row-->
                        </div>
                        <div id="awards-honors-id" role="tabpane3" class="bs-stepper-pane content fade" aria-labelledby="stepper3trigger2">
                           <h5 class="mb-1">Awards & Honors</h5>
                           <!-- <p class="mb-4">List your prev</p> -->
                           <div class="card shadow-sm">
                              <!-- preserve original style idea of wider card-body without breaking layout -->
                              <div class="card-body p-2 card-body-wide">
                                 <div class="table-responsive">
                                    <table class="table table-hover mb-0 align-middle">
                                       <thead class="table-light">
                                          <tr>
                                             <th>Awarding Organization</th>
                                             <th>Name of the Award	</th>
                                             <th>	Nature of the Award(Monetary/Travel/Medal/Certificate/Others)</th>
                                             <th>Year</th>
                                          </tr>
                                       </thead>
                                       <tbody>
                                          <tr v-for="(award, index) in awards" :key="award.key">
                                             <td>
                                                <input
                                                   v-model="award.organization"
                                                   type="text"
                                                   class="form-control form-control-sm"
                                                   placeholder="Organization name"
                                                   />
                                             </td>
                                             <td>
                                                <input
                                                   v-model="award.name"
                                                   type="text"
                                                   class="form-control form-control-sm"
                                                   placeholder="Name of the Award"
                                                   />
                                             </td>
                                             <td>
                                                <input
                                                   v-model="award.nature"
                                                   type="text"
                                                   class="form-control form-control-sm"
                                                   placeholder="Nature of the Award"
                                                   />
                                             </td>
                                             <td>
                                                <input
                                                   v-model="award.year"
                                                   type="text"
                                                   class="form-control form-control-sm"
                                                   placeholder="Year"
                                                   />
                                             </td>
                                             <td class="text-center">
                                                <button
                                                   type="button"
                                                   class="btn btn-sm btn-outline-danger"
                                                   @click="deleteRowAwards(index)"
                                                   v-if="awards.length > 1"
                                                   >
                                                <i class="bx bx-trash"></i>
                                                </button>
                                             </td>
                                          </tr>
                                       </tbody>
                                    </table>
                                    <div class="mt-3 text-end">
                                       <button class="btn btn-primary btn-sm" @click="addRowAwards">
                                       <i class="bi bi-plus-circle"></i> Add Row
                                       </button>
                                    </div>
                                 </div>
                                 <!-- actions -->
                                 <div class="d-flex justify-content-between align-items-center mt-3">
                                    <div>
                                       <button class="btn btn-primary me-2" type="button" onclick="stepper3.previous()">
                                       <i class="bx bx-left-arrow-alt me-2"></i>Previous
                                       </button>
                                       <button class="btn btn-secondary me-2" type="button" @click="saveDraft">
                                       Save Draft
                                       </button>
                                       <button class="btn btn-primary" type="button" onclick="stepper3.next()">
                                       Next <i class="bx bx-right-arrow-alt ms-2"></i>
                                       </button>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <!---end row-->
                        </div>
                        <div id="references-id" role="tabpane3" class="bs-stepper-pane content fade" aria-labelledby="stepper3trigger2">
                           <h5 class="mb-1">References</h5>
                           <!-- <p class="mb-4">List your prev</p> -->
                           <div class="card shadow-sm">
                              <!-- preserve original style idea of wider card-body without breaking layout -->
                              <div class="card-body p-2 card-body-wide">
                                 <div class="table-responsive">
                                    <table class="table table-hover mb-0 align-middle">
                                       <thead class="table-light">
                                          <tr>
                                             <th>Sr</th>
                                             <th class="required-label">Name</th>
                                             <th class="required-label">Organization</th>
                                             <th class="required-label">Position</th>
                                             <th class="required-label">Email ID</th>
                                             <th class="required-label">Phone Number</th>
                                          </tr>
                                       </thead>
                                       <tbody>
                                          <tr>
                                             <td>
                                                1
                                             </td>
                                             <td>
                                                <input type="text" class="form-control form-control-sm"  placeholder="name" required>
                                             </td>
                                             <td>
                                                <input type="text" class="form-control form-control-sm"  placeholder="Organization" required>
                                             </td>
                                             <td>
                                                <input type="text" class="form-control form-control-sm"  placeholder="Position" required>
                                             </td>
                                             <td>
                                                <input type="text" class="form-control form-control-sm" placeholder="Email ID" required>
                                             </td>
                                             <td>
                                                <input type="text" class="form-control form-control-sm" placeholder="Phone Number" required>
                                             </td>
                                          </tr>
                                          <tr>
                                             <td>
                                                2
                                             </td>
                                             <td>
                                                <input type="text" class="form-control form-control-sm"  placeholder="name" required>
                                             </td>
                                             <td>
                                                <input type="text" class="form-control form-control-sm"  placeholder="Organization" required>
                                             </td>
                                             <td>
                                                <input type="text" class="form-control form-control-sm"  placeholder="Position" required>
                                             </td>
                                             <td>
                                                <input type="text" class="form-control form-control-sm" placeholder="Email ID" required>
                                             </td>
                                             <td>
                                                <input type="text" class="form-control form-control-sm" placeholder="Phone Number" required>
                                             </td>
                                          </tr>
                                          <tr>
                                             <td>
                                                3
                                             </td>
                                             <td>
                                                <input type="text" class="form-control form-control-sm"  placeholder="name" required>
                                             </td>
                                             <td>
                                                <input type="text" class="form-control form-control-sm"  placeholder="Organization" required>
                                             </td>
                                             <td>
                                                <input type="text" class="form-control form-control-sm"  placeholder="Position" required>
                                             </td>
                                             <td>
                                                <input type="text" class="form-control form-control-sm" placeholder="Email ID" required>
                                             </td>
                                             <td>
                                                <input type="text" class="form-control form-control-sm" placeholder="Phone Number" required>
                                             </td>
                                          </tr>
                                       </tbody>
                                    </table>
                                 </div>
                                 <!-- actions -->
                                 <div class="d-flex justify-content-between align-items-center mt-3">
                                    <div>
                                       <button class="btn btn-primary me-2" type="button" onclick="stepper3.previous()">
                                       <i class="bx bx-left-arrow-alt me-2"></i>Previous
                                       </button>
                                       <button class="btn btn-secondary me-2" type="button" @click="saveDraft">
                                       Save Draft
                                       </button>
                                       <button class="btn btn-primary" type="button" onclick="stepper3.next()">
                                       Next <i class="bx bx-right-arrow-alt ms-2"></i>
                                       </button>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <!---end row-->
                        </div>
                        <div id="expertise-related-id" role="tabpane3" class="bs-stepper-pane content fade" aria-labelledby="stepper3trigger2">
                           <h5 class="mb-1">Expertise related to the position applied</h5>
                           <div class="row g-3">
                              <div class="col-12 col-lg-12">
                                 <label for="expertise-related" class="form-label required-label">Expertise related to the position applied</label>
                                 <textarea class="form-control" id="expertise-related"  rows="4" cols="150" placeholder="Max. 500 words & Please don't use any special characters" required></textarea>
                              </div>
                              <div class="d-flex justify-content-between align-items-center mt-3">
                                 <div>
                                    <button class="btn btn-primary me-2" type="button" onclick="stepper3.previous()">
                                    <i class="bx bx-left-arrow-alt me-2"></i>Previous
                                    </button>
                                    <button class="btn btn-secondary me-2" type="button" @click="saveDraft">
                                    Save Draft
                                    </button>
                                    <button class="btn btn-primary" type="button" onclick="stepper3.next()">
                                    Next <i class="bx bx-right-arrow-alt ms-2"></i>
                                    </button>
                                 </div>
                              </div>
                           </div>
                           <!-- end row -->
                        </div>
                        <div id="declaration-id" role="tabpane3" class="bs-stepper-pane content fade" aria-labelledby="stepper3trigger2">
                           <h5 class="mb-1 required-label">Declaration</h5>
                           <div class="row g-3">
                              <div class="col-12 col-lg-12">
                                 <label for="expertise-related" class="form-label"></label>
                                 I <input type ="text" class="form-control-sm required-label" required > hereby declare that the information furnished above is true, complete and correct to the best of my knowledge and belief. I understand that in the event of my information being found false or incorrect at any stage, my candidature/ appointment shall be liable to cancellation / termination without notice or any compensation in lieu thereof. I have read the terms & conditions related to the position applied for and I will abide by them.<br>
                                 <hr>
                                 <p>(only for candidates serving in Government / PSUs / Autonomous institutions)</p>
                                 <br>
                                 I <input type ="text" value="N/A" class="form-control-sm required-label" required> hereby declare that I have informed my parent organisation regarding my application and the copy of this application will be forwarded by my parent organisation in due course of time and/or I will produce a NOC from my parent office, if my candidature is considered for being called for interview.<br>
                              </div>
                              <div class="d-flex justify-content-between align-items-center mt-3">
                                 <div>
                                    <button class="btn btn-primary me-2" type="button" onclick="stepper3.previous()">
                                    <i class="bx bx-left-arrow-alt me-2"></i>Previous
                                    </button>
                                    <button class="btn btn-success px-4" type="button" @click="saveDraft">
                                    Perview
                                    </button>
                                 </div>
                              </div>
                           </div>
                           <!-- end row -->
                        </div>
                     </form>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <!--end stepper two--> 
   </div>
   <footer class="page-footer fixed-bottom text-center py-3"
          style="background:#094280; color:white; width:100%; left:0; padding-left:30px; padding-right:30px;">
    <p class="mb-0">Copyright © 2023. All rights reserved.</p>
  </footer>
   </div>
</template>
<script setup>
   import { reactive, ref } from 'vue'
   import FlatPickr from 'vue-flatpickr-component'
   import axios from "@/axios";
   import 'flatpickr/dist/flatpickr.css'
    import { onMounted, onBeforeUnmount, nextTick, watch } from 'vue';
import { useRoute } from 'vue-router';
const socialCategoryOptions = ref([]);
const mode_of_application=ref([]);
const jobTitle = ref('');
const jobCode = ref('');
const advtNo = ref('');
async function loadJobMeta(jobId) {
  if (!jobId) return;

  try {
    const jobRes = await axios.get(`/jobs/${jobId}`); 
    
    const job = jobRes.data && jobRes.data.data ? jobRes.data.data : null;
    if (!job) return;

    jobTitle.value = job.title || '';
    jobCode.value = job.code || '';
    advtNo.value = job.advt_no || job.advtNo || '';

   
    if (Array.isArray(job.category) && job.category.length) {
      socialCategoryOptions.value = job.category.slice(); 
    } else if (Array.isArray(job.social_category) && job.social_category.length) {
      socialCategoryOptions.value = job.social_category.slice();
    } 

   
   if (Array.isArray(job.mode_of_application) && job.mode_of_application.length > 0) {
  mode_of_application.value = job.mode_of_application.slice();
} else {
  // fallback if not provided by API
  mode_of_application.value = [];
}

  } catch (err) {
    console.error('Failed to load job metadata:', err.response?.data || err.message);
    // Keep fallback/default option lists
  }
}

   /* Flatpickr config */
   const dateConfig = {
     dateFormat: 'Y-m-d',
     maxDate: 'today'
   }
   const dateMonthConfig = {
     dateFormat: 'Y-m',
   }
   
   /* ---------- FORM DATA ---------- */
   const form = reactive({
     firstName: '',
     gender: '',
     phoneNumber: '',
     email: '',
     dateOfBirth: null,
     fatherName: '',
     nationality: '',
     modeOfApplication: '',
     currentOrganization: '',
     totalEmoluments: '',
     aadhaarNumber: '',
     socialCategory: '',
     marital_status: '',
     correspondence: {
       address: '',
       city: '',
       state: '',
       country: '',
       pin: '',
       phone: ''
     },
     permanent: {
       address: '',
       city: '',
       state: '',
       country: '',
       pin: '',
       phone: ''
     },
     policeStation: '',
     files: {
       photo: null,
       signature: null,
       cv: null
     }
   })
   
   /* ---------- ADDRESS COPY ---------- */
   const sameAddresses = ref(false)
   function copyAddressOnce() {
     if (sameAddresses.value) {
       Object.assign(form.permanent, { ...form.correspondence })
     }
   }
   
   /* ---------- FILE HANDLER ---------- */
   function onFileChange(event, key) {
     const f = event.target.files?.[0]
     form.files[key] = f || null
   }
   
   /* ---------- EDUCATION TABLE ---------- */
   const minRows = 3
   const maxMonth = new Date().toISOString().slice(0, 7)
   
   function makeRow(overrides = {}) {
     return {
       key: `r_${Math.random().toString(36).slice(2, 9)}`,
       examination: overrides.examination || 'Any Other',
       degreeName: overrides.degreeName || '',
       institute: overrides.institute || '',
       year: overrides.year || '',
       subjects: overrides.subjects || '',
       grade: overrides.grade || ''
     }
   }
   
   const education = reactive([
     makeRow({ examination: 'Doctoral' }),
     makeRow({ examination: "Master's" }),
     makeRow({ examination: "Bachelor's" }),
     makeRow({ examination: 'Senior Secondary' }),
     makeRow({ examination: 'Secondary' }),
     makeRow({ examination: 'Any Other' })
   ])
   
   function addRowEducation() {
     education.push(makeRow())
   }
   function removeRowEducation(index) {
     if (education.length > minRows) education.splice(index, 1)
   }
   function duplicateRowEducation(index) {
     const src = education[index]
     const copy = makeRow({ ...src })
     education.splice(index + 1, 0, copy)
   }
   
   /* ---------- WORK EXPERIENCE TABLE ---------- */
   const experiences = reactive([
     {
       key: Date.now(),
       organization: '',
       position: '',
       salary: '',
       from: '',
       to: '',
       description: ''
     }
   ])
   
   function addRowWorkExperience() {
     experiences.push({
       key: Date.now() + Math.random(),
       organization: '',
       position: '',
       salary: '',
       from: '',
       to: '',
       description: ''
     })
   }
   
   function deleteRowWorkExperience(index) {
     experiences.splice(index, 1)
   }
   
   /* ---------- TRAININGS TABLE ---------- */
   const trainings = reactive([
     {
       key: Date.now(),
       organization: '',
       course: '',
       institute: '',
       duration: ''
     }
   ])
   
   function addRowTrainings() {
     trainings.push({
       key: Date.now() + Math.random(),
       organization: '',
       course: '',
       institute: '',
       duration: ''
     })
   }
   
   function deleteRowTrainings(index) {
     trainings.splice(index, 1)
   }
   /* ---------- AWARDS & HONORS TABLE ---------- */
   const awards = reactive([
   {
    key: Date.now(),
    organization: '',
    name: '',
    nature: '',
    year: ''
   }
   ])
   
   function addRowAwards() {
   awards.push({
    key: Date.now() + Math.random(),
    organization: '',
    name: '',
    nature: '',
    year: ''
   })
   }
   
   function deleteRowAwards(index) {
   awards.splice(index, 1)
   }
   
  

const route = useRoute();

let stepperInstance = null;

function destroyStepper() {
  try {
    if (stepperInstance && typeof stepperInstance.destroy === 'function') {
      stepperInstance.destroy();
    }
  } catch (e) {
    // Some versions might not provide destroy(); clean up manually:
    stepperInstance = null;
  } finally {
    stepperInstance = null;
    if (window.stepper3) window.stepper3 = null;
  }
}

async function initStepper() {
  await nextTick();
  const el = document.querySelector('#stepper3');
  if (!el) return;

  // destroy previous to avoid leaks
  destroyStepper();

  // prefer global Stepper (from public assets)
  const StepperCtor = window.Stepper || window.bsStepper || window.bs_stepper || window.BsStepper;
  if (!StepperCtor) {
    console.warn('bs-stepper constructor not found on window. Make sure the bs-stepper script is loaded.');
    // Fallback: add minimal classes so UI looks active for first step
    const firstStep = el.querySelector('.bs-stepper-header .step');
    if (firstStep) firstStep.classList.add('active');
    el.classList.add('linear');
    return;
  }

  try {
    stepperInstance = new StepperCtor(el, { linear: false, animation: true });

    // expose simple API for inline calls in template: stepper3.next()
    window.stepper3 = {
      next: () => stepperInstance.next(),
      previous: () => stepperInstance.previous(),
      to: (n) => { if (typeof stepperInstance.to === 'function') stepperInstance.to(n); },
      instance: stepperInstance
    };

    // Ensure first step shows active state if needed by theme:
    const first = el.querySelector('.bs-stepper-header .step');
    if (first && !first.classList.contains('active')) {
      first.classList.add('active');
      el.classList.add('linear'); // optional if theme expects this
    }
  } catch (err) {
    console.error('Failed to init bs-stepper:', err);
  }
}
//job application 
function getAuthToken() {
  
  return localStorage.getItem('token') || null;
}
function isAuthenticated() {
  return !!getAuthToken();
}

function validateForm() {
  const errors = [];

  // Basic personal info checks (extend as needed)
  if (!form.firstName || !form.firstName.trim()) errors.push('First name is required');
  if (!form.email || !form.email.trim()) errors.push('Email is required');
  if (!form.phoneNumber || !form.phoneNumber.trim()) errors.push('Phone number is required');
  if (!form.dateOfBirth) errors.push('Date of birth is required');

  // Correspondence address
  if (!form.correspondence?.address || !form.correspondence.address.trim()) {
    errors.push('Correspondence address is required');
  }
  if (!form.permanent?.address || !form.permanent.address.trim()) {
    errors.push('Permanent address is required');
  }

  // Education: require at least one row with degreeName
  const hasEducation = education.some(r => r.degreeName && r.degreeName.trim());
  if (!hasEducation) errors.push('At least one education record is required');

  // Example file validation: require CV at least for saving final preview but for draft we allow missing.
  // For draft we don't require files — comment out if you want to require them:
  // if (!form.files.cv) errors.push('Please upload CV');

  return errors;
}

/* ---------- prepare payload (plain JS object) ---------- */
function buildPayload() {
  // copy simple fields
  const payload = {
    job_id: Number(route.params.id || 0),
    applicant_id: Number(route.params.id || 1), // will be set by backend if authenticated user
    // personal
    first_name: form.firstName,
    gender: form.gender,
    phone_number: form.phoneNumber,
    alt_phone_number: form.altPhoneNumber || null,
    email: form.email,
    date_of_birth: form.dateOfBirth,
    father_name: form.fatherName,
    nationality: form.nationality,
    mode_of_application: form.mode_of_application || form.modeOfApplication || null,
    current_organization: form.currentOrganization,
    current_organization_type: form.currentOrganizationType || null,
    total_emoluments: form.totalEmoluments,
    total_experience_years: form.totalExperienceYears || null,
    aadhaar_number: form.aadhaarNumber,
    social_category: form.socialCategory,
    marital_status: form.marital_status,

    // addresses
    corr_address: form.correspondence.address,
    corr_city: form.correspondence.city,
    corr_state: form.correspondence.state,
    corr_country: form.correspondence.country,
    corr_pin: form.correspondence.pin,
    corr_phone: form.correspondence.phone,

    perm_address: form.permanent.address,
    perm_city: form.permanent.city,
    perm_state: form.permanent.state,
    perm_country: form.permanent.country,
    perm_pin: form.permanent.pin,
    perm_phone: form.permanent.phone,

    police_station: form.policeStation,
    expertise_text: form.expertise_text || null,
    declaration_name: form.declaration_name || null,
    declaration_noc_name: form.declaration_noc_name || null,

    // nested tables as arrays
    educations: education.map(r => ({
      examination: r.examination,
      degreeName: r.degreeName,
      institute: r.institute,
      year: r.year,
      subjects: r.subjects,
      grade: r.grade
    })),

    experiences: experiences.map(e => ({
      organization: e.organization,
      position: e.position,
      salary: e.salary,
      from: e.from,
      to: e.to,
      description: e.description
    })),

    trainings: trainings.map(t => ({
      organization: t.organization,
      course: t.course,
      institute: t.institute,
      duration: t.duration
    })),

    awards: awards.map(a => ({
      organization: a.organization,
      name: a.name,
      nature: a.nature,
      year: a.year
    })),

    // you can add references array if you have it in reactive state
    // references: references.map(...)
    status: 'draft'
  };

  return payload;
}

/* ---------- helper to send payload to server (FormData if files present) ---------- */
async function sendDraftToServer(serverDraftId = null) {
  const payload = buildPayload();

  // decide if any file is present
  const hasFiles = form.files && (form.files.photo || form.files.signature || form.files.cv);

  let config = { headers: {} };
  const token = getAuthToken();
  if (token) config.headers.Authorization = `Bearer ${token}`;

  try {
    if (hasFiles) {
      const fd = new FormData();
      fd.append('payload', JSON.stringify(payload));
      if (form.files.photo) fd.append('photo', form.files.photo);
      if (form.files.signature) fd.append('signature', form.files.signature);
      if (form.files.cv) fd.append('cv', form.files.cv);

      if (serverDraftId) {
        const res = await axios.put(`/job-applications/draft/${serverDraftId}`, fd, {
          headers: { ...config.headers, 'Content-Type': 'multipart/form-data' }
        });
        return res.data;
      } else {
        const res = await axios.post(`/job-applications/draft`, fd, {
          headers: { ...config.headers, 'Content-Type': 'multipart/form-data' }
        });
        return res.data;
      }
    } else {
      // JSON payload
      if (serverDraftId) {
        const res = await axios.put(`/job-applications/draft/${serverDraftId}`, payload, config);
        return res.data;
      } else {
        const res = await axios.post(`/job-applications/draft`, payload, config);
        return res.data;
      }
    }
  } catch (err) {
    // bubble up error
    throw err;
  }
}

/* ---------- saveDraft function - wired to button ---------- */
async function saveDraft() {
  // run validation
  const errors = validateForm();
  if (errors.length > 0) {
    // show errors — replace with your toast/modal UI
    alert('Please fix errors before saving draft:\n' + errors.join('\n'));
    return;
  }

  const jobId = route.params.id;
  if (!jobId) {
    alert('Job ID missing.');
    return;
  }

  // If authenticated -> send to server (create/update)
  if (isAuthenticated()) {
    try {
      // check if we have server draft id stored for this job
      const serverDraftKey = `job_draft_server_${jobId}`;
      let serverDraftId = localStorage.getItem(serverDraftKey);

      const response = await sendDraftToServer(serverDraftId || null);

      // backend should return created/updated draft id in response.data.id or similar
      const returnedId = response?.data?.id || response?.id || response?.draft_id || null;
      if (returnedId) {
        localStorage.setItem(serverDraftKey, returnedId);
        // also clear localStorage draft if exists and server save succeeded
        localStorage.removeItem(`job_draft_local_${jobId}`);
      }

      alert('Draft saved to server successfully.');
    } catch (err) {
      console.error('Failed save draft to server:', err.response?.data || err.message);
      alert('Failed to save draft to server. Draft saved locally instead.');
      // fallback: save locally
      localSaveDraftLocal(jobId);
    }
  } else {
    // Not authenticated -> save to localStorage
    localSaveDraftLocal(jobId);
    alert('You are not logged in. Draft saved locally. It will sync when you login.');
  }
}

/* ---------- local save ---------- */
function localSaveDraftLocal(jobId) {
  const payload = buildPayload();
  const key = `job_draft_local_${jobId}`;
  try {
    // cannot store File objects in localStorage so remove files and store file metadata
    const payloadForLocal = {
      ...payload,
      files: {
        photo: form.files.photo ? { name: form.files.photo.name, type: form.files.photo.type, size: form.files.photo.size } : null,
        signature: form.files.signature ? { name: form.files.signature.name } : null,
        cv: form.files.cv ? { name: form.files.cv.name } : null
      }
    };
    localStorage.setItem(key, JSON.stringify(payloadForLocal));
  } catch (e) {
    console.error('Failed to save local draft', e);
    alert('Failed to save local draft (storage error).');
  }
}

/* ---------- load existing draft on mount ---------- */
async function loadDraftOnStart() {
  const jobId = route.params.id;
  if (!jobId) return;

  // 1) if authenticated try server draft first
  if (isAuthenticated()) {
    try {
      // try endpoint that returns a draft for current user & job
      let res;
      try {
        res = await axios.get(`/job-applications/draft?job_id=${jobId}`, {
          headers: { Authorization: `Bearer ${getAuthToken()}` }
        });
      } catch (e) {
        // fallback to other possible endpoint name
        res = await axios.get(`/job-applications?job_id=${jobId}&status=draft`, {
          headers: { Authorization: `Bearer ${getAuthToken()}` }
        });
      }

      const serverDraft = res?.data?.data || res?.data || null;
      if (serverDraft) {
        populateFormFromDraft(serverDraft);
        // store server draft id locally
        const serverDraftKey = `job_draft_server_${jobId}`;
        const sid = serverDraft.id || serverDraft.draft_id || serverDraft._id || null;
        if (sid) localStorage.setItem(serverDraftKey, sid);
        return;
      }
    } catch (err) {
      console.warn('No server draft or failed to fetch server draft:', err.message || err);
      // fallthrough to local draft
    }
  }

  // 2) check localStorage draft
  const localKey = `job_draft_local_${jobId}`;
  const localRaw = localStorage.getItem(localKey);
  if (localRaw) {
    try {
      const obj = JSON.parse(localRaw);
      populateFormFromDraft(obj);
    } catch (e) {
      console.error('Failed parse local draft', e);
    }
  }
}

/* ---------- populate the form from draft payload (server or local) ---------- */
function populateFormFromDraft(payload) {
  if (!payload) return;

  // simple fields - be defensive, map existence
  form.firstName = payload.first_name || payload.firstName || form.firstName;
  form.gender = payload.gender || form.gender;
  form.phoneNumber = payload.phone_number || payload.phoneNumber || form.phoneNumber;
  form.email = payload.email || form.email;
  form.dateOfBirth = payload.date_of_birth || payload.dateOfBirth || form.dateOfBirth;
  form.fatherName = payload.father_name || form.fatherName;
  form.nationality = payload.nationality || form.nationality;
  form.mode_of_application = payload.mode_of_application || form.mode_of_application;
  form.currentOrganization = payload.current_organization || form.currentOrganization;
  form.totalEmoluments = payload.total_emoluments || payload.totalEmoluments || form.totalEmoluments;
  form.aadhaarNumber = payload.aadhaar_number || form.aadhaarNumber;
  form.socialCategory = payload.social_category || form.socialCategory;

  // addresses
  form.correspondence.address = payload.corr_address || payload.correspondence?.address || form.correspondence.address;
  form.correspondence.city = payload.corr_city || form.correspondence.city;
  form.permanent.address = payload.perm_address || form.permanent.address;
  form.permanent.city = payload.perm_city || form.permanent.city;
  form.policeStation = payload.police_station || form.policeStation;

  // nested arrays — replace existing arrays if present
  if (Array.isArray(payload.educations)) {
    education.splice(0, education.length, ...payload.educations.map((r) => ({
      key: `r_${Math.random().toString(36).slice(2, 9)}`,
      examination: r.examination || 'Any Other',
      degreeName: r.degreeName || r.degree_name || '',
      institute: r.institute || r.institute,
      year: r.year || '',
      subjects: r.subjects || '',
      grade: r.grade || ''
    })));
  }

  if (Array.isArray(payload.experiences)) {
    experiences.splice(0, experiences.length, ...payload.experiences.map((e) => ({
      key: Date.now() + Math.random(),
      organization: e.organization || '',
      position: e.position || '',
      salary: e.salary || '',
      from: e.from || '',
      to: e.to || '',
      description: e.description || ''
    })));
  }

  if (Array.isArray(payload.trainings)) {
    trainings.splice(0, trainings.length, ...payload.trainings.map((t) => ({
      key: Date.now() + Math.random(),
      organization: t.organization || '',
      course: t.course || '',
      institute: t.institute || '',
      duration: t.duration || ''
    })));
  }

  if (Array.isArray(payload.awards)) {
    awards.splice(0, awards.length, ...payload.awards.map((a) => ({
      key: Date.now() + Math.random(),
      organization: a.organization || '',
      name: a.name || '',
      nature: a.nature || '',
      year: a.year || ''
    })));
  }

  // FILES: note localStorage cannot store File objects. For server payloads, you may want to set photo_url etc.
  if (payload.photo_url) {
    // optionally show preview / set a URL field
    form.files.photo = null; // cannot set a File object
    // you can store photo preview URL separately if needed
    form.photo_preview_url = payload.photo_url;
  }
}

/* ---------- auto-sync on login (storage event) ---------- */
window.addEventListener('storage', async (evt) => {
  // look for token added in other tab
  if (evt.key === 'token' && evt.newValue) {
    // token added -> user logged in in another tab; try to sync local draft
    const jobId = route.params.id;
    if (!jobId) return;
    const localKey = `job_draft_local_${jobId}`;
    const localRaw = localStorage.getItem(localKey);
    if (localRaw) {
      try {
        const obj = JSON.parse(localRaw);
        // attempt to post to server now
        try {
          const response = await sendDraftToServer(null); // will use buildPayload() and current files
          const returnedId = response?.data?.id || response?.id || null;
          if (returnedId) {
            localStorage.setItem(`job_draft_server_${jobId}`, returnedId);
            localStorage.removeItem(localKey);
            console.info('Local draft synced to server after login.');
          }
        } catch (e) {
          console.warn('Auto-sync of local draft failed after login:', e.message || e);
        }
      } catch (e) {
        console.error('Failed parse local draft for auto-sync', e);
      }
    }
  }
});

onMounted(() => {
  initStepper();
  const jobId = route.params.id;
  loadJobMeta(jobId);
  loadDraftOnStart();
  
});

// re-init when route param changes (for router-link navigation)
watch(() => route.params.id, (n, o) => {
  if (n !== o) initStepper();
  if (newId && newId !== oldId) {
    loadJobMeta(newId);
   
  }
});

onBeforeUnmount(() => {
  destroyStepper();
});

</script>
<style scoped>
   .form-control, .form-select, textarea.form-control {
   margin-bottom: 0.5rem;
   }
</style>