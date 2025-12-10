<template>
  <div>
    <!-- NAVIGATION CARD (unchanged) -->
    <div class="card"><div class="card-body"><nav class="navbar navbar-expand-lg navbar-dark rounded" style="background: #094280;">
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
        </nav>  </div></div>

    <div class="page-content mb-0">
      <div class="container mb-0">
        <div class="text-center mb-0">
          <h4 class="fw-bold text-primary text-center">Application Form</h4>
          <h5 class="text-secondary mt-2">Job Title: {{ jobTitle }}</h5>
        </div>
        <div class="row mb-0">
          <div class="col-md-6 text-start"><h6 class="mb-0">Job Code: <span class="fw-normal">{{ jobCode }}</span></h6></div>
          <div class="col-md-6 text-end"><h6 class="mb-0">Advt. No: <span class="fw-normal">{{ advtNo }}</span></h6></div>
        </div>
        <hr />
      </div>

      <div id="stepper2" class="bs-stepper">
        <div class="card">
          <div class="card-body">
            <div id="stepper3" class="bs-stepper gap-4 vertical">
              <!-- header unchanged: use your original bs-stepper-header markup (kept in original) -->
              <div class="bs-stepper-header" role="tablist"><div class="step" data-target="#personal-info-id">
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
                     </div> </div>

              <div class="bs-stepper-content">
                <form>
                  <!-- Personal info pane -->
                  <div id="personal-info-id" role="tabpane3" class="bs-stepper-pane content fade" aria-labelledby="personal-info-tab">
                    <PersonalInfo
                      :personalInfo="personalInfo"
                      :errors="errors"
                      :files="files"
                      :dateConfig="dateConfig"
                      :modeOptions="mode_of_application"
                      :socialCategoryOptions="socialCategoryOptions"
                      v-model:sameAddresses="sameAddresses"
                      @on-photo-change="onPhotoChange"
                      @on-signature-change="onSignatureChange"
                      @on-cv-change="onCvChange"
                      @save-personal="saveUpdatePersonaleInfo"
                      @copy-address-once="copyAddressOnce"
                    />
                  </div>

                  <!-- Education -->
                  <div id="education-id" role="tabpane3" class="bs-stepper-pane content fade" aria-labelledby="education-details-tab">
                    <EducationPane :education="education" :maxMonth="maxMonth" />
                  </div>

                  <!-- Work Experience -->
                  <div id="work-experience-id" role="tabpane3" class="bs-stepper-pane content fade" aria-labelledby="stepper3trigger2">
                    <WorkExperience
                      :experiences="experiences"
                      @add-row="addRowWorkExperience"
                      @delete-row="deleteRowWorkExperience"
                      @save-draft="saveDraft"
                    />
                  </div>

                  <!-- Trainings -->
                  <div id="trainings-undergone-id" role="tabpane3" class="bs-stepper-pane content fade" aria-labelledby="stepper3trigger4">
                    <TrainingsTable
                      :trainings="trainings"
                      @add-row="addRowTrainings"
                      @delete-row="deleteRowTrainings"
                      @save-draft="saveDraft"
                    />
                  </div>

                  <!-- Awards -->
                  <div id="awards-honors-id" role="tabpane3" class="bs-stepper-pane content fade" aria-labelledby="stepper3trigger4">
                    <AwardsTable :awards="awards" @add-row="addRowAwards" @delete-row="deleteRowAwards" @save-draft="saveDraft" />
                  </div>

                  <!-- References -->
                  <div id="references-id" role="tabpane3" class="bs-stepper-pane content fade" aria-labelledby="stepper3trigger4">
                    <ReferencesTable @save-draft="saveDraft" />
                  </div>

                  <!-- Expertise -->
                  <div id="expertise-related-id" role="tabpane3" class="bs-stepper-pane content fade" aria-labelledby="stepper3trigger4">
                    <Expertise @save-draft="saveDraft" />
                  </div>

                  <!-- Declaration -->
                  <div id="declaration-id" role="tabpane3" class="bs-stepper-pane content fade" aria-labelledby="stepper3trigger4">
                    <Declaration @save-draft="saveDraft" @preview="onPreview" />
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
import { reactive, ref, onMounted, onBeforeUnmount, nextTick } from 'vue'
import { useRoute } from 'vue-router'
import axios from '@/axios'
import FlatPickr from 'vue-flatpickr-component'
import 'flatpickr/dist/flatpickr.css'

// components
import PersonalInfo from '@/components/PersonalInfo.vue'
import EducationPane from '@/components/EducationPane.vue'
import WorkExperience from '@/components/WorkExperience.vue'
import TrainingsTable from '@/components/TrainingsTable.vue'
import AwardsTable from '@/components/AwardsTable.vue'
import ReferencesTable from '@/components/ReferencesTable.vue'
import Expertise from '@/components/Expertise.vue'
import Declaration from '@/components/Declaration.vue'

const route = useRoute()

// job metadata
const socialCategoryOptions = ref([])
const mode_of_application = ref([])
const jobTitle = ref('')
const jobCode = ref('')
const advtNo = ref('')

async function loadJobMeta(jobId) {
  if (!jobId) return
  try {
    const jobRes = await axios.get(`/jobs/${jobId}`)
    const job = jobRes.data?.data || null
    if (!job) return
    jobTitle.value = job.title || ''
    jobCode.value = job.code || ''
    advtNo.value = job.advt_no || job.advtNo || ''
    if (Array.isArray(job.category) && job.category.length) socialCategoryOptions.value = job.category.slice()
    else if (Array.isArray(job.social_category) && job.social_category.length) socialCategoryOptions.value = job.social_category.slice()
    if (Array.isArray(job.mode_of_application)) mode_of_application.value = job.mode_of_application.slice()
  } catch (err) {
    console.error('Failed to load job metadata:', err?.response?.data || err.message)
  }
}

/* Flatpickr config */
const dateConfig = { dateFormat: 'Y-m-d', maxDate: 'today' }
const dateMonthConfig = { dateFormat: 'Y-m' }

/* ADDRESS COPY */
const sameAddresses = ref(false)
function copyAddressOnce(checked) {
  // copy corr_* to perm_* when checked true
  if (checked || sameAddresses.value) {
    personalInfo.perm_address = personalInfo.corr_address || personalInfo.perm_address
    personalInfo.perm_city = personalInfo.corr_city || personalInfo.perm_city
    personalInfo.perm_state = personalInfo.corr_state || personalInfo.perm_state
    personalInfo.perm_country = personalInfo.corr_country || personalInfo.perm_country
    personalInfo.perm_pin = personalInfo.corr_pin || personalInfo.perm_pin
    personalInfo.perm_phone = personalInfo.corr_phone || personalInfo.perm_phone
  }
}

/* EDUCATION */
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

/* WORK EXPERIENCE */
const experiences = reactive([
  { key: Date.now(), organization: '', position: '', salary: '', from: '', to: '', description: '' }
])
function addRowWorkExperience() { experiences.push({ key: Date.now() + Math.random(), organization: '', position: '', salary: '', from: '', to: '', description: '' }) }
function deleteRowWorkExperience(idx) { experiences.splice(idx, 1) }

/* TRAININGS */
const trainings = reactive([{ key: Date.now(), organization: '', course: '', institute: '', duration: '' }])
function addRowTrainings() { trainings.push({ key: Date.now() + Math.random(), organization: '', course: '', institute: '', duration: '' }) }
function deleteRowTrainings(i) { trainings.splice(i, 1) }

/* AWARDS */
const awards = reactive([{ key: Date.now(), organization: '', name: '', nature: '', year: '' }])
function addRowAwards() { awards.push({ key: Date.now() + Math.random(), organization: '', name: '', nature: '', year: '' }) }
function deleteRowAwards(i) { awards.splice(i, 1) }

/* PERSONAL INFO object (parent source of truth) */
const personalInfo = reactive({
 
  job_id: route.params.id,
  applicant_id: 1,
  full_name: '',
  gender: '',
  phone_number: '',
  email: '',
  date_of_birth: '',
  father_name: '',
  nationality: '',
  mode_of_application: '',
  current_organization: '',
  total_emoluments: '',
  total_experience_years: '',
  aadhaar_number: '',
  social_category: '',
  marital_status: '',
  corr_address: '',
  corr_city: '',
  corr_state: '',
  corr_country: '',
  corr_pin: '',
  corr_phone: '',
  perm_address: '',
  perm_city: '',
  perm_state: '',
  perm_country: '',
  perm_pin: '',
  perm_phone: '',
  police_station: ''
})



/* validation errors */
const errors = reactive({
  full_name: '', gender: '', phone_number: '', email: '', date_of_birth: '', father_name: '', nationality: '', mode_of_application: '',
  current_organization: '', total_emoluments: '', total_experience_years: '', aadhaar_number: '', social_category: '', marital_status: '',
  corr_address: '', corr_city: '', corr_state: '', corr_country: '', corr_pin: '', corr_phone: '',
  perm_address: '', perm_city: '', perm_state: '', perm_country: '', perm_pin: '', perm_phone: '',
  police_station: '', photo: '', signature: '', cv: ''
})
const files = reactive({ photo: null, signature: null, cv: null })
const IMG_TYPES = ['image/jpeg', 'image/png', 'image/webp']
const MAX_IMG_SIZE = 2 * 1024 * 1024 // 2 MB
const PDF_TYPES = ['application/pdf']
const MAX_PDF_SIZE = 5 * 1024 * 1024 // 5 MB
function createPreview(file, type) {
  if (!file) return null
  return URL.createObjectURL(file)
}
function onPhotoChange(e) {
  const f = e?.target?.files?.[0] ?? null
  files.photo = f
  errors.photo = ''

  if (!f) return (errors.photo = 'Please upload a photo')
  if (!IMG_TYPES.includes(f.type))
    return (errors.photo = 'Photo must be JPG, PNG or WEBP')
  if (f.size > MAX_IMG_SIZE)
    return (errors.photo = 'Photo must be less than 2 MB')

  files.photoPreview = createPreview(f)
}

function onSignatureChange(e) {
  const f = e?.target?.files?.[0] ?? null
  files.signature = f
  errors.signature = ''

  if (!f) return (errors.signature = 'Please upload your signature')
  if (!IMG_TYPES.includes(f.type))
    return (errors.signature = 'Signature must be JPG, PNG or WEBP')
  if (f.size > MAX_IMG_SIZE)
    return (errors.signature = 'Signature must be less than 2 MB')

  files.signaturePreview = createPreview(f)
}

function onCvChange(e) {
   const f = e?.target?.files?.[0] ?? null
  files.cv = f
  errors.cv = ''

  if (!f) return (errors.cv = 'Please upload your CV (PDF)')
  if (!PDF_TYPES.includes(f.type))
    return (errors.cv = 'CV must be a PDF')
  if (f.size > MAX_PDF_SIZE)
    return (errors.cv = 'CV must be less than 5 MB')

  files.cvPreview = createPreview(f)
}
function validatePersonalInfo() {
 
  Object.keys(errors).forEach(k => (errors[k] = ""))
  let valid = true
  if (!personalInfo.full_name || !personalInfo.full_name.trim()) {
    errors.full_name = "Please enter your full name"
    valid = false
  }
  if (!personalInfo.gender || personalInfo.gender === "") {
    errors.gender = "Please select gender"
    valid = false
  }

  const phoneRe = /^\d{10}$/
  if (!personalInfo.phone_number || !phoneRe.test(String(personalInfo.phone_number).trim())) {
    errors.phone_number = "Enter a valid 10-digit phone number (digits only)"
    valid = false
  }
  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!personalInfo.email || !emailRe.test(String(personalInfo.email).trim())) {
    errors.email = "Please provide a valid email address"
    valid = false
  }
  if (!personalInfo.date_of_birth) {
    errors.date_of_birth = "Date of birth is required"
    valid = false
  }
  
  if (!personalInfo.marital_status || personalInfo.marital_status === "") {
    errors.marital_status = "Please select Marital status"
    valid = false
  }

  
  if (!personalInfo.father_name || !personalInfo.father_name.trim()) {
    errors.father_name = "Father's name is required"
    valid = false
  }

  
  if (!personalInfo.nationality || !personalInfo.nationality.trim()) {
    errors.nationality = "Nationality is required"
    valid = false
  }

  
  if (!personalInfo.mode_of_application || personalInfo.mode_of_application === "") {
    errors.mode_of_application = "Please select mode of application"
    valid = false
  }

  
  if (!personalInfo.current_organization || !personalInfo.current_organization.trim()) {
    errors.current_organization = "Current organization is required"
    valid = false
  }

  
  if (
    personalInfo.total_emoluments === "" ||
    personalInfo.total_emoluments === null ||
    personalInfo.total_emoluments === undefined ||
    String(personalInfo.total_emoluments).trim() === ""
  ) {
    errors.total_emoluments = "Total emoluments is required"
    valid = false
  } else {
    const num = Number(personalInfo.total_emoluments)
    if (Number.isNaN(num) || num < 0) {
      errors.total_emoluments = "Total emoluments must be a positive number"
      valid = false
    }
  }

  
  if (
    personalInfo.total_experience_years === "" ||
    personalInfo.total_experience_years === null ||
    personalInfo.total_experience_years === undefined ||
    String(personalInfo.total_experience_years).trim() === ""
  ) {
    errors.total_experience_years = "Total years of post-qualification experience is required"
    valid = false
  } else {
    const num = Number(personalInfo.total_experience_years)
    if (Number.isNaN(num) || num < 0) {
      errors.total_experience_years = "Enter a valid non-negative number for experience"
      valid = false
    }
  }

  
  const aadhaarRe = /^\d{12}$/
  if (personalInfo.aadhaar_number && !aadhaarRe.test(String(personalInfo.aadhaar_number).trim())) {
    errors.aadhaar_number = "Aadhaar must be 12 digits"
    valid = false
  }

  
  if (!personalInfo.social_category || personalInfo.social_category === "") {
    errors.social_category = "Please select social category"
    valid = false
  }

  
  if (!personalInfo.corr_address || personalInfo.corr_address.trim().length < 10) {
    errors.corr_address = "Please enter correspondence address (min 10 characters)"
    valid = false
  }
  if (!personalInfo.corr_city || !personalInfo.corr_city.trim()) {
    errors.corr_city = "Correspondence city is required"
    valid = false
  }
  if (!personalInfo.corr_state || !personalInfo.corr_state.trim()) {
    errors.corr_state = "Correspondence state is required"
    valid = false
  }
  if (!personalInfo.corr_country || !personalInfo.corr_country.trim()) {
    errors.corr_country = "Correspondence country is required"
    valid = false
  }
  if (!personalInfo.corr_pin || !String(personalInfo.corr_pin).trim()) {
    errors.corr_pin = "Correspondence pin is required"
    valid = false
  }
  if (!personalInfo.corr_phone) {
    errors.corr_phone = "Correspondence phone is required"
    valid = false
  }


  if (!personalInfo.perm_address || personalInfo.perm_address.trim().length < 10) {
    errors.perm_address = "Please enter permanent address (min 10 characters)"
    valid = false
  }
  if (!personalInfo.perm_city || !personalInfo.perm_city.trim()) {
    errors.perm_city = "Permanent city is required"
    valid = false
  }
  if (!personalInfo.perm_state || !personalInfo.perm_state.trim()) {
    errors.perm_state = "Permanent state is required"
    valid = false
  }
  if (!personalInfo.perm_country || !personalInfo.perm_country.trim()) {
    errors.perm_country = "Permanent country is required"
    valid = false
  }
  if (!personalInfo.perm_pin || !String(personalInfo.perm_pin).trim()) {
    errors.perm_pin = "Permanent pin is required"
    valid = false
  }
  if (!personalInfo.perm_phone) {
    errors.perm_phone = "Permanent phone is required"
    valid = false
  }

 
  if (!personalInfo.police_station || !personalInfo.police_station.trim()) {
    errors.police_station = "Nearest police station is required"
    valid = false
  }
  if (!files.photo) {
    errors.photo = errors.photo || 'Please upload a photo'
    valid = false
  } else if (!IMG_TYPES.includes(files.photo.type)) {
    errors.photo = errors.photo || 'Photo must be JPG, PNG or WEBP'
    valid = false
  } else if (files.photo.size > MAX_IMG_SIZE) {
    errors.photo = errors.photo || 'Photo must be less than 2 MB'
    valid = false
  }

  // Signature
  if (!files.signature) {
    errors.signature = errors.signature || 'Please upload your signature'
    valid = false
  } else if (!IMG_TYPES.includes(files.signature.type)) {
    errors.signature = errors.signature || 'Signature must be JPG, PNG or WEBP'
    valid = false
  } else if (files.signature.size > MAX_IMG_SIZE) {
    errors.signature = errors.signature || 'Signature must be less than 2 MB'
    valid = false
  }

  // CV
  if (!files.cv) {
    errors.cv = errors.cv || 'Please upload your CV (PDF)'
    valid = false
  } else if (!PDF_TYPES.includes(files.cv.type)) {
    errors.cv = errors.cv || 'CV must be a PDF'
    valid = false
  } else if (files.cv.size > MAX_PDF_SIZE) {
    errors.cv = errors.cv || 'CV must be less than 5 MB'
    valid = false
  }

  return valid
}



function clearErrors() { Object.keys(errors).forEach(k => errors[k] = '') }

async function saveUpdatePersonaleInfo() {
  clearErrors()
  if (!validatePersonalInfo()) {
  
    return
  }
  try {
    const fd = new FormData()
    Object.keys(personalInfo).forEach(k => fd.append(k, personalInfo[k]))
    if (files.photo) fd.append('photo', files.photo)
    if (files.signature) fd.append('signature', files.signature)
    if (files.cv) fd.append('cv', files.cv)

    let response
    if (personalInfo.id) response = await axios.put(`/personal-info/${personalInfo.id}`, fd)
    else { response = await axios.post(`/personal-info`, fd); personalInfo.id = response.data.id ?? personalInfo.id }
    alert('Saved successfully')
  } catch (err) {
    console.error(err)
    if (err.response?.status === 422 && err.response.data?.errors) {
      Object.keys(err.response.data.errors).forEach(f => { errors[f] = err.response.data.errors[f] })
      return
    }
    alert('Failed to save')
  }
}

function saveDraft() { /* noop — you can reuse saveUpdatePersonaleInfo if desired */ }

function onPreview(payload) { console.log('preview payload:', payload); /* implement preview behavior */ }

/* stepper init/destroy exactly as before */
let stepperInstance = null
function destroyStepper() {
  try { if (stepperInstance?.destroy) stepperInstance.destroy() } catch (e) { stepperInstance = null }
  finally { stepperInstance = null; if (window.stepper3) window.stepper3 = null }
}
async function initStepper() {
  await nextTick()
  const el = document.querySelector('#stepper3'); if (!el) return
  destroyStepper()
  const StepperCtor = window.Stepper || window.bsStepper || window.bs_stepper || window.BsStepper
  if (!StepperCtor) { const firstStep = el.querySelector('.bs-stepper-header .step'); if (firstStep) firstStep.classList.add('active'); el.classList.add('linear'); return }
  try {
    stepperInstance = new StepperCtor(el, { linear: false, animation: true })
    window.stepper3 = { next: () => stepperInstance.next(), previous: () => stepperInstance.previous(), to: (n) => stepperInstance.to && stepperInstance.to(n), instance: stepperInstance }
    const first = el.querySelector('.bs-stepper-header .step'); if (first && !first.classList.contains('active')) { first.classList.add('active'); el.classList.add('linear') }
  } catch (err) { console.error('Failed to init bs-stepper:', err) }
}

onMounted(() => { initStepper(); loadJobMeta(route.params.id) })
onBeforeUnmount(() => destroyStepper())

</script>

<style scoped>
.form-control, .form-select, textarea.form-control { margin-bottom: 0.5rem; }
.card-body-wide { padding: .5rem; }
</style>
