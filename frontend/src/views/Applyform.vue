<template>
  <div>
    <!-- NAVIGATION CARD (kept as you had it) -->
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
                <li class="nav-item"><a class="nav-link active" href="#"><i class="bi bi-briefcase-fill me-1"></i>Active Positions</a></li>
                <li class="nav-item"><a class="nav-link" href="#"><i class="bi bi-clipboard-check"></i>Previous Job Applications</a></li>
                <li class="nav-item"><a class="nav-link" href="#"><i class="bi bi-envelope"></i>Contact</a></li>
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
                     <!-- steps (unchanged) -->
                     <div class="step" data-target="#personal-info-id">
                        <div class="step-trigger" role="tab" id="personal-info-tab" aria-controls="personal-info-id">
                           <div class="bs-stepper-circle"><i class='bx bx-user fs-4'></i></div>
                           <div class=""><h5 class="mb-0 steper-title ">Personal Info</h5></div>
                        </div>
                     </div>
                     <div class="step" data-target="#education-id">
                        <div class="step-trigger" role="tab" id="education-details-tab" aria-controls="education-id">
                           <div class="bs-stepper-circle"><i class='bx bxs-graduation fs-4'></i></div>
                           <div class=""><h5 class="mb-0 steper-title">Education</h5></div>
                        </div>
                     </div>
                     <div class="step" data-target="#work-experience-id">
                        <div class="step-trigger" role="tab" id="stepper3trigger2" aria-controls="work-experience-id">
                           <div class="bs-stepper-circle"><i class='bx bx-briefcase fs-4'></i></div>
                           <div class=""><h5 class="mb-0 steper-title">Work Experience</h5></div>
                        </div>
                     </div>
                     <div class="step" data-target="#trainings-undergone-id">
                        <div class="step-trigger" role="tab" id="stepper3trigger4" aria-controls="trainings-undergone-id">
                           <div class="bs-stepper-circle"><i class='bi bi-lightbulb'></i></div>
                           <div class=""><h5 class="mb-0 steper-title">Trainings Undergone</h5></div>
                        </div>
                     </div>
                     <div class="step" data-target="#awards-honors-id">
                        <div class="step-trigger" role="tab" id="stepper3trigger4" aria-controls="awards-honors-id">
                           <div class="bs-stepper-circle"><i class="bi bi-trophy"></i></div>
                           <div class=""><h5 class="mb-0 steper-title">Awards & Honors</h5></div>
                        </div>
                     </div>
                     <div class="step" data-target="#references-id">
                        <div class="step-trigger" role="tab" id="stepper3trigger4" aria-controls="references-id">
                           <div class="bs-stepper-circle"><i class="bi bi-person-lines-fill"></i></div>
                           <div class=""><h5 class="mb-0 steper-title">Reference</h5></div>
                        </div>
                     </div>
                     <div class="step" data-target="#expertise-related-id">
                        <div class="step-trigger" role="tab" id="stepper3trigger4" aria-controls="expertise-related-id">
                           <div class="bs-stepper-circle"><i class="bi bi-gear"></i></div>
                           <div class=""><h5 class="mb-0 steper-title">Expertise related to the position applied</h5></div>
                        </div>
                     </div>
                     <div class="step" data-target="#declaration-id">
                        <div class="step-trigger" role="tab" id="stepper3trigger4" aria-controls="declaration-id">
                           <div class="bs-stepper-circle"><i class="bi bi-check2-square"></i></div>
                           <div class=""><h5 class="mb-0 steper-title">Declaration</h5></div>
                        </div>
                     </div>
                  </div>

                  <div class="bs-stepper-content">
                    <form @submit.prevent>
                      <!-- PERSONAL -->
                      <div id="personal-info-id" role="tabpane3" class="bs-stepper-pane content fade" aria-labelledby="personal-info-tab">
                        <h5 class="mb-1">Your Personal Information</h5>
                        <div class="row g-3">
                          <div class="col-12 col-lg-6">
                            <label class="form-label">First Name</label>
                            <input type="text" class="form-control" v-model="form.firstName" placeholder="First Name" required>
                          </div>
                          <div class="col-12 col-lg-6">
                            <label class="form-label required-label">Gender</label>
                            <select class="form-control" v-model="form.gender" required>
                              <option value="">Select</option><option>Male</option><option>Female</option><option>Other</option>
                            </select>
                          </div>
                          <div class="col-12 col-lg-6">
                            <label class="form-label required-label">Phone Number</label>
                            <input type="text" class="form-control" v-model="form.phoneNumber" placeholder="Phone Number" required>
                          </div>
                          <div class="col-12 col-lg-6">
                            <label class="form-label required-label">E-mail Address</label>
                            <input type="email" class="form-control" v-model="form.email" placeholder="Enter Email Address" required>
                          </div>
                          <div class="col-12 col-lg-6">
                            <label class="form-label required-label">Date of Birth</label>
                            <flat-pickr v-model="form.dateOfBirth" :config="dateConfig" class="form-control" placeholder="Choose a date" />
                          </div>
                          <div class="col-12 col-lg-6">
                            <label class="form-label required-label">Marital Status</label>
                            <select class="form-control" v-model="form.marital_status" required>
                              <option value="">Select</option><option>Single</option><option>Married</option>
                            </select>
                          </div>
                          <div class="col-12 col-lg-6">
                            <label class="form-label required-label">Father's Name</label>
                            <input type="text" class="form-control" v-model="form.fatherName" placeholder="Father's Name" required>
                          </div>
                          <div class="col-12 col-lg-6">
                            <label class="form-label required-label">Nationality</label>
                            <input type="text" class="form-control" v-model="form.nationality" placeholder="Nationality" required>
                          </div>
                          <div class="col-12 col-lg-6">
                            <label class="form-label required-label">Mode of Application</label>
                            <select class="form-select" v-model="form.mode_of_application" aria-label="Mode of Application" required>
                              <option v-for="(opt, idx) in mode_of_application" :key="idx" :value="opt">{{ opt }}</option>
                            </select>
                          </div>
                          <div class="col-12 col-lg-6">
                            <label class="form-label required-label">Name of Current Organization & Type (Govt./Pvt.)</label>
                            <input type="text" class="form-control" v-model="form.currentOrganization" placeholder="Name of Current Organization & Type" required>
                          </div>
                          <div class="col-12 col-lg-6">
                            <label class="form-label required-label">Total Emoluments drawn presently</label>
                            <input type="number" class="form-control" v-model="form.totalEmoluments" placeholder="Total Emoluments drawn presently" required>
                          </div>
                          <div class="col-12 col-lg-6">
                            <label class="form-label required-label">Total years of Post Qualification Experience</label>
                            <input type="number" class="form-control" v-model="form.totalYearExp" placeholder="Total years of Post Qualification Experience" required>
                          </div>
                          <div class="col-12 col-lg-6">
                            <label class="form-label required-label">Aadhaar Number</label>
                            <input type="text" class="form-control" v-model="form.aadhaarNumber" placeholder="Aadhaar Number">
                          </div>
                          <div class="col-12 col-lg-6">
                            <label class="form-label required-label">Social Category</label>
                            <select class="form-select" v-model="form.socialCategory" required>
                              <option v-for="(opt, idx) in socialCategoryOptions" :key="idx" :value="opt">{{ opt }}</option>
                            </select>
                          </div>

                          <!-- Correspondence Address -->
                          <div class="col-12 col-lg-6">
                            <label class="form-label required-label">Address for Correspondence</label>
                            <textarea class="form-control" v-model="form.correspondence.address" required></textarea>
                          </div>
                          <div class="col-12 col-lg-6">
                            <label class="form-label required-label">City</label>
                            <input type="text" class="form-control" v-model="form.correspondence.city" required />
                          </div>
                          <div class="col-12 col-lg-6">
                            <label class="form-label required-label">State</label>
                            <input type="text" class="form-control" v-model="form.correspondence.state" required />
                          </div>
                          <div class="col-12 col-lg-6">
                            <label class="form-label required-label">Country</label>
                            <input type="text" class="form-control" v-model="form.correspondence.country" required />
                          </div>
                          <div class="col-12 col-lg-6">
                            <label class="form-label required-label">Pin/Zip Code</label>
                            <input type="text" class="form-control" v-model="form.correspondence.pin" required />
                          </div>
                          <div class="col-12 col-lg-6">
                            <label class="form-label required-label">Phone No. at Correspondence Address</label>
                            <input type="text" class="form-control" v-model="form.correspondence.phone" required />
                          </div>

                          <!-- Checkbox to copy once -->
                          <div class="col-12 col-lg-12">
                            <div class="form-check">
                              <input class="form-check-input" type="checkbox" v-model="sameAddresses" @change="copyAddressOnce">
                              <label class="form-check-label">Check if Correspondence Address & Permanent Address are same</label>
                            </div>
                          </div>

                          <!-- Permanent Address -->
                          <div class="col-12 col-lg-6">
                            <label class="form-label required-label">Permanent Address</label>
                            <textarea class="form-control" v-model="form.permanent.address" required></textarea>
                          </div>
                          <div class="col-12 col-lg-6">
                            <label class="form-label required-label">City</label>
                            <input type="text" class="form-control" v-model="form.permanent.city" required />
                          </div>
                          <div class="col-12 col-lg-6">
                            <label class="form-label required-label">State</label>
                            <input type="text" class="form-control" v-model="form.permanent.state" required />
                          </div>
                          <div class="col-12 col-lg-6">
                            <label class="form-label required-label">Country</label>
                            <input type="text" class="form-control" v-model="form.permanent.country" required />
                          </div>
                          <div class="col-12 col-lg-6">
                            <label class="form-label required-label">Pin/Zip Code</label>
                            <input type="text" class="form-control" v-model="form.permanent.pin" required />
                          </div>
                          <div class="col-12 col-lg-6">
                            <label class="form-label required-label">Phone No. at Permanent Address</label>
                            <input type="text" class="form-control" v-model="form.permanent.phone" required />
                          </div>

                          <div class="col-12 col-lg-6">
                            <label class="form-label required-label">Nearest Police Station</label>
                            <input type="text" class="form-control" v-model="form.policeStation" required />
                          </div>

                          <div class="col-12 col-lg-6">
                            <label class="form-label required-label">Photo</label>
                            <input type="file" accept="image/*" class="form-control" @change="onFileChange($event, 'photo')" />
                          </div>
                          <div class="col-12 col-lg-6">
                            <label class="form-label required-label">Signature</label>
                            <input type="file" accept="image/*" class="form-control" @change="onFileChange($event, 'signature')" />
                          </div>
                          <div class="col-12 col-lg-6">
                            <label class="form-label required-label">Upload CV</label>
                            <input type="file" accept="application/pdf" class="form-control" @change="onFileChange($event, 'cv')" />
                          </div>

                          <div class="col-12 col-lg-6">
                            <button class="btn btn-secondary me-2" type="button" @click="handlePersonalSave">Save Draft</button>
                            <button class="btn btn-primary px-4" type="button" @click="() => { stepper3.next() }">Next<i class='bx bx-right-arrow-alt ms-2'></i></button>
                          </div>
                        </div>
                      </div>

                      <!-- EDUCATION (calls saveDraft with step 'education') -->
                      <div id="education-id" role="tabpane3" class="bs-stepper-pane content fade" aria-labelledby="education-details-tab">
                         <div class="d-flex align-items-center justify-content-between mb-3">
                            <div><h5 class="mb-1">Your Education Information</h5></div>
                         </div>
                         <div class="card shadow-sm">
                            <div class="card-body p-2">
                               <div class="table-responsive">
                                  <table class="table table-hover mb-0 align-middle">
                                     <thead class="table-light">
                                        <tr><th>Examination</th><th>Name of Degree / Certificate</th><th>University / Institute / Board</th><th style="width:140px">Year (MM/YYYY)</th><th>Subjects / Specialization</th><th>Percentage / Grade / CGPA</th></tr>
                                     </thead>
                                     <tbody>
                                        <tr v-for="(row, idx) in education" :key="row.key">
                                           <td>
                                              <select class="form-select form-select-sm" v-model="row.examination" disabled>
                                                 <option>Doctoral</option><option>Master's</option><option>Bachelor's</option><option>Senior Secondary</option><option>Secondary</option><option>Any Other</option>
                                              </select>
                                           </td>
                                           <td><input type="text" class="form-control form-control-sm" v-model="row.degreeName" required /></td>
                                           <td><input type="text" class="form-control form-control-sm" v-model="row.institute" required /></td>
                                           <td><input type="month" class="form-control form-control-sm" v-model="row.year" :max="maxMonth" required /></td>
                                           <td><input type="text" class="form-control form-control-sm" v-model="row.subjects" required /></td>
                                           <td><input type="text" class="form-control form-control-sm" v-model="row.grade" required /></td>
                                        </tr>
                                     </tbody>
                                  </table>
                               </div>
                               <div class="d-flex justify-content-between align-items-center mt-3">
                                  <div>
                                     <button class="btn btn-primary me-2" type="button" @click="() => { stepper3.previous() }">Previous</button>
                                     <button class="btn btn-secondary me-2" type="button" @click="handleEducationSave">Save Draft</button>
                                     <button class="btn btn-primary" type="button" @click="() => { stepper3.next() }">Next</button>
                                  </div>
                               </div>
                            </div>
                         </div>
                      </div>

                      <!-- WORK EXPERIENCE -->
                      <div id="work-experience-id" role="tabpane3" class="bs-stepper-pane content fade" aria-labelledby="stepper3trigger2">
                         <h5 class="mb-1">Work Experience</h5>
                         <div class="card shadow-sm">
                            <div class="card-body p-2 card-body-wide">
                               <div class="table-responsive">
                                  <table class="table table-hover mb-0 align-middle">
                                     <thead class="table-light">
                                        <tr><th>Organization</th><th>Position</th><th>Pay Level / Salary</th><th>From (MM-YYYY)</th><th>To (MM-YYYY)</th><th>Description of Jobs Handled</th><th class="text-center">Action</th></tr>
                                     </thead>
                                     <tbody>
                                        <tr v-for="(row, index) in experiences" :key="row.key">
                                           <td><input type="text" class="form-control form-control-sm" v-model="row.organization" /></td>
                                           <td><input type="text" class="form-control form-control-sm" v-model="row.position" /></td>
                                           <td><input type="text" class="form-control form-control-sm" v-model="row.salary" /></td>
                                           <td><input type="month" class="form-control form-control-sm" v-model="row.from" /></td>
                                           <td><input type="month" class="form-control form-control-sm" v-model="row.to" /></td>
                                           <td><textarea class="form-control form-control-sm" v-model="row.description" rows="2"></textarea></td>
                                           <td class="text-center">
                                             <button class="btn btn-outline-danger btn-sm" @click="deleteRowWorkExperience(index)" v-if="experiences.length > 1"><i class="bi bi-trash-fill"></i></button>
                                           </td>
                                        </tr>
                                     </tbody>
                                  </table>
                                  <div class="mt-3 text-end"><button class="btn btn-primary btn-sm" @click="addRowWorkExperience"><i class="bi bi-plus-circle"></i> Add Row</button></div>
                               </div>
                               <div class="d-flex justify-content-between align-items-center mt-3">
                                  <div>
                                     <button class="btn btn-primary me-2" type="button" @click="() => { stepper3.previous() }">Previous</button>
                                     <button class="btn btn-secondary me-2" type="button" @click="handleExperienceSave">Save Draft</button>
                                     <button class="btn btn-primary" type="button" @click="() => { stepper3.next() }">Next</button>
                                  </div>
                               </div>
                            </div>
                         </div>
                      </div>

                      <!-- TRAININGS -->
                      <div id="trainings-undergone-id" role="tabpane3" class="bs-stepper-pane content fade">
                        <h5 class="mb-1">Trainings Undergone</h5>
                        <div class="card shadow-sm">
                          <div class="card-body p-2 card-body-wide">
                            <div class="table-responsive">
                              <table class="table table-hover mb-0 align-middle">
                                <thead class="table-light">
                                  <tr><th>S.No.</th><th>Organization</th><th>Name of the Course</th><th>Institute</th><th>Duration(In days)</th></tr>
                                </thead>
                                <tbody>
                                  <tr v-for="(row,index) in trainings" :key="row.key">
                                    <td>{{ index+1 }}</td>
                                    <td><input class="form-control form-control-sm" v-model="row.organization" /></td>
                                    <td><input class="form-control form-control-sm" v-model="row.course" /></td>
                                    <td><input class="form-control form-control-sm" v-model="row.institute" /></td>
                                    <td><input class="form-control form-control-sm" v-model="row.duration" /></td>
                                    <td class="text-center"><button class="btn btn-outline-danger btn-sm" @click="deleteRowTrainings(index)"><i class="bi bi-trash"></i></button></td>
                                  </tr>
                                </tbody>
                              </table>
                              <div class="mt-3 text-end"><button class="btn btn-primary btn-sm" @click="addRowTrainings"><i class="bi bi-plus-circle"></i> Add Row</button></div>
                            </div>
                            <div class="d-flex justify-content-between align-items-center mt-3">
                              <div>
                                <button class="btn btn-primary me-2" @click="() => { stepper3.previous() }">Previous</button>
                                <button class="btn btn-secondary me-2" @click="() => saveDraft({ step: 'trainings' })">Save Draft</button>
                                <button class="btn btn-primary" @click="() => { stepper3.next() }">Next</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <!-- AWARDS -->
                      <div id="awards-honors-id" role="tabpane3" class="bs-stepper-pane content fade">
                        <h5 class="mb-1">Awards & Honors</h5>
                        <div class="card shadow-sm">
                          <div class="card-body p-2 card-body-wide">
                            <div class="table-responsive">
                              <table class="table table-hover mb-0 align-middle">
                                <thead class="table-light"><tr><th>Awarding Organization</th><th>Name of the Award</th><th>Nature of the Award</th><th>Year</th></tr></thead>
                                <tbody>
                                  <tr v-for="(award,index) in awards" :key="award.key">
                                    <td><input v-model="award.organization" class="form-control form-control-sm" /></td>
                                    <td><input v-model="award.name" class="form-control form-control-sm" /></td>
                                    <td><input v-model="award.nature" class="form-control form-control-sm" /></td>
                                    <td><input v-model="award.year" class="form-control form-control-sm" /></td>
                                    <td class="text-center"><button class="btn btn-sm btn-outline-danger" @click="deleteRowAwards(index)"><i class="bx bx-trash"></i></button></td>
                                  </tr>
                                </tbody>
                              </table>
                              <div class="mt-3 text-end"><button class="btn btn-primary btn-sm" @click="addRowAwards"><i class="bi bi-plus-circle"></i> Add Row</button></div>
                            </div>
                            <div class="d-flex justify-content-between align-items-center mt-3">
                              <div>
                                <button class="btn btn-primary me-2" @click="() => { stepper3.previous() }">Previous</button>
                                <button class="btn btn-secondary me-2" @click="() => saveDraft({ step: 'awards' })">Save Draft</button>
                                <button class="btn btn-primary" @click="() => { stepper3.next() }">Next</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <!-- REFERENCES -->
                      <div id="references-id" role="tabpane3" class="bs-stepper-pane content fade">
                        <h5 class="mb-1">References</h5>
                        <div class="card shadow-sm">
                          <div class="card-body p-2 card-body-wide">
                            <div class="table-responsive">
                              <table class="table table-hover mb-0 align-middle">
                                <thead class="table-light"><tr><th>Sr</th><th>Name</th><th>Organization</th><th>Position</th><th>Email ID</th><th>Phone Number</th></tr></thead>
                                <tbody>
                                  <tr v-for="(r,idx) in references" :key="r.key">
                                    <td>{{ idx+1 }}</td>
                                    <td><input class="form-control form-control-sm" v-model="r.name" /></td>
                                    <td><input class="form-control form-control-sm" v-model="r.organization" /></td>
                                    <td><input class="form-control form-control-sm" v-model="r.position" /></td>
                                    <td><input class="form-control form-control-sm" v-model="r.email" /></td>
                                    <td><input class="form-control form-control-sm" v-model="r.phone" /></td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                            <div class="d-flex justify-content-between align-items-center mt-3">
                              <div>
                                <button class="btn btn-primary me-2" @click="() => { stepper3.previous() }">Previous</button>
                                <button class="btn btn-secondary me-2" @click="() => saveDraft({ step: 'references' })">Save Draft</button>
                                <button class="btn btn-primary" @click="() => { stepper3.next() }">Next</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <!-- EXPERTISE -->
                      <div id="expertise-related-id" role="tabpane3" class="bs-stepper-pane content fade">
                        <h5 class="mb-1">Expertise related to the position applied</h5>
                        <div class="row g-3">
                          <div class="col-12">
                            <label class="form-label required-label">Expertise related to the position applied</label>
                            <textarea class="form-control" v-model="form.expertise_text" rows="4" placeholder="Max. 500 words" maxlength="3000"></textarea>
                          </div>
                          <div class="d-flex justify-content-between align-items-center mt-3">
                            <div>
                              <button class="btn btn-primary me-2" @click="() => { stepper3.previous() }">Previous</button>
                              <button class="btn btn-secondary me-2" @click="() => saveDraft({ step: 'expertise' })">Save Draft</button>
                              <button class="btn btn-primary" @click="() => { stepper3.next() }">Next</button>
                            </div>
                          </div>
                        </div>
                      </div>

                      <!-- DECLARATION -->
                      <div id="declaration-id" role="tabpane3" class="bs-stepper-pane content fade">
                        <h5 class="mb-1 required-label">Declaration</h5>
                        <div class="row g-3">
                          <div class="col-12">
                            <p>I <input type="text" class="form-control-sm" v-model="form.declaration_name1" placeholder="Name" /> hereby declare that the information furnished above is true...</p>
                            <hr>
                            <p>(only for candidates serving in Government / PSUs / Autonomous institutions)</p>
                            <p>I <input type="text" value="N/A" class="form-control-sm" v-model="form.declaration_name2" /> hereby declare ...</p>
                          </div>
                          <div class="d-flex justify-content-between align-items-center mt-3">
                            <div>
                              <button class="btn btn-primary me-2" @click="() => { stepper3.previous() }">Previous</button>
                              <button class="btn btn-success px-4" @click="handleFinalSubmit">Preview / Submit</button>
                            </div>
                          </div>
                        </div>
                      </div>

                    </form>
                  </div>

               </div>
            </div>
         </div>
      </div>
      <!--end stepper two-->
    </div>

    <footer class="page-footer fixed-bottom text-center py-3" style="background:#094280; color:white; width:100%; left:0; padding-left:30px; padding-right:30px;">
      <p class="mb-0">Copyright © 2023. All rights reserved.</p>
    </footer>
  </div>
</template>

<script setup>
import { reactive, ref, watch, nextTick } from 'vue'
import FlatPickr from 'vue-flatpickr-component'
import axios from "@/axios";
import 'flatpickr/dist/flatpickr.css'
import { onMounted, onBeforeUnmount } from 'vue';
import { useRoute } from 'vue-router';

const socialCategoryOptions = ref([]);
const mode_of_application = ref([]);
const jobTitle = ref('');
const jobCode = ref('');
const advtNo = ref('');

/* ---------- load job meta ---------- */
async function loadJobMeta(jobId) {
  if (!jobId) return;
  try {
    const jobRes = await axios.get(`/jobs/${jobId}`);
    const job = jobRes.data && jobRes.data.data ? jobRes.data.data : null;
    if (!job) return;
    jobTitle.value = job.title || '';
    jobCode.value = job.code || '';
    advtNo.value = job.advt_no || job.advtNo || '';
    if (Array.isArray(job.category) && job.category.length) socialCategoryOptions.value = job.category.slice();
    else if (Array.isArray(job.social_category) && job.social_category.length) socialCategoryOptions.value = job.social_category.slice();
    if (Array.isArray(job.mode_of_application) && job.mode_of_application.length > 0) mode_of_application.value = job.mode_of_application.slice();
    else mode_of_application.value = [];
  } catch (err) {
    console.error('Failed to load job metadata:', err.response?.data || err.message);
  }
}

/* Flatpickr config */
const dateConfig = { dateFormat: 'Y-m-d', maxDate: 'today' }
const dateMonthConfig = { dateFormat: 'Y-m' }

/* ---------- FORM DATA ---------- */
/* include both snake_case and camelCase aliases used across template/scripts and keep them in sync */
const form = reactive({
  id: null,
  applicant_id: null, // set from auth (TODO)
  job_id: null,
  firstName: '',
  gender: '',
  phoneNumber: '',
  email: '',
  dateOfBirth: null,
  fatherName: '',
  nationality: '',
  modeOfApplication: '',
  mode_of_application: '', // alias for template
  currentOrganization: '',
  totalEmoluments: '',
  totalYearExp: '',
  totalExperienceYears: '',
  aadhaarNumber: '',
  socialCategory: '',
  marital_status: '',
  correspondence: { address: '', city: '', state: '', country: '', pin: '', phone: '' },
  permanent: { address: '', city: '', state: '', country: '', pin: '', phone: '' },
  policeStation: '',
  expertise_text: '',
  declaration_name1: '',
  declaration_name2: '',
  status: 'draft',
  attempt: 1,
  files: { photo: null, signature: null, cv: null },
  photo_url: '', signature_url: '', cv_url: ''
});

/* Keep aliases in sync */
watch(() => form.mode_of_application, (v) => { form.modeOfApplication = v });
watch(() => form.modeOfApplication, (v) => { form.mode_of_application = v });
watch(() => form.totalYearExp, (v) => { form.totalExperienceYears = v });
watch(() => form.totalExperienceYears, (v) => { form.totalYearExp = v });

/* ---------- ADDRESS COPY ---------- */
const sameAddresses = ref(false)
function copyAddressOnce() {
  if (sameAddresses.value) Object.assign(form.permanent, { ...form.correspondence })
}

/* ---------- FILE HANDLER ---------- */
function onFileChange(event, key) {
  const f = event.target.files?.[0];
  form.files[key] = f || null;
}

/* ---------- TABLES ---------- */
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
]);

function addRowEducation() { education.push(makeRow()) }
function removeRowEducation(index) { if (education.length > minRows) education.splice(index, 1) }
function duplicateRowEducation(index) { const src = education[index]; const copy = makeRow({ ...src }); education.splice(index + 1, 0, copy) }

const experiences = reactive([{ key: Date.now(), organization: '', position: '', salary: '', from: '', to: '', description: '' }])
function addRowWorkExperience() { experiences.push({ key: Date.now() + Math.random(), organization: '', position: '', salary: '', from: '', to: '', description: '' }) }
function deleteRowWorkExperience(index) { experiences.splice(index, 1) }

const trainings = reactive([{ key: Date.now(), organization: '', course: '', institute: '', duration: '' }])
function addRowTrainings() { trainings.push({ key: Date.now() + Math.random(), organization: '', course: '', institute: '', duration: '' }) }
function deleteRowTrainings(index) { trainings.splice(index, 1) }

const awards = reactive([{ key: Date.now(), organization: '', name: '', nature: '', year: '' }])
function addRowAwards() { awards.push({ key: Date.now() + Math.random(), organization: '', name: '', nature: '', year: '' }) }
function deleteRowAwards(index) { awards.splice(index, 1) }

const references = reactive([
  { key: 1, name: '', organization: '', position: '', email: '', phone: '' },
  { key: 2, name: '', organization: '', position: '', email: '', phone: '' },
  { key: 3, name: '', organization: '', position: '', email: '', phone: '' }
]);

/* ---------- ROUTE & STEPPER ---------- */
const route = useRoute();
let stepperInstance = null;
function destroyStepper() {
  try { if (stepperInstance && typeof stepperInstance.destroy === 'function') stepperInstance.destroy(); }
  catch(e) { stepperInstance = null; }
  finally { stepperInstance = null; if (window.stepper3) window.stepper3 = null; }
}

async function initStepper() {
  await nextTick();
  const el = document.querySelector('#stepper3');
  if (!el) return;
  destroyStepper();
  const StepperCtor = window.Stepper || window.bsStepper || window.bs_stepper || window.BsStepper;
  if (!StepperCtor) { const firstStep = el.querySelector('.bs-stepper-header .step'); if (firstStep) firstStep.classList.add('active'); el.classList.add('linear'); return; }
  try {
    stepperInstance = new StepperCtor(el, { linear: false, animation: true });
    window.stepper3 = { next: () => stepperInstance.next(), previous: () => stepperInstance.previous(), to: (n) => { if (typeof stepperInstance.to === 'function') stepperInstance.to(n); }, instance: stepperInstance };
    const first = el.querySelector('.bs-stepper-header .step'); if (first && !first.classList.contains('active')) { first.classList.add('active'); el.classList.add('linear'); }
  } catch (err) { console.error('Failed to init bs-stepper:', err); }
}

/* ---------- Helpers to normalize child arrays for server ---------- */
function normalizeEducationForServer(arr) {
  return (arr || []).map(e => ({ id: e.id || null, examination: e.examination || '', degree_name: e.degreeName || '', institute: e.institute || '', year: e.year || '', subjects: e.subjects || '', grade: e.grade || '' }));
}
function normalizeExperienceForServer(arr) { return (arr || []).map(x => ({ id: x.id || null, organization: x.organization || '', position: x.position || '', salary: x.salary || '', from: x.from || '', to: x.to || '', description: x.description || '' })); }
function normalizeTrainingsForServer(arr) { return (arr || []).map(t => ({ id: t.id || null, organization: t.organization || '', course: t.course || '', institute: t.institute || '', duration: t.duration || '' })); }
function normalizeAwardsForServer(arr) { return (arr || []).map(a => ({ id: a.id || null, organization: a.organization || '', name: a.name || '', nature: a.nature || '', year: a.year || '' })); }
function normalizeReferencesForServer(arr) { return (arr || []).map(r => ({ id: r.id || null, name: r.name || '', organization: r.organization || '', position: r.position || '', email: r.email || '', phone: r.phone || '' })); }

/* ---------- Build FormData (step-aware) ---------- */
function buildFormDataForSave(step = 'all') {
  const fd = new FormData();
  if (!form.job_id && route.params.id) form.job_id = Number(route.params.id);
  if (form.job_id) fd.append('job_id', String(form.job_id));
  if (form.applicant_id) fd.append('applicant_id', String(form.applicant_id));
  if (form.id) fd.append('id', String(form.id));

  if (step === 'personal' || step === 'all') {
    if (form.firstName) fd.append('full_name', form.firstName);
    if (form.gender) fd.append('gender', form.gender);
    if (form.phoneNumber) fd.append('phone_number', form.phoneNumber);
    if (form.email) fd.append('email', form.email);
    if (form.dateOfBirth) fd.append('date_of_birth', String(form.dateOfBirth));
    if (form.fatherName) fd.append('father_name', form.fatherName);
    if (form.nationality) fd.append('nationality', form.nationality);
    if (form.modeOfApplication || form.mode_of_application) fd.append('mode_of_application', form.modeOfApplication || form.mode_of_application);
    if (form.currentOrganization) fd.append('current_organization', form.currentOrganization);
    if (form.totalEmoluments) fd.append('total_emoluments', String(form.totalEmoluments));
    if (form.totalExperienceYears || form.totalYearExp) fd.append('total_experience_years', String(form.totalExperienceYears || form.totalYearExp));
    if (form.aadhaarNumber) fd.append('aadhaar_number', form.aadhaarNumber);
    if (form.socialCategory) fd.append('social_category', form.socialCategory);
    if (form.marital_status) fd.append('marital_status', form.marital_status);

    fd.append('corr_address', form.correspondence.address || '');
    fd.append('corr_city', form.correspondence.city || '');
    fd.append('corr_state', form.correspondence.state || '');
    fd.append('corr_country', form.correspondence.country || '');
    fd.append('corr_pin', form.correspondence.pin || '');
    fd.append('corr_phone', form.correspondence.phone || '');

    fd.append('perm_address', form.permanent.address || '');
    fd.append('perm_city', form.permanent.city || '');
    fd.append('perm_state', form.permanent.state || '');
    fd.append('perm_country', form.permanent.country || '');
    fd.append('perm_pin', form.permanent.pin || '');
    fd.append('perm_phone', form.permanent.phone || '');

    fd.append('police_station', form.policeStation || '');
    if (form.files.photo) fd.append('photo', form.files.photo);
    if (form.files.signature) fd.append('signature', form.files.signature);
    if (form.files.cv) fd.append('cv', form.files.cv);
  }

  if (step === 'education' || step === 'all') fd.append('educations', JSON.stringify(normalizeEducationForServer(education)));
  if (step === 'experience' || step === 'all') fd.append('experiences', JSON.stringify(normalizeExperienceForServer(experiences)));
  if (step === 'trainings' || step === 'all') fd.append('trainings', JSON.stringify(normalizeTrainingsForServer(trainings)));
  if (step === 'awards' || step === 'all') fd.append('awards', JSON.stringify(normalizeAwardsForServer(awards)));
  if (step === 'references' || step === 'all') fd.append('references', JSON.stringify(normalizeReferencesForServer(references)));

  if (step === 'expertise' || step === 'all') {
    if (form.expertise_text) fd.append('expertise_text', form.expertise_text);
    if (form.declaration_name1) fd.append('declaration_name1', form.declaration_name1);
    if (form.declaration_name2) fd.append('declaration_name2', form.declaration_name2);
  }

  fd.append('step', step);
  return fd;
}

/* ---------- Save Draft / Submit ---------- */
const saving = ref(false);

async function saveDraft({ step = 'all', final = false } = {}) {
  if (final) form.status = 'submitted';
  saving.value = true;
  try {
    if (!form.job_id && route.params.id) form.job_id = Number(route.params.id);
    const fd = buildFormDataForSave(step);

    if (form.id) {
      const url = `/job-applications/${form.id}?_method=PUT&step=${encodeURIComponent(step)}`;
      const res = await axios.post(url, fd, { headers: { 'Content-Type': 'multipart/form-data' } });
      if (res.data && res.data.job_application) populateFromServer(res.data.job_application);
      return res.data;
    } else {
      const url = `/job-applications?step=${encodeURIComponent(step)}`;
      const res = await axios.post(url, fd, { headers: { 'Content-Type': 'multipart/form-data' } });
      if (res.data && res.data.job_application) populateFromServer(res.data.job_application);
      return res.data;
    }
  } catch (err) {
    console.error('saveDraft error', err.response?.data || err.message);
    // show user-friendly message if possible
    if (err.response?.data?.details) {
      alert('Validation errors:\n' + err.response.data.details.map(d => d.message).join('\n'));
    } else {
      alert('Save failed: ' + (err.response?.data?.error || err.message));
    }
    throw err;
  } finally {
    saving.value = false;
  }
}

/* ---------- client validators ---------- */
function validatePersonalClient() {
  const errs = [];
  if (!form.firstName || !form.firstName.trim()) errs.push('First name is required');
  if (!form.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.push('A valid email is required');
  if (!form.phoneNumber || form.phoneNumber.trim().length < 7) errs.push('A valid phone number is required');
  if (!form.dateOfBirth) errs.push('Date of birth is required');
  // you can add more checks like address fields etc.
  return errs;
}

/* ---------- helper handlers used by buttons ---------- */
async function handlePersonalSave() {
  const errors = validatePersonalClient();
  if (errors.length) { alert(errors.join('\n')); return; }
  await saveDraft({ step: 'personal' });
  // optionally show toast
}

async function handleEducationSave() {
  // minimal client validation for education rows
  for (const r of education) {
    if (!r.degreeName || !r.institute || !r.year) { alert('Please fill Degree/Institute/Year for all education rows'); return; }
  }
  await saveDraft({ step: 'education' });
}

async function handleExperienceSave() {
  // minimal validation example
  await saveDraft({ step: 'experience' });
}

async function handleFinalSubmit() {
  // final submit: ideally run a final client validation then call final
  if (!confirm('Submit application? After submit you may not be able to edit.')) return;
  await saveDraft({ step: 'all', final: true });
  alert('Application submitted (server response returned).');
}

/* ---------- populate form from returned application ---------- */
function populateFromServer(server) {
  if (!server) return;
  form.id = server.id || null;
  form.applicant_id = server.applicant_id || form.applicant_id || null;
  form.job_id = server.job_id || form.job_id || null;
  form.firstName = server.full_name || form.firstName;
  form.gender = server.gender || form.gender;
  form.phoneNumber = server.phone_number || form.phoneNumber;
  form.email = server.email || form.email;
  form.dateOfBirth = server.date_of_birth || form.dateOfBirth;
  form.fatherName = server.father_name || form.fatherName;
  form.nationality = server.nationality || form.nationality;
  form.modeOfApplication = server.mode_of_application || form.modeOfApplication;
  form.mode_of_application = form.modeOfApplication;
  form.currentOrganization = server.current_organization || form.currentOrganization;
  form.totalEmoluments = server.total_emoluments || form.totalEmoluments;
  form.totalExperienceYears = server.total_experience_years || form.totalExperienceYears;
  form.totalYearExp = form.totalExperienceYears;
  form.aadhaarNumber = server.aadhaar_number || form.aadhaarNumber;
  form.socialCategory = server.social_category || form.socialCategory;
  form.marital_status = server.marital_status || form.marital_status;
  form.policeStation = server.police_station || form.policeStation;
  form.expertise_text = server.expertise_text || form.expertise_text;
  form.declaration_name1 = server.declaration_name1 || form.declaration_name1;
  form.declaration_name2 = server.declaration_name2 || form.declaration_name2;
  form.photo_url = server.photo_url || form.photo_url;
  form.signature_url = server.signature_url || form.signature_url;
  form.cv_url = server.cv_url || form.cv_url;
  form.status = server.status || form.status;
  form.attempt = server.attempt || form.attempt;

  // addresses
  form.correspondence.address = server.corr_address || form.correspondence.address;
  form.correspondence.city = server.corr_city || form.correspondence.city;
  form.correspondence.state = server.corr_state || form.correspondence.state;
  form.correspondence.country = server.corr_country || form.correspondence.country;
  form.correspondence.pin = server.corr_pin || form.correspondence.pin;
  form.correspondence.phone = server.corr_phone || form.correspondence.phone;

  form.permanent.address = server.perm_address || form.permanent.address;
  form.permanent.city = server.perm_city || form.permanent.city;
  form.permanent.state = server.perm_state || form.permanent.state;
  form.permanent.country = server.perm_country || form.permanent.country;
  form.permanent.pin = server.perm_pin || form.permanent.pin;
  form.permanent.phone = server.perm_phone || form.permanent.phone;

  // children
  if (Array.isArray(server.educations)) {
    education.splice(0, education.length);
    server.educations.forEach(e => education.push(makeRow({ examination: e.examination || 'Any Other', degreeName: e.degree_name || '', institute: e.institute || '', year: e.year || '', subjects: e.subjects || '', grade: e.grade || '' })));
  }
  if (Array.isArray(server.experiences)) {
    experiences.splice(0, experiences.length);
    server.experiences.forEach(x => experiences.push({ key: x.id || Date.now()+Math.random(), id: x.id || null, organization: x.organization || '', position: x.position || '', salary: x.salary || '', from: x.from || '', to: x.to || '', description: x.description || '' }));
  }
  if (Array.isArray(server.trainings)) {
    trainings.splice(0, trainings.length);
    server.trainings.forEach(t => trainings.push({ key: t.id || Date.now()+Math.random(), id: t.id || null, organization: t.organization || '', course: t.course || '', institute: t.institute || '', duration: t.duration || '' }));
  }
  if (Array.isArray(server.awards)) {
    awards.splice(0, awards.length);
    server.awards.forEach(a => awards.push({ key: a.id || Date.now()+Math.random(), id: a.id || null, organization: a.organization || '', name: a.name || '', nature: a.nature || '', year: a.year || '' }));
  }
  if (Array.isArray(server.references)) {
    references.splice(0, references.length);
    server.references.forEach((r, idx) => references.push({ key: r.id || idx+1, id: r.id || null, name: r.name || '', organization: r.organization || '', position: r.position || '', email: r.email || '', phone: r.phone || '' }));
  }
}

/* ---------- load existing draft/application ---------- */
async function loadDraftOnStart() {
  if (route.params.id) form.job_id = Number(route.params.id);
  if (!form.applicant_id) {
    const aid = route.query.applicant_id || localStorage.getItem('applicant_id');
    if (aid) form.applicant_id = Number(aid);
  }

  if (route.query.application_id) {
    try {
      const res = await axios.get(`/job-applications/${route.query.application_id}`);
      if (res.data && res.data.job_application) { populateFromServer(res.data.job_application); return; }
    } catch (e) { console.warn('No application found by id', e); }
  }

  if (form.applicant_id && form.job_id) {
    try {
      const res = await axios.get('/job-applications/by-applicant', { params: { applicant_id: form.applicant_id, job_id: form.job_id }});
      if (res.data && res.data.job_application) populateFromServer(res.data.job_application);
    } catch (e) { console.info('No existing draft for applicant+job', e.response?.status || e.message); }
  }
}

/* ---------- lifecycle ---------- */
onMounted(async () => {
  await initStepper();
  const jobId = route.params.id;
  if (jobId) form.job_id = Number(jobId);
  await loadJobMeta(jobId);
  await loadDraftOnStart();
});

watch(() => route.params.id, (newId, oldId) => {
  if (newId !== oldId) {
    initStepper();
    loadJobMeta(newId);
    form.job_id = Number(newId);
    loadDraftOnStart();
  }
});

onBeforeUnmount(() => { destroyStepper(); });

</script>

<style scoped>
.form-control, .form-select, textarea.form-control { margin-bottom: 0.5rem; }
</style>
