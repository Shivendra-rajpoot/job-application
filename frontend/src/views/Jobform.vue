<template>
   <div class="page-content">
      <div class="container my-4">
         <div class="text-center mb-4">
            <h4 class="fw-bold text-primary text-center">Application Form</h4>
            <h5 class="text-secondary mt-2">Job Title: Sr. Liaison Assistant</h5>
         </div>
         <div class="row">
            <div class="col-md-6 text-start">
               <h6 class="mb-0">Job Code: <span class="fw-normal">2025/DBT-HRD-PMU-02/02</span></h6>
            </div>
            <div class="col-md-6 text-end">
               <h6 class="mb-0">Advt. No: <span class="fw-normal">RCB/DBT-HRD PMU/02/2025/Rectt./HR</span></h6>
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
                              <h5 class="mb-0 steper-title">Personal Info</h5>
                              <p class="mb-0 steper-sub-title">Enter Your Details</p>
                           </div>
                        </div>
                     </div>
                     <div class="step" data-target="#education-id">
                        <div class="step-trigger" role="tab" id="education-details-tab" aria-controls="education-id">
                           <div class="bs-stepper-circle"><i class='bx bxs-graduation fs-4'></i></div>
                           <div class="">
                              <h5 class="mb-0 steper-title">Education</h5>
                              <p class="mb-0 steper-sub-title">Education Details</p>
                           </div>
                        </div>
                     </div>
                     <div class="step" data-target="#work-experience-id">
                        <div class="step-trigger" role="tab" id="stepper3trigger2" aria-controls="work-experience-id">
                           <div class="bs-stepper-circle"><i class='bx bx-briefcase fs-4'></i></div>
                           <div class="">
                              <h5 class="mb-0 steper-title">Work Experience</h5>
                              <p class="mb-0 steper-sub-title">Starting from present.</p>
                           </div>
                        </div>
                     </div>
                     <div class="step" data-target="#knowledge-of-relevant-field">
                        <div class="step-trigger" role="tab" id="stepper3trigger4" aria-controls="knowledge-of-relevant-field">
                           <div class="bs-stepper-circle"><i class='bx bx-file fs-4'></i></div>
                           <div class="">
                              <h5 class="mb-0 steper-title">Knowledge of Relevant Field and Experience</h5>
                              <p class="mb-0 steper-sub-title">Experience Details</p>
                           </div>
                        </div>
                     </div>

                     <div class="step" data-target="#trainings-undergone-id">
                        <div class="step-trigger" role="tab" id="stepper3trigger4" aria-controls="knowledge-of-relevant-field">
                           <div class="bs-stepper-circle"><i class='bi bi-lightbulb'></i></div>
                           <div class="">
                              <h5 class="mb-0 steper-title">Trainings Undergone</h5>
                              <p class="mb-0 steper-sub-title">Experience Details</p>
                           </div>
                        </div>
                     </div>
                      <div class="step" data-target="#awards-honors-id">
                        <div class="step-trigger" role="tab" id="stepper3trigger4" aria-controls="awards-honors-id">
                           <div class="bs-stepper-circle"><i class="bi bi-trophy"></i></div>
                           <div class="">
                              <h5 class="mb-0 steper-title">Awards & Honors</h5>
                              <p class="mb-0 steper-sub-title">Experience Details</p>
                           </div>
                        </div>
                     </div>
                     <div class="step" data-target="#references-id">
                        <div class="step-trigger" role="tab" id="stepper3trigger4" aria-controls="references-id">
                           <div class="bs-stepper-circle"><i class="bi bi-person-lines-fill"></i></div>
                           <div class="">
                              <h5 class="mb-0 steper-title">Reference</h5>
                              <p class="mb-0 steper-sub-title">Experience Details</p>
                           </div>
                        </div>
                     </div>
                     <div class="step" data-target="#expertise-related-id">
                        <div class="step-trigger" role="tab" id="stepper3trigger4" aria-controls="expertise-related-id">
                           <div class="bs-stepper-circle"><i class="bi bi-gear"></i></div>
                           <div class="">
                              <h5 class="mb-0 steper-title">Expertise related to the position applied</h5>
                              <p class="mb-0 steper-sub-title">Experience Details</p>
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
                                 <label for="first-name" class="form-label">First Name</label>
                                 <input type="text" class="form-control" id="first-name" v-model="form.firstName" placeholder="First Name">
                              </div>
                              <div class="col-12 col-lg-6">
                                 <label for="gender" class="form-label">Gender</label>
                                 <input type="text" class="form-control" id="gender" v-model="form.gender" placeholder="Gender">
                              </div>
                              <div class="col-12 col-lg-6">
                                 <label for="phone-number" class="form-label">Phone Number</label>
                                 <input type="text" class="form-control" id="phone-number" v-model="form.phoneNumber" placeholder="Phone Number">
                              </div>
                              <div class="col-12 col-lg-6">
                                 <label for="input-email" class="form-label">E-mail Address</label>
                                 <input type="email" class="form-control" id="input-email" v-model="form.email" placeholder="Enter Email Address">
                              </div>
                              <!-- Flatpickr Date of Birth -->
                              <div class="col-12 col-lg-6">
                                 <label for="date-of-birth" class="form-label">Date of Birth</label>
                                 <flat-pickr
                                    id="date-of-birth"
                                    v-model="form.dateOfBirth"
                                    :config="dateConfig"
                                    class="form-control"
                                    placeholder="Choose a date"
                                    />
                              </div>
                              <div class="col-12 col-lg-6">
                                 <label for="marital-status" class="form-label">Marital Status</label>
                                 <input type="text" class="form-control" id="marital-status" v-model="form.marital_status" placeholder="marital-status">
                              </div>
                              <div class="col-12 col-lg-6">
                                 <label for="father-name" class="form-label">Father's Name</label>
                                 <input type="text" class="form-control" id="father-name" v-model="form.fatherName" placeholder="Father's Name">
                              </div>
                              <div class="col-12 col-lg-6">
                                 <label for="nationality" class="form-label">Nationality</label>
                                 <input type="text" class="form-control" id="nationality" v-model="form.nationality" placeholder="Nationality">
                              </div>
                              <div class="col-12 col-lg-6">
                                 <label for="mode-of-application" class="form-label">Mode of Application</label>
                                 <input type="text" class="form-control" id="mode-of-application" v-model="form.modeOfApplication" placeholder="Mode of Application">
                              </div>
                              <div class="col-12 col-lg-6">
                                 <label for="current-organization" class="form-label">Name of Current Organization & Type (Govt./Pvt.)*</label>
                                 <input type="text" class="form-control" id="current-organization" v-model="form.currentOrganization" placeholder="Name of Current Organization & Type (i.e. Govt./Pvt. etc.)*">
                              </div>
                              <div class="col-12 col-lg-6">
                                 <label for="total-emoluments" class="form-label">Total Emoluments drawn presently</label>
                                 <input type="text" class="form-control" id="total-emoluments" v-model="form.totalEmoluments" placeholder="Total Emoluments drawn presently">
                              </div>
                              <div class="col-12 col-lg-6">
                                 <label for="aadhaar-number" class="form-label">Aadhaar Number</label>
                                 <input type="text" class="form-control" id="aadhaar-number" v-model="form.aadhaarNumber" placeholder="Aadhaar Number">
                              </div>
                              <div class="col-12 col-lg-6">
                                 <label for="social-category" class="form-label">Social Category</label>
                                 <select class="form-select" id="social-category" v-model="form.socialCategory" aria-label="Default select example">
                                    <option value="">---</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                 </select>
                              </div>
                              <!-- Correspondence Address block -->
                              <div class="col-12 col-lg-6">
                                 <label for="address-correspondence" class="form-label">Address for Correspondence</label>
                                 <textarea class="form-control" id="address-correspondence" v-model="form.correspondence.address" placeholder="Address for Correspondence"></textarea>
                              </div>
                              <div class="col-12 col-lg-6">
                                 <label for="city-correspondence" class="form-label">City</label>
                                 <input type="text" class="form-control" id="city-correspondence" v-model="form.correspondence.city" placeholder="City">
                              </div>
                              <div class="col-12 col-lg-6">
                                 <label for="state-correspondence" class="form-label">State</label>
                                 <input type="text" class="form-control" id="state-correspondence" v-model="form.correspondence.state" placeholder="State">
                              </div>
                              <div class="col-12 col-lg-6">
                                 <label for="country-correspondence" class="form-label">Country</label>
                                 <input type="text" class="form-control" id="country-correspondence" v-model="form.correspondence.country" placeholder="Country">
                              </div>
                              <div class="col-12 col-lg-6">
                                 <label for="pin-correspondence" class="form-label">Pin/Zip Code</label>
                                 <input type="text" class="form-control" id="pin-correspondence" v-model="form.correspondence.pin" placeholder="Pin/Zip Code">
                              </div>
                              <div class="col-12 col-lg-6">
                                 <label for="phone-correspondence" class="form-label">Phone No. at Correspondence Address</label>
                                 <input type="text" class="form-control" id="phone-correspondence" v-model="form.correspondence.phone" placeholder="Phone No. at Correspondence Address">
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
                                 <label for="permanent-address" class="form-label">Permanent Address</label>
                                 <textarea class="form-control" id="permanent-address" v-model="form.permanent.address" placeholder="Permanent Address"></textarea>
                              </div>
                              <div class="col-12 col-lg-6">
                                 <label for="city-permanent" class="form-label">City</label>
                                 <input type="text" class="form-control" id="city-permanent" v-model="form.permanent.city" placeholder="City">
                              </div>
                              <div class="col-12 col-lg-6">
                                 <label for="state-permanent" class="form-label">State</label>
                                 <input type="text" class="form-control" id="state-permanent" v-model="form.permanent.state" placeholder="State">
                              </div>
                              <div class="col-12 col-lg-6">
                                 <label for="country-permanent" class="form-label">Country</label>
                                 <input type="text" class="form-control" id="country-permanent" v-model="form.permanent.country" placeholder="Country">
                              </div>
                              <div class="col-12 col-lg-6">
                                 <label for="pin-permanent" class="form-label">Pin/Zip Code</label>
                                 <input type="text" class="form-control" id="pin-permanent" v-model="form.permanent.pin" placeholder="Pin/Zip Code">
                              </div>
                              <div class="col-12 col-lg-6">
                                 <label for="phone-permanent" class="form-label">Phone No. at Permanent Address</label>
                                 <input type="text" class="form-control" id="phone-permanent" v-model="form.permanent.phone" placeholder="Phone No. at Permanent Address">
                              </div>
                              <!-- Remaining fields -->
                              <div class="col-12 col-lg-6">
                                 <label for="police-station" class="form-label">Nearest Police Station</label>
                                 <input type="text" class="form-control" id="police-station" v-model="form.policeStation" placeholder="Nearest Police Station">
                              </div>
                              <div class="col-12 col-lg-6">
                                 <label for="photo" class="form-label">Photo</label>
                                 <input type="file" class="form-control" id="photo" @change="onFileChange($event, 'photo')">
                              </div>
                              <div class="col-12 col-lg-6">
                                 <label for="signature" class="form-label">Signature</label>
                                 <input type="file" class="form-control" id="signature" @change="onFileChange($event, 'signature')">
                              </div>
                              <div class="col-12 col-lg-6">
                                 <label for="upload-cv" class="form-label">Upload CV</label>
                                 <input type="file" class="form-control" id="upload-cv" @change="onFileChange($event, 'cv')">
                              </div>
                              <div class="col-12 col-lg-6">
                                 <button class="btn btn-primary px-4" type="button" @click="nextStep">Next<i class='bx bx-right-arrow-alt ms-2'></i></button>
                              </div>
                           </div>
                           <!-- end row -->
                        </div>
                        <div id="education-id" role="tabpane3" class="bs-stepper-pane content fade" aria-labelledby="education-details-tab">
                           <div class="d-flex align-items-center justify-content-between mb-3">
                              <div>
                                 <h5 class="mb-1">Your Education Information</h5>
                                 <p class="mb-0 text-muted">Inform companies about your education life</p>
                              </div>
                           </div>
                           <div class="card shadow-sm">
                              <div class="card-body p-2">
                                 <div class="table-responsive">
                                    <table class="table table-hover mb-0 align-middle">
                                       <thead class="table-light">
                                          <tr>
                                             <th>Examination</th>
                                             <th>Name of Degree / Certificate</th>
                                             <th>University / Institute / Board</th>
                                             <th style="width:140px">Year (MM/YYYY)</th>
                                             <th>Subjects / Specialization</th>
                                             <th>Percentage / Grade / CGPA</th>
                                          </tr>
                                       </thead>
                                       <tbody>
                                          <tr v-for="(row, idx) in education" :key="row.key">
                                             <td class="fw-semibold">
                                                <select class="form-select form-select-sm" v-model="row.examination">
                                                   <option>Doctoral</option>
                                                   <option>Master's</option>
                                                   <option>Bachelor's</option>
                                                   <option>Senior Secondary</option>
                                                   <option>Secondary</option>
                                                   <option>Any Other</option>
                                                </select>
                                             </td>
                                             <td>
                                                <input type="text" class="form-control form-control-sm" v-model="row.degreeName" placeholder="Degree / Certificate">
                                             </td>
                                             <td>
                                                <input type="text" class="form-control form-control-sm" v-model="row.institute" placeholder="University / Institute / Board">
                                             </td>
                                             <!-- using native month picker for month/year -->
                                             <td>
                                                <input type="month" class="form-control form-control-sm" v-model="row.year" :max="maxMonth">
                                             </td>
                                             <td>
                                                <input type="text" class="form-control form-control-sm" v-model="row.subjects" placeholder="Subjects / Specialization">
                                             </td>
                                             <td>
                                                <input type="text" class="form-control form-control-sm" v-model="row.grade" placeholder="Percentage / Grade / CGPA">
                                             </td>
                                          </tr>
                                       </tbody>
                                    </table>
                                 </div>
                                 <!-- actions -->
                                 <div class="d-flex justify-content-between align-items-center mt-3">
                                    <div>
                                       <button class="btn btn-secondary me-2" type="button" @click="saveDraft">Save Draft</button>
                                       <button class="btn btn-primary" type="button" @click="nextStep">Next <i class="bx bx-right-arrow-alt ms-2"></i></button>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div id="work-experience-id" role="tabpane3" class="bs-stepper-pane content fade" aria-labelledby="stepper3trigger2">
                           <h5 class="mb-1">Experience</h5>
                           <p class="mb-4">List your previous organizations and roles</p>
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
                                          </tr>
                                       </thead>
                                       <tbody>
                                          <tr>
                                             <td>
                                                <input type="text" class="form-control form-control-sm"  placeholder="Organization name">
                                             </td>
                                             <td>
                                                <input type="text" class="form-control form-control-sm"  placeholder="Position / Role">
                                             </td>
                                             <td>
                                                <input type="text" class="form-control form-control-sm"  placeholder="Pay Level / Salary">
                                             </td>
                                             <td>
                                                <input type="month" class="form-control form-control-sm">
                                             </td>
                                             <td>
                                                <input type="month" class="form-control form-control-sm" >
                                             </td>
                                             <td>
                                                <textarea class="form-control form-control-sm"  rows="2" placeholder="Brief description of work handled"></textarea>
                                             </td>
                                          </tr>
                                       </tbody>
                                    </table>
                                 </div>
                                 <!-- actions -->
                                 <div class="d-flex justify-content-between align-items-center mt-3">
                                    <div>
                                       <button class="btn btn-secondary me-2" type="button" @click="saveDraft">Save Draft</button>
                                       <button class="btn btn-primary" type="button" @click="nextStep">Next <i class="bx bx-right-arrow-alt ms-2"></i></button>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <!---end row-->
                        </div>
                         <div id="knowledge-of-relevant-field" role="tabpane3" class="bs-stepper-pane content fade" aria-labelledby="stepper3trigger2">
                           <h5 class="mb-1">Knowledge of Relevant Field and Experience</h5>
                           <p class="mb-4">List your previous organizations and roles</p>
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
                                          </tr>
                                       </thead>
                                       <tbody>
                                          <tr>
                                             <td>
                                                <input type="text" class="form-control form-control-sm"  placeholder="Organization name">
                                             </td>
                                             <td>
                                                <input type="text" class="form-control form-control-sm"  placeholder="Position / Role">
                                             </td>
                                             <td>
                                                <input type="text" class="form-control form-control-sm"  placeholder="Pay Level / Salary">
                                             </td>
                                             <td>
                                                <input type="month" class="form-control form-control-sm">
                                             </td>
                                             <td>
                                                <input type="month" class="form-control form-control-sm" >
                                             </td>
                                             <td>
                                                <textarea class="form-control form-control-sm"  rows="2" placeholder="Brief description of work handled"></textarea>
                                             </td>
                                          </tr>
                                       </tbody>
                                    </table>
                                 </div>
                                 <!-- actions -->
                                 <div class="d-flex justify-content-between align-items-center mt-3">
                                    <div>
                                       <button class="btn btn-secondary me-2" type="button" @click="saveDraft">Save Draft</button>
                                       <button class="btn btn-primary" type="button" @click="nextStep">Next <i class="bx bx-right-arrow-alt ms-2"></i></button>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <!---end row-->
                        </div>

                        <div id="trainings-undergone-id" role="tabpane3" class="bs-stepper-pane content fade" aria-labelledby="stepper3trigger2">
                           <h5 class="mb-1">Trainings Undergone</h5>
                           <p class="mb-4">List your previous organizations and roles</p>
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
                                          <tr>
                                              <td>
                                                1
                                             </td>
                                             <td>
                                                <input type="text" class="form-control form-control-sm"  placeholder="Organization name">
                                             </td>
                                             <td>
                                                <input type="text" class="form-control form-control-sm"  placeholder="Name of the Course">
                                             </td>
                                             <td>
                                                <input type="text" class="form-control form-control-sm"  placeholder="Institute">
                                             </td>
                                             <td>
                                                <input type="text" class="form-control form-control-sm" placeholder="Duration">
                                             </td>
                                            
                                          </tr>
                                       </tbody>
                                    </table>
                                 </div>
                                 <!-- actions -->
                                 <div class="d-flex justify-content-between align-items-center mt-3">
                                    <div>
                                       <button class="btn btn-secondary me-2" type="button" @click="saveDraft">Save Draft</button>
                                       <button class="btn btn-primary" type="button" @click="nextStep">Next <i class="bx bx-right-arrow-alt ms-2"></i></button>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <!---end row-->
                        </div>
                        <div id="awards-honors-id" role="tabpane3" class="bs-stepper-pane content fade" aria-labelledby="stepper3trigger2">
                           <h5 class="mb-1">Awards & Honors</h5>
                           <p class="mb-4">List your prev</p>
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
                                          <tr>
                                              
                                             <td>
                                                <input type="text" class="form-control form-control-sm"  placeholder="Organization name">
                                             </td>
                                             <td>
                                                <input type="text" class="form-control form-control-sm"  placeholder="Name of the Course">
                                             </td>
                                             <td>
                                                <input type="text" class="form-control form-control-sm"  placeholder="Institute">
                                             </td>
                                             <td>
                                                <input type="text" class="form-control form-control-sm" placeholder="Duration">
                                             </td>
                                            
                                          </tr>
                                       </tbody>
                                    </table>
                                 </div>
                                 <!-- actions -->
                                 <div class="d-flex justify-content-between align-items-center mt-3">
                                    <div>
                                       <button class="btn btn-secondary me-2" type="button" @click="saveDraft">Save Draft</button>
                                       <button class="btn btn-primary" type="button" @click="nextStep">Next <i class="bx bx-right-arrow-alt ms-2"></i></button>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <!---end row-->
                        </div>
                        <div id="references-id" role="tabpane3" class="bs-stepper-pane content fade" aria-labelledby="stepper3trigger2">
                           <h5 class="mb-1">References</h5>
                           <p class="mb-4">List your prev</p>
                           <div class="card shadow-sm">
                              <!-- preserve original style idea of wider card-body without breaking layout -->
                              <div class="card-body p-2 card-body-wide">
                                 <div class="table-responsive">
                                    <table class="table table-hover mb-0 align-middle">
                                       <thead class="table-light">
                                          <tr>
                                             <th>Sr</th>
                                             <th>Name</th>
                                             <th>Organization</th>
                                             <th>Position</th>
                                             <th>Email ID</th>
                                             <th>Phone Number</th>
                                             
                                             
                                          </tr>
                                       </thead>
                                       <tbody>
                                          <tr>
                                              <td>
                                               1
                                               </td> 
                                             <td>
                                                <input type="text" class="form-control form-control-sm"  placeholder="name">
                                             </td>
                                             <td>
                                                <input type="text" class="form-control form-control-sm"  placeholder="Organization">
                                             </td>
                                             <td>
                                                <input type="text" class="form-control form-control-sm"  placeholder="Position">
                                             </td>
                                             <td>
                                                <input type="text" class="form-control form-control-sm" placeholder="Email ID">
                                             </td>
                                             <td>
                                                <input type="text" class="form-control form-control-sm" placeholder="Phone Number">
                                             </td>
                                            
                                          </tr>
                                       </tbody>
                                    </table>
                                 </div>
                                 <!-- actions -->
                                 <div class="d-flex justify-content-between align-items-center mt-3">
                                    <div>
                                       <button class="btn btn-secondary me-2" type="button" @click="saveDraft">Save Draft</button>
                                       <button class="btn btn-primary" type="button" @click="nextStep">Next <i class="bx bx-right-arrow-alt ms-2"></i></button>
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
                                 <label for="expertise-related" class="form-label">Expertise related to the position applied</label>
                                 
                                 <textarea class="form-control" id="expertise-related"  rows="4" cols="150" placeholder="Max. 500 words & Please don't use any special characters"></textarea>
                              </div>
                             
                              
                             
                             
                              
                              
                             
                            
                              
                              
                             
                             
                              
                             
                              <div class="d-flex justify-content-between align-items-center mt-3">
                                    <div>
                                       <button class="btn btn-secondary me-2" type="button" @click="saveDraft">Save Draft</button>
                                       <button class="btn btn-primary" type="button" @click="nextStep">Next <i class="bx bx-right-arrow-alt ms-2"></i></button>
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
</template>
<script setup>
   /*
     Full component script
     - Vue 3 <script setup>
     - Flatpickr (vue-flatpickr-component)
     - copyAddressOnce: copies correspondence -> permanent only when checkbox is checked (one-time copy)
     - files saved in form.files for upload
   */
   
   import { reactive, ref } from 'vue'
   import FlatPickr from 'vue-flatpickr-component'
   import 'flatpickr/dist/flatpickr.css'
   
   /* Register component locally for template usage */
   const components = { 'flat-pickr': FlatPickr } // note: in <script setup> this is not used directly; we register by import name
   
   const dateConfig = {
     dateFormat: 'Y-m-d',
     maxDate: 'today'
   }
   const dateManthConfig = {
     dateFormat: 'Y-m',
     
   }
   
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
     marital_status:'',
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
   
   const sameAddresses = ref(false)
   
   /**
    * copyAddressOnce
    * Called when checkbox toggles. If checked -> copy correspondence to permanent one time.
    * If unchecked -> does NOT clear permanent (keeps whatever user had).
    * This matches "copy once and keep editable" requirement.
    */
   function copyAddressOnce() {
     if (sameAddresses.value) {
       // shallow copy of fields (safe for strings)
       form.permanent.address = form.correspondence.address
       form.permanent.city = form.correspondence.city
       form.permanent.state = form.correspondence.state
       form.permanent.country = form.correspondence.country
       form.permanent.pin = form.correspondence.pin
       form.permanent.phone = form.correspondence.phone
     }
     // If unchecked, do nothing (user wants to keep manual edits)
   }
   
   /**
    * onFileChange
    * Save File objects into form.files for later upload using FormData
    */
   function onFileChange(event, key) {
     const f = event.target.files && event.target.files[0]
     form.files[key] = f || null
   }
   
   /**
    * nextStep
    * Tries to call bs-stepper instance if stored in window.stepper3
    * Otherwise logs form (replace with emit or API call in real app)
    */
   function nextStep() {
     // if you have bs-stepper instance accessible on window.stepper3
     if (typeof window !== 'undefined' && window.stepper3 && typeof window.stepper3.next === 'function') {
       window.stepper3.next()
       return
     }
   
     // Fallback: print form to console (or emit event to parent)
     // Note: avoid logging File objects fully; we stringify only metadata
     const toLog = {
       ...JSON.parse(JSON.stringify(form, (k, v) => v === null ? '' : v)),
       files: {
         photo: form.files.photo ? form.files.photo.name : null,
         signature: form.files.signature ? form.files.signature.name : null,
         cv: form.files.cv ? form.files.cv.name : null
       }
     }
     console.log('Next step requested. Form state snapshot:', toLog)
   
     // Example: to send to parent, uncomment:
     // const emit = defineEmits(['next'])
     // emit('next', form)
   }
   
   
   const minRows = 3 // prevent removing below some basic rows (you can adjust)
   const maxMonth = new Date().toISOString().slice(0,7) // yyyy-mm (current month) - used to limit future months
   
   function makeRow(overrides = {}) {
   return {
    key: `r_${Math.random().toString(36).slice(2,9)}`,
    examination: overrides.examination || "Any Other",
    degreeName: overrides.degreeName || '',
    institute: overrides.institute || '',
    year: overrides.year || '', // format 'YYYY-MM' for <input type="month">
    subjects: overrides.subjects || '',
    grade: overrides.grade || ''
   }
   }
   
   /* initial rows aligned to your original list */
   const education = reactive([
   makeRow({ examination: 'Doctoral' }),
   makeRow({ examination: "Master's" }),
   makeRow({ examination: "Bachelor's" }),
   makeRow({ examination: 'Senior Secondary' }),
   makeRow({ examination: 'Secondary' }),
   makeRow({ examination: 'Any Other' }),
   makeRow({ examination: 'Any Other' })
   ])
   
   /* add / remove / duplicate helpers */
   function addRow() {
   education.push(makeRow())
   }
   
   function removeRow(index) {
   // prevent removing below minRows
   if (education.length <= minRows) return
   education.splice(index, 1)
   }
   
   function duplicateRow(index) {
   const src = education[index]
   const copy = makeRow({
    examination: src.examination,
    degreeName: src.degreeName,
    institute: src.institute,
    year: src.year,
    subjects: src.subjects,
    grade: src.grade
   })
   education.splice(index + 1, 0, copy)
   }
   
   /* quick reset to clean defaults */
   function resetAll() {
   education.splice(0, education.length)
   education.push(
    makeRow({ examination: 'Doctoral' }),
    makeRow({ examination: "Master's" }),
    makeRow({ examination: "Bachelor's" }),
   )
   }
   
</script>
<style scoped>
   .form-control, .form-select, textarea.form-control {
   margin-bottom: 0.5rem;
   }
</style>