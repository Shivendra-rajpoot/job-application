<template>
  <div>
    <h5 class="mb-1">Your Personal Information</h5>
    <div class="row g-3">
      <!-- First row fields -->
      <div class="col-12 col-lg-6">
        <label for="first-name" class="form-label required-label">First Name</label>
        <input
          type="text"
          class="form-control"
          :class="{ 'input-error': errors.full_name }"
          id="first-name"
          v-model="personalInfo.full_name"
          placeholder="First Name"
          ref="fullNameInput"
        />
        <p class="error-text" v-if="errors.full_name">{{ errors.full_name }}</p>
      </div>

      <div class="col-12 col-lg-6">
        <label for="gender" class="form-label required-label">Gender</label>
        <select name="gender" class="form-control" id="gender" v-model="personalInfo.gender">
          <option value="">Select</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        <p class="error-text" v-if="errors.gender">{{ errors.gender }}</p>
      </div>

      <div class="col-12 col-lg-6">
        <label for="phone-number" class="form-label required-label">Phone Number</label>
        <input type="text" class="form-control" id="phone-number" v-model="personalInfo.phone_number" placeholder="Phone Number" />
        <p class="error-text" v-if="errors.phone_number">{{ errors.phone_number }}</p>
      </div>

      <div class="col-12 col-lg-6">
        <label for="input-email" class="form-label required-label">E-mail Address</label>
        <input type="email" class="form-control" id="input-email" v-model="personalInfo.email" placeholder="Enter Email Address" />
        <p class="error-text" v-if="errors.email">{{ errors.email }}</p>
      </div>

      <!-- Flatpickr Date of Birth -->
      <div class="col-12 col-lg-6">
        <label for="date-of-birth" class="form-label required-label">Date of Birth</label>
        <flat-pickr
          id="date-of-birth"
          v-model="personalInfo.date_of_birth"
          :config="dateConfig"
          class="form-control"
          placeholder="Choose a date"
          required
        />
        <p class="error-text" v-if="errors.date_of_birth">{{ errors.date_of_birth }}</p>
      </div>

      <div class="col-12 col-lg-6">
        <label for="marital-status" class="form-label required-label">Marital Status</label>
        <select name="marital_status" class="form-control" id="marital-status" v-model="personalInfo.marital_status" required>
          <option value="">Select</option>
          <option value="Single">Single</option>
          <option value="Married">Married</option>
        </select>
        <p class="error-text" v-if="errors.marital_status">{{ errors.marital_status }}</p>
      </div>

      <div class="col-12 col-lg-6">
        <label for="father-name" class="form-label required-label">Father's Name</label>
        <input type="text" class="form-control" id="father-name" v-model="personalInfo.father_name" placeholder="Father's Name" />
        <p class="error-text" v-if="errors.father_name">{{ errors.father_name }}</p>
      </div>

      <div class="col-12 col-lg-6">
        <label for="nationality" class="form-label required-label">Nationality</label>
        <input type="text" class="form-control" id="nationality" v-model="personalInfo.nationality" placeholder="Nationality" />
        <p class="error-text" v-if="errors.nationality">{{ errors.nationality }}</p>
      </div>

      <div class="col-12 col-lg-6">
        <label for="mode-of-application" class="form-label required-label">Mode of Application</label>
        <select
          class="form-select"
          id="mode_of_application"
          v-model="personalInfo.mode_of_application"
          aria-label="Mode of Application"
          required
        >
          <option v-for="(opt, idx) in modeOptions" :key="idx" :value="opt">{{ opt }}</option>
        </select>
        <p class="error-text" v-if="errors.mode_of_application">{{ errors.mode_of_application }}</p>
      </div>

      <div class="col-12 col-lg-6">
        <label for="current-organization" class="form-label required-label">Name of Current Organization & Type (Govt./Pvt.)</label>
        <input
          type="text"
          class="form-control"
          id="current-organization"
          v-model="personalInfo.current_organization"
          placeholder="Name of Current Organization & Type (i.e. Govt./Pvt. etc.)"
        />
        <p class="error-text" v-if="errors.current_organization">{{ errors.current_organization }}</p>
      </div>

      <div class="col-12 col-lg-6">
        <label for="total-emoluments" class="form-label required-label">Total Emoluments drawn presently</label>
        <input type="number" class="form-control" id="total-emoluments" v-model="personalInfo.total_emoluments" placeholder="Total Emoluments drawn presently" />
        <p class="error-text" v-if="errors.total_emoluments">{{ errors.total_emoluments }}</p>
      </div>

      <div class="col-12 col-lg-6">
        <label for="total-year-exp" class="form-label required-label">Total years of Post Qualification Experience</label>
        <input type="number" class="form-control" id="total-year-exp" v-model="personalInfo.total_experience_years" placeholder="Total years of Post Qualification Experience" />
        <p class="error-text" v-if="errors.total_experience_years">{{ errors.total_experience_years }}</p>
      </div>

      <div class="col-12 col-lg-6">
        <label for="aadhaar-number" class="form-label required-label">Aadhaar Number</label>
        <input type="text" class="form-control" id="aadhaar-number" v-model="personalInfo.aadhaar_number" placeholder="Aadhaar Number" />
        <p class="error-text" v-if="errors.aadhaar_number">{{ errors.aadhaar_number }}</p>
      </div>

      <div class="col-12 col-lg-6">
        <label for="social-category" class="form-label required-label">Social Category</label>
        <select class="form-select" id="social-category" v-model="personalInfo.social_category" aria-label="Default select example" required>
          <option v-for="(opt, idx) in socialCategoryOptions" :key="idx" :value="opt">{{ opt }}</option>
        </select>
        <p class="error-text" v-if="errors.social_category">{{ errors.social_category }}</p>
      </div>

      <!-- Correspondence Address block -->
      <div class="col-12 col-lg-6">
        <label for="address-correspondence" class="form-label required-label">Address for Correspondence</label>
        <textarea class="form-control" id="address-correspondence" v-model="personalInfo.corr_address" placeholder="Address for Correspondence"></textarea>
        <p class="error-text" v-if="errors.corr_address">{{ errors.corr_address }}</p>
      </div>

      <div class="col-12 col-lg-6">
        <label for="city-correspondence" class="form-label required-label">City</label>
        <input type="text" class="form-control" id="city-correspondence" v-model="personalInfo.corr_city" placeholder="City" />
        <p class="error-text" v-if="errors.corr_city">{{ errors.corr_city }}</p>
      </div>

      <div class="col-12 col-lg-6">
        <label for="state-correspondence" class="form-label required-label">State</label>
        <input type="text" class="form-control" id="state-correspondence" v-model="personalInfo.corr_state" placeholder="State" />
        <p class="error-text" v-if="errors.corr_state">{{ errors.corr_state }}</p>
      </div>

      <div class="col-12 col-lg-6">
        <label for="country-correspondence" class="form-label required-label">Country</label>
        <input type="text" class="form-control" id="country-correspondence" v-model="personalInfo.corr_country" placeholder="Country" />
        <p class="error-text" v-if="errors.corr_country">{{ errors.corr_country }}</p>
      </div>

      <div class="col-12 col-lg-6">
        <label for="pin-correspondence" class="form-label required-label">Pin/Zip Code</label>
        <input type="text" class="form-control" id="pin-correspondence" v-model="personalInfo.corr_pin" placeholder="Pin/Zip Code" />
        <p class="error-text" v-if="errors.corr_pin">{{ errors.corr_pin }}</p>
      </div>

      <div class="col-12 col-lg-6">
        <label for="phone-correspondence" class="form-label required-label">Phone No. at Correspondence Address</label>
        <input type="text" class="form-control" id="phone-correspondence" v-model="personalInfo.corr_phone" placeholder="Phone No. at Correspondence Address" />
        <p class="error-text" v-if="errors.corr_phone">{{ errors.corr_phone }}</p>
      </div>

      <!-- Checkbox to copy once -->
      <div class="col-12 col-lg-12">
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            id="same-address-checkbox"
            :checked="sameAddresses"
            @change="onSameAddressChange"
          />
          <label class="form-check-label" for="same-address-checkbox">
            Check if Correspondence Address & Permanent Address are same
          </label>
        </div>
      </div>

      <!-- Permanent Address block (same place, always visible) -->
      <div class="col-12 col-lg-6">
        <label for="permanent-address" class="form-label required-label">Permanent Address</label>
        <textarea class="form-control" id="permanent-address" v-model="personalInfo.perm_address" placeholder="Permanent Address"></textarea>
        <p class="error-text" v-if="errors.perm_address">{{ errors.perm_address }}</p>
      </div>

      <div class="col-12 col-lg-6">
        <label for="city-permanent" class="form-label required-label">City</label>
        <input type="text" class="form-control" id="city-permanent" v-model="personalInfo.perm_city" placeholder="City" />
        <p class="error-text" v-if="errors.perm_city">{{ errors.perm_city }}</p>
      </div>

      <div class="col-12 col-lg-6">
        <label for="state-permanent" class="form-label required-label">State</label>
        <input type="text" class="form-control" id="state-permanent" v-model="personalInfo.perm_state" placeholder="State"  />
        <p class="error-text" v-if="errors.perm_state">{{ errors.perm_state }}</p>
      </div>

      <div class="col-12 col-lg-6">
        <label for="country-permanent" class="form-label required-label">Country</label>
        <input type="text" class="form-control" id="country-permanent" v-model="personalInfo.perm_country" placeholder="Country"  />
        <p class="error-text" v-if="errors.perm_country">{{ errors.perm_country }}</p>
      </div>

      <div class="col-12 col-lg-6">
        <label for="pin-permanent" class="form-label required-label">Pin/Zip Code</label>
        <input type="text" class="form-control" id="pin-permanent" v-model="personalInfo.perm_pin" placeholder="Pin/Zip Code"  />
        <p class="error-text" v-if="errors.perm_pin">{{ errors.perm_pin }}</p>
      </div>

      <div class="col-12 col-lg-6">
        <label for="phone-permanent" class="form-label required-label">Phone No. at Permanent Address</label>
        <input type="text" class="form-control" id="phone-permanent" v-model="personalInfo.perm_phone" placeholder="Phone No. at Permanent Address"  />
        <p class="error-text" v-if="errors.perm_phone">{{ errors.perm_phone }}</p>
      </div>

      <!-- Remaining fields -->
      <div class="col-12 col-lg-6">
        <label for="police-station" class="form-label required-label">Nearest Police Station</label>
        <input type="text" class="form-control" id="police-station" v-model="personalInfo.police_station" placeholder="Nearest Police Station"  />
        <p class="error-text" v-if="errors.police_station">{{ errors.police_station }}</p>
      </div>

      <div class="col-12 col-lg-6">
        <label for="photo" class="form-label required-label">Photo</label>
        <input type="file" accept="image/*" class="form-control" id="photo" @change="onPhoto" />
        <img v-if="files.photoPreview"
       :src="files.photoPreview"
       class="img-thumbnail mt-2"
       style="max-height: 120px;" />
         <p class="error-text" v-if="errors.photo">{{ errors.photo }}</p>
      </div>

      <div class="col-12 col-lg-6">
        <label for="signature" class="form-label required-label">Signature</label>
        <input type="file" accept="image/*" class="form-control" id="signature" @change="onSignature" />
        <img
        v-if="files.signaturePreview"
        :src="files.signaturePreview"
        class="img-thumbnail mt-2"
        style="max-height: 120px;"
      />
         <p class="error-text" v-if="errors.signature">{{ errors.signature }}</p>
      </div>

      <div class="col-12 col-lg-6">
        <label for="upload-cv" class="form-label required-label">Upload CV</label>
        <input type="file" accept="pdf/*" class="form-control" id="upload-cv" @change="onCv" />
        <iframe v-if="files.cvPreview"
          :src="files.cvPreview"
          class="mt-2 border"
          style="width: 100%; height: 250px;">
  </iframe>
         <p class="error-text" v-if="errors.cv">{{ errors.cv }}</p>


      </div>

      <div class="col-12 col-lg-6">
          <button class="btn btn-secondary me-2" type="button" @click="$emit('save-personal')">Save</button>
        <button class="btn btn-primary px-4" type="button" onclick="stepper3.next()">Next<i class='bx bx-right-arrow-alt ms-2'></i></button>
      </div>
    </div>
    <!-- end row -->
  </div>
</template>

<script setup>
import { reactive,onMounted, onBeforeUnmount, nextTick } from 'vue'
import { useRoute } from 'vue-router'
import { defineProps, defineEmits, ref } from 'vue'
import FlatPickr from 'vue-flatpickr-component'
import axios from '@/axios'
import 'flatpickr/dist/flatpickr.css'
const applicant_id = '1';
const job_id = route.params.job_id;

const props = defineProps({
  personalInfo: { type: Object, required: true },
  errors: { type: Object, required: true },
  files: { type: Object, required: true },
  dateConfig: { type: Object, required: true },
  modeOptions: { type: Array, default: () => [] },
  socialCategoryOptions: { type: Array, default: () => [] },
  sameAddresses: { type: Boolean, default: false }
})

const emit = defineEmits(['update:sameAddresses', 'on-photo-change', 'on-signature-change', 'on-cv-change', 'save-personal', 'copy-address-once','save-personal'])

const fullNameInput = ref(null)

function onPhoto(e) {
  emit('on-photo-change', e)
}
function onSignature(e) {
  emit('on-signature-change', e)
}
function onCv(e) {
  emit('on-cv-change', e)
}

function onSameAddressChange(e) {
  const checked = !!e.target.checked
  emit('update:sameAddresses', checked)
  emit('copy-address-once', checked)
}
async function getPersonalInfo() {
  try {
    
     const res = await axios.get(`/personal-info/${applicant_id}/${job_id}`);

    const data = res.data;
    console.log(data);

    Object.assign(personalInfo, data); // fills all fields

   
    if (data.photo_url) {
      files.photoPreview = data.photo_url;
    }
    if (data.signature_url) {
      files.signaturePreview = data.signature_url;
    }
    if (data.cv_url) {
      files.cvPreview = data.cv_url;
    }

  } catch (err) {
    console.log("No existing data or error");
  }
}
onMounted(() => {
  getPersonalInfo();
});
</script>

<style scoped>
.form-control,
.form-select,
textarea.form-control {
  margin-bottom: 0.5rem;
}
.input-error { border-color: #dc3545; }
.error-text { color: #dc3545; font-size: .875rem; margin-top: .25rem; }
</style>
