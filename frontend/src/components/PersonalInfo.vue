<template>
  <div>
    <h5 class="mb-1">Your Personal Information</h5>
    <div class="row g-3">
      <!-- First Name -->
      <div class="col-12 col-lg-6">
        <label for="first-name" class="form-label required-label">First Name</label>
        <input
          type="text"
          class="form-control"
          :class="{ 'input-error': errors.full_name }"
          id="first-name"
          v-model="personalInfo.full_name"
        />
        <p class="error-text" v-if="errors.full_name">{{ errors.full_name }}</p>
      </div>

      <!-- Gender -->
      <div class="col-12 col-lg-6">
        <label for="gender" class="form-label required-label">Gender</label>
        <select class="form-control" id="gender" v-model="personalInfo.gender">
          <option value="">Select</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        <p class="error-text" v-if="errors.gender">{{ errors.gender }}</p>
      </div>

      <!-- Phone Number -->
      <div class="col-12 col-lg-6">
        <label for="phone-number" class="form-label required-label">Phone Number</label>
        <input type="text" class="form-control" id="phone-number" v-model="personalInfo.phone_number" />
        <p class="error-text" v-if="errors.phone_number">{{ errors.phone_number }}</p>
      </div>

      <!-- Email -->
      <div class="col-12 col-lg-6">
        <label for="input-email" class="form-label required-label">E-mail Address</label>
        <input type="email" class="form-control" id="input-email" v-model="personalInfo.email" />
        <p class="error-text" v-if="errors.email">{{ errors.email }}</p>
      </div>

      <!-- Date of Birth -->
      <div class="col-12 col-lg-6">
        <label for="date-of-birth" class="form-label required-label">Date of Birth</label>
        <flat-pickr
          id="date-of-birth"
          v-model="personalInfo.date_of_birth"
          :config="dateConfig"
          class="form-control"
        />
        <p class="error-text" v-if="errors.date_of_birth">{{ errors.date_of_birth }}</p>
      </div>

      <!-- Marital Status -->
      <div class="col-12 col-lg-6">
        <label for="marital-status" class="form-label required-label">Marital Status</label>
        <select class="form-control" id="marital-status" v-model="personalInfo.marital_status">
          <option value="">Select</option>
          <option value="Single">Single</option>
          <option value="Married">Married</option>
        </select>
        <p class="error-text" v-if="errors.marital_status">{{ errors.marital_status }}</p>
      </div>

      <!-- Father Name -->
      <div class="col-12 col-lg-6">
        <label for="father-name" class="form-label required-label">Father's Name</label>
        <input type="text" class="form-control" id="father-name" v-model="personalInfo.father_name" />
        <p class="error-text" v-if="errors.father_name">{{ errors.father_name }}</p>
      </div>

      <!-- Nationality -->
      <div class="col-12 col-lg-6">
        <label for="nationality" class="form-label required-label">Nationality</label>
        <input type="text" class="form-control" id="nationality" v-model="personalInfo.nationality" />
        <p class="error-text" v-if="errors.nationality">{{ errors.nationality }}</p>
      </div>

      <!-- Mode of Application -->
      <div class="col-12 col-lg-6">
        <label for="mode-of-application" class="form-label required-label">Mode of Application</label>
        <select class="form-select" id="mode_of_application" v-model="personalInfo.mode_of_application">
          <option v-for="(opt, idx) in mode_of_application" :key="idx" :value="opt">{{ opt }}</option>
        </select>
        <p class="error-text" v-if="errors.mode_of_application">{{ errors.mode_of_application }}</p>
      </div>

      <!-- Current Organization -->
      <div class="col-12 col-lg-6">
        <label for="current-organization" class="form-label required-label">Current Organization</label>
        <input type="text" class="form-control" id="current-organization" v-model="personalInfo.current_organization" />
        <p class="error-text" v-if="errors.current_organization">{{ errors.current_organization }}</p>
      </div>

      <!-- Total Emoluments -->
      <div class="col-12 col-lg-6">
        <label for="total-emoluments" class="form-label required-label">Total Emoluments</label>
        <input type="number" class="form-control" id="total-emoluments" v-model="personalInfo.total_emoluments" />
        <p class="error-text" v-if="errors.total_emoluments">{{ errors.total_emoluments }}</p>
      </div>

      <!-- Total Experience -->
      <div class="col-12 col-lg-6">
        <label for="total-year-exp" class="form-label required-label">Total Experience (Years)</label>
        <input type="number" class="form-control" id="total-year-exp" v-model="personalInfo.total_experience_years" />
        <p class="error-text" v-if="errors.total_experience_years">{{ errors.total_experience_years }}</p>
      </div>

      <!-- Aadhaar Number -->
      <div class="col-12 col-lg-6">
        <label for="aadhaar-number" class="form-label required-label">Aadhaar Number</label>
        <input type="text" class="form-control" id="aadhaar-number" v-model="personalInfo.aadhaar_number" />
        <p class="error-text" v-if="errors.aadhaar_number">{{ errors.aadhaar_number }}</p>
      </div>

      <!-- Social Category -->
      <div class="col-12 col-lg-6">
        <label for="social-category" class="form-label required-label">Social Category</label>
        <select class="form-select" id="social-category" v-model="personalInfo.social_category">
          <option v-for="(opt, idx) in socialCategoryOptions" :key="idx" :value="opt">{{ opt }}</option>
        </select>
        <p class="error-text" v-if="errors.social_category">{{ errors.social_category }}</p>
      </div>

      <!-- Correspondence Address -->
      <div class="col-12 col-lg-6">
        <label for="address-correspondence" class="form-label required-label">Correspondence Address</label>
        <textarea class="form-control" id="address-correspondence" v-model="personalInfo.corr_address"></textarea>
        <p class="error-text" v-if="errors.corr_address">{{ errors.corr_address }}</p>
      </div>
      <div class="col-12 col-lg-6">
        <label for="city-correspondence" class="form-label required-label">City</label>
        <input type="text" class="form-control" id="city-correspondence" v-model="personalInfo.corr_city" />
        <p class="error-text" v-if="errors.corr_city">{{ errors.corr_city }}</p>
      </div>
      <div class="col-12 col-lg-6">
        <label for="state-correspondence" class="form-label required-label">State</label>
        <input type="text" class="form-control" id="state-correspondence" v-model="personalInfo.corr_state" />
        <p class="error-text" v-if="errors.corr_state">{{ errors.corr_state }}</p>
      </div>
      <div class="col-12 col-lg-6">
        <label for="country-correspondence" class="form-label required-label">Country</label>
        <input type="text" class="form-control" id="country-correspondence" v-model="personalInfo.corr_country" />
        <p class="error-text" v-if="errors.corr_country">{{ errors.corr_country }}</p>
      </div>
      <div class="col-12 col-lg-6">
        <label for="pin-correspondence" class="form-label required-label">Pin/Zip</label>
        <input type="text" class="form-control" id="pin-correspondence" v-model="personalInfo.corr_pin" />
        <p class="error-text" v-if="errors.corr_pin">{{ errors.corr_pin }}</p>
      </div>
      <div class="col-12 col-lg-6">
        <label for="phone-correspondence" class="form-label required-label">Phone</label>
        <input type="text" class="form-control" id="phone-correspondence" v-model="personalInfo.corr_phone" />
        <p class="error-text" v-if="errors.corr_phone">{{ errors.corr_phone }}</p>
      </div>

      <!-- Checkbox: copy address -->
      <div class="col-12">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="same-address-checkbox" v-model="sameAddresses" @change="copyAddressOnce(sameAddresses)" />
          <label class="form-check-label" for="same-address-checkbox">
            Correspondence Address same as Permanent Address
          </label>
        </div>
      </div>

      <!-- Permanent Address -->
      <div class="col-12 col-lg-6">
        <label for="permanent-address" class="form-label required-label">Permanent Address</label>
        <textarea class="form-control" id="permanent-address" v-model="personalInfo.perm_address"></textarea>
        <p class="error-text" v-if="errors.perm_address">{{ errors.perm_address }}</p>
      </div>
      <div class="col-12 col-lg-6">
        <label for="city-permanent" class="form-label required-label">City</label>
        <input type="text" class="form-control" id="city-permanent" v-model="personalInfo.perm_city" />
        <p class="error-text" v-if="errors.perm_city">{{ errors.perm_city }}</p>
      </div>
      <div class="col-12 col-lg-6">
        <label for="state-permanent" class="form-label required-label">State</label>
        <input type="text" class="form-control" id="state-permanent" v-model="personalInfo.perm_state" />
        <p class="error-text" v-if="errors.perm_state">{{ errors.perm_state }}</p>
      </div>
      <div class="col-12 col-lg-6">
        <label for="country-permanent" class="form-label required-label">Country</label>
        <input type="text" class="form-control" id="country-permanent" v-model="personalInfo.perm_country" />
        <p class="error-text" v-if="errors.perm_country">{{ errors.perm_country }}</p>
      </div>
      <div class="col-12 col-lg-6">
        <label for="pin-permanent" class="form-label required-label">Pin/Zip</label>
        <input type="text" class="form-control" id="pin-permanent" v-model="personalInfo.perm_pin" />
        <p class="error-text" v-if="errors.perm_pin">{{ errors.perm_pin }}</p>
      </div>
      <div class="col-12 col-lg-6">
        <label for="phone-permanent" class="form-label required-label">Phone</label>
        <input type="text" class="form-control" id="phone-permanent" v-model="personalInfo.perm_phone" />
        <p class="error-text" v-if="errors.perm_phone">{{ errors.perm_phone }}</p>
      </div>

      <!-- Police Station -->
      <div class="col-12 col-lg-6">
        <label for="police-station" class="form-label required-label">Nearest Police Station</label>
        <input type="text" class="form-control" id="police-station" v-model="personalInfo.police_station" />
        <p class="error-text" v-if="errors.police_station">{{ errors.police_station }}</p>
      </div>

      <!-- Photo -->
      <div class="col-12 col-lg-6">
        <label for="photo" class="form-label required-label">Photo</label>
        <input type="file" class="form-control" accept="image/*" @change="onPhotoChange" />
        <!-- <img v-if="files.photoPreview" :src="BASE_URL +files.photoPreview" class="img-thumbnail mt-2" style="max-height:120px;" /> -->
        <img v-if="files.photoPreview" :src="files.photoPreview" class="img-thumbnail mt-2" alt="photo preview" style="max-height:120px;" />
        

        <p class="error-text" v-if="errors.photo">{{ errors.photo }}</p>
      </div>

      <!-- Signature -->
      <div class="col-12 col-lg-6">
        <label for="signature" class="form-label required-label">Signature</label>
        <input type="file" class="form-control" accept="image/*" @change="onSignatureChange" />
        <img v-if="files.signaturePreview" :src="files.signaturePreview" class="img-thumbnail mt-2" style="max-height:120px;" />
        <p class="error-text" v-if="errors.signature">{{ errors.signature }}</p>
      </div>

      <!-- CV -->
      <div class="col-12 col-lg-6">
        <label for="upload-cv" class="form-label required-label">Upload CV</label>
        <input type="file" class="form-control" accept="application/pdf" @change="onCvChange" />
         <iframe v-if="files.cvPreview" :src="files.cvPreview" style="width:100%;height:250px;" class="mt-2 border"></iframe> 
        <p class="error-text" v-if="errors.cv">{{ errors.cv }}</p>
      </div>

      <!-- Buttons -->
      <div class="col-12 col-lg-6">
        <button class="btn btn-secondary me-2" type="button" @click="saveUpdatePersonaleInfo">Save</button>
        <button class="btn btn-primary px-4" type="button" onclick="stepper3.next()">Next</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, onMounted,onBeforeUnmount  } from 'vue'
import FlatPickr from 'vue-flatpickr-component'
import 'flatpickr/dist/flatpickr.css'
import axios from '@/axios'
import Swal from "sweetalert2";

import { useRoute } from 'vue-router'
const BASE_URL = import.meta.env.VITE_API_BASE_URL;
const route = useRoute()
const job_id = route.params.id
const applicant_id = 1

const dateConfig = { dateFormat: 'Y-m-d' }
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



const personalInfo = reactive({
  
  job_id,
  applicant_id,
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

const errors = reactive({})
const files = reactive({ photo: null, signature: null, cv: null, photoPreview: null, signaturePreview: null, cvPreview: null })
const IMG_TYPES = ['image/jpeg', 'image/png', 'image/webp']
const MAX_IMG_SIZE = 2 * 1024 * 1024
const PDF_TYPES = ['application/pdf']
const MAX_PDF_SIZE = 5 * 1024 * 1024

const sameAddresses = ref(false)



// remember blob urls so we can revoke them
let currentBlobUrls = []

function createPreview(file) {
  if (!file) return null
  const url = URL.createObjectURL(file)
  currentBlobUrls.push(url)
  return url
}

function revokeBlobUrls() {
  currentBlobUrls.forEach(u => {
    try { URL.revokeObjectURL(u) } catch(e) {}
  })
  currentBlobUrls = []
}

function onPhotoChange(e) {
  const f = e?.target?.files?.[0] ?? null
  // revoke previous blob urls if any (avoid memory leaks)
  revokeBlobUrls()

  files.photo = f
  files.photoPreview = f ? createPreview(f) : null
}

// similar for signature/cv
function onSignatureChange(e) {
  const f = e?.target?.files?.[0] ?? null
  revokeBlobUrls()
  files.signature = f
  files.signaturePreview = f ? createPreview(f) : null
}
function onCvChange(e) {
  const f = e?.target?.files?.[0] ?? null
  revokeBlobUrls()
  files.cv = f
  files.cvPreview = f ? createPreview(f) : null
}

// Copy address when checkbox checked
function copyAddressOnce(checked) {
  if (checked) {
    personalInfo.perm_address = personalInfo.corr_address
    personalInfo.perm_city = personalInfo.corr_city
    personalInfo.perm_state = personalInfo.corr_state
    personalInfo.perm_country = personalInfo.corr_country
    personalInfo.perm_pin = personalInfo.corr_pin
    personalInfo.perm_phone = personalInfo.corr_phone
  }
}

// Prefill API
async function getPersonalInfo() {
  try {
    const res = await axios.get(`/personal-info/${applicant_id}/${job_id}`)
    const data = res.data
  //  alert(data.id);
    Object.assign(personalInfo, data)
    if (!files.photo && data.photo_url) {
      files.photoPreview = BASE_URL + data.photo_url
    }
    if (!files.signature && data.signature_url) {
      files.signaturePreview = BASE_URL + data.signature_url
    }
    if (!files.cv && data.cv_url) {
      files.cvPreview = BASE_URL + data.cv_url
    }
    // checkbox copy after prefill
    if (sameAddresses.value) copyAddressOnce(true)
  } catch (err) {
    console.log('No existing data')
  }
}
function clearErrors() {
  Object.keys(errors).forEach(k => errors[k] = '')
}

// Full validation function
function validatePersonalInfo() {
  // Clear previous errors
  Object.keys(errors).forEach(k => errors[k] = '');
  let valid = true;

  const isEdit = !!personalInfo.id; // TRUE when updating

  // ---------------------------
  // BASIC TEXT VALIDATION
  // ---------------------------

  if (!personalInfo.full_name?.trim()) { errors.full_name = 'Please enter your full name'; valid = false; }
  if (!personalInfo.gender) { errors.gender = 'Please select gender'; valid = false; }

  const phoneRe = /^\d{10}$/;
  if (!personalInfo.phone_number || !phoneRe.test(String(personalInfo.phone_number).trim())) {
    errors.phone_number = 'Enter a valid 10-digit phone number'; valid = false;
  }

  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!personalInfo.email || !emailRe.test(String(personalInfo.email).trim())) {
    errors.email = 'Please provide a valid email address'; valid = false;
  }

  if (!personalInfo.date_of_birth) { errors.date_of_birth = 'Date of birth is required'; valid = false; }
  if (!personalInfo.marital_status) { errors.marital_status = 'Please select marital status'; valid = false; }
  if (!personalInfo.father_name?.trim()) { errors.father_name = "Father's name is required"; valid = false; }
  if (!personalInfo.nationality?.trim()) { errors.nationality = 'Nationality is required'; valid = false; }
  if (!personalInfo.mode_of_application) { errors.mode_of_application = 'Please select mode of application'; valid = false; }

  if (!personalInfo.current_organization?.trim()) { errors.current_organization = 'Current organization is required'; valid = false; }

  if (personalInfo.total_emoluments === '' || personalInfo.total_emoluments === null) {
    errors.total_emoluments = 'Total emoluments is required'; valid = false;
  } else if (isNaN(Number(personalInfo.total_emoluments)) || Number(personalInfo.total_emoluments) < 0) {
    errors.total_emoluments = 'Total emoluments must be positive'; valid = false;
  }

  if (personalInfo.total_experience_years === '' || personalInfo.total_experience_years === null) {
    errors.total_experience_years = 'Experience is required'; valid = false;
  } else if (isNaN(Number(personalInfo.total_experience_years)) || Number(personalInfo.total_experience_years) < 0) {
    errors.total_experience_years = 'Experience must be non-negative'; valid = false;
  }

  const aadhaarRe = /^\d{12}$/;
  if (personalInfo.aadhaar_number && !aadhaarRe.test(String(personalInfo.aadhaar_number).trim())) {
    errors.aadhaar_number = 'Aadhaar must be 12 digits'; valid = false;
  }

  if (!personalInfo.social_category) { errors.social_category = 'Please select social category'; valid = false; }

  if (!personalInfo.corr_address?.trim() || personalInfo.corr_address.trim().length < 10) { 
    errors.corr_address = 'Correspondence address min 10 characters'; valid = false; 
  }
  if (!personalInfo.corr_city?.trim()) { errors.corr_city = 'Correspondence city required'; valid = false; }
  if (!personalInfo.corr_state?.trim()) { errors.corr_state = 'Correspondence state required'; valid = false; }
  if (!personalInfo.corr_country?.trim()) { errors.corr_country = 'Correspondence country required'; valid = false; }
  if (!personalInfo.corr_pin?.trim()) { errors.corr_pin = 'Correspondence pin required'; valid = false; }
  if (!personalInfo.corr_phone) { errors.corr_phone = 'Correspondence phone required'; valid = false; }

  if (!personalInfo.perm_address?.trim() || personalInfo.perm_address.trim().length < 10) { 
    errors.perm_address = 'Permanent address min 10 characters'; valid = false; 
  }
  if (!personalInfo.perm_city?.trim()) { errors.perm_city = 'Permanent city required'; valid = false; }
  if (!personalInfo.perm_state?.trim()) { errors.perm_state = 'Permanent state required'; valid = false; }
  if (!personalInfo.perm_country?.trim()) { errors.perm_country = 'Permanent country required'; valid = false; }
  if (!personalInfo.perm_pin?.trim()) { errors.perm_pin = 'Permanent pin required'; valid = false; }
  if (!personalInfo.perm_phone) { errors.perm_phone = 'Permanent phone required'; valid = false; }

  if (!personalInfo.police_station?.trim()) { errors.police_station = 'Police station required'; valid = false; }

  // ---------------------------
  // FILE VALIDATION
  // ---------------------------
  // Create = files required
  // Update = only validate if user selects new file

  // ---- PHOTO ----
  if (!isEdit) {
    if (!files.photo) { errors.photo = 'Please upload photo'; valid = false; }
  } else {
    if (files.photo) {
      if (!IMG_TYPES.includes(files.photo.type)) {
        errors.photo = 'Photo must be JPG/PNG/WEBP'; valid = false;
      } else if (files.photo.size > MAX_IMG_SIZE) {
        errors.photo = 'Photo max 2MB'; valid = false;
      }
    }
  }

  // ---- SIGNATURE ----
  if (!isEdit) {
    if (!files.signature) { errors.signature = 'Please upload signature'; valid = false; }
  } else {
    if (files.signature) {
      if (!IMG_TYPES.includes(files.signature.type)) {
        errors.signature = 'Signature must be JPG/PNG/WEBP'; valid = false;
      } else if (files.signature.size > MAX_IMG_SIZE) {
        errors.signature = 'Signature max 2MB'; valid = false;
      }
    }
  }

  // ---- CV ----
  if (!isEdit) {
    if (!files.cv) { errors.cv = 'Please upload CV'; valid = false; }
  } else {
    if (files.cv) {
      if (!PDF_TYPES.includes(files.cv.type)) {
        errors.cv = 'CV must be PDF'; valid = false;
      } else if (files.cv.size > MAX_PDF_SIZE) {
        errors.cv = 'CV max 5MB'; valid = false;
      }
    }
  }

  return valid;
}

// Save function (POST/PUT)
async function saveUpdatePersonaleInfo() {
  clearErrors()

  // Validate first
  if (!validatePersonalInfo()) {
    return // stop if validation fails
  }
  const fd = new FormData()
  Object.keys(personalInfo).forEach(k => fd.append(k, personalInfo[k]))
 
  if (files.photo) fd.append('photo', files.photo)
  if (files.signature) fd.append('signature', files.signature)
  if (files.cv) fd.append('cv', files.cv)
  

  try {
    const res = personalInfo.id
      ? await axios.put(`/personal-info/${personalInfo.id}`, fd)
      : await axios.post(`/personal-info`, fd)
    personalInfo.id = res.data.id ?? personalInfo.id
       Swal.fire({
    icon: "success",
    title: "",
    text: res.data.message || "Saved successfully",
    timer: 2000,
    showConfirmButton: false
  })
  } catch (err) {
    console.error(err)
     Swal.fire({
    icon: "error",
    title: "Error!",
    text: err.response?.data?.message || "Something went wrong",
  })
  }
}

onMounted(() => {
  getPersonalInfo()
  loadJobMeta(route.params.id)
})
onBeforeUnmount(() => {
  revokeBlobUrls()
})
</script>

<style scoped>
.form-control,
.form-select,
textarea.form-control {
  margin-bottom: 0.5rem;
}
.input-error { border-color: #dc3545; }
.error-text { color: #dc3545; font-size: .875rem; margin-top: .25rem; }
.img-thumbnail { max-width: 100px; max-height: 120px; }
</style>
