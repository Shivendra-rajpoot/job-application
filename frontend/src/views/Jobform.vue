<template>
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
              <button class="btn btn-light px-4" type="button" @click.prevent="logout">
                <i class="fadeIn animated bx bx-log-out"></i> Log-out
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  </div>

  <div class="page-content">
    <div class="container my-0" style="padding-top: 0px; padding-bottom: 0px;">
      <div class="text-center mb-0">
        <h4 class="fw-bold text-primary text-center">Application Form</h4>
        <h5 class="text-secondary mt-2">Job Title: {{ jobTitle  }}</h5>
      </div>
      <div class="row">
        <div class="col-md-6 text-start">
          <h6 class="mb-0">Job Code: <span class="fw-normal">{{ jobCode }}</span></h6>
        </div>
        <div class="col-md-6 text-end">
          <h6 class="mb-0">Advt. No: <span class="fw-normal">{{ advtNo  }}</span></h6>
        </div>
      </div>
      <hr />
    </div>
    <hr />

    <!-- stepper content (kept as you have it) -->
    <!-- only showing Personal Info block to keep template shorter (rest unchanged) -->
    <div id="stepper2" class="bs-stepper">
      <div class="card">
        <div class="card-body">
          <div id="stepper3" class="bs-stepper gap-4 vertical">
            <div class="bs-stepper-header" role="tablist"> ... </div>
            <div class="bs-stepper-content">
              <form @submit.prevent>
                <div id="personal-info-id" role="tabpane3" class="bs-stepper-pane content fade" aria-labelledby="personal-info-tab">
                  <h5 class="mb-1">Your Personal Information</h5>
                  <div class="row g-3">
                    <div class="col-12 col-lg-6">
                      <label class="form-label">First Name</label>
                      <input type="text" class="form-control" v-model="form.firstName" placeholder="First Name">
                    </div>
                    <div class="col-12 col-lg-6">
                      <label class="form-label">Gender</label>
                      <select class="form-control" v-model="form.gender">
                        <option value="">Select</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div class="col-12 col-lg-6">
                      <label class="form-label">Phone Number</label>
                      <input type="text" class="form-control" v-model="form.phoneNumber" placeholder="Phone Number">
                    </div>

                    <div class="col-12 col-lg-6">
                      <label class="form-label">E-mail Address</label>
                      <input type="email" class="form-control" v-model="form.email" placeholder="Enter Email Address">
                    </div>

                    <div class="col-12 col-lg-6">
                      <label class="form-label">Date of Birth</label>
                      <flat-pickr v-model="form.dateOfBirth" :config="dateConfig" class="form-control" placeholder="Choose a date" />
                    </div>

                    <!-- other fields... -->

                    <div class="col-12 col-lg-12">
                      <button class="btn btn-secondary me-2" type="button" @click="saveDraft">Save Draft</button>
                      <button class="btn btn-primary px-4" type="button" @click="goNext">Next</button>
                    </div>
                  </div>
                </div>

                <!-- rest of your stepper panes (education, experience, etc.) remain unchanged -->
                <!-- For brevity I didn't paste the entire static template again; keep your original content below -->
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>

  <footer class="page-footer fixed-bottom text-center py-3"
          style="background:#094280; color:white; width:100%; left:0; padding-left:30px; padding-right:30px;">
    <p class="mb-0">Copyright © 2023. All rights reserved.</p>
  </footer>
</template>

<script setup>
/* full script: loads data on mount & when route param/query changes */
import { ref, reactive, onMounted, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';


import axios from "@/axios";
import FlatPickr from 'vue-flatpickr-component';
import 'flatpickr/dist/flatpickr.css';

/* ----------------- config ----------------- */
const dateConfig = { dateFormat: 'Y-m-d', maxDate: 'today' };
const dateMonthConfig = { dateFormat: 'Y-m' };

/* ----------------- route & router ----------------- */
const route = useRoute();
const router = useRouter();

/* ------------- UI / job meta --------------- */
const jobTitle = ref('');
const jobCode = ref('');
const advtNo = ref('');

/* ----------------- form state ----------------- */
const form = reactive({
  id: null,           // existing job_application id if editing
  applicant_id: null, // set when logged in or after create
  job_id: null,
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
  correspondence: { address: '', city: '', state: '', country: '', pin: '', phone: '' },
  permanent: { address: '', city: '', state: '', country: '', pin: '', phone: '' },
  policeStation: '',
  files: { photo: null, signature: null, cv: null },
  expertise_text: '',
  declaration_name: '',
  declaration_noc_name: '',
  status: 'draft',
  attempt: 1
});

/* ----------------- child arrays ----------------- */
const education = ref([
  { key: `r_${Math.random().toString(36).slice(2,9)}`, examination: 'Doctoral', degreeName: '', institute: '', year: '', subjects: '', grade: '' },
  { key: `r_${Math.random().toString(36).slice(2,9)}`, examination: "Master's", degreeName: '', institute: '', year: '', subjects: '', grade: '' }
]);
const experiences = ref([{ key: Date.now(), organization: '', position: '', salary: '', from: '', to: '', description: '' }]);
const trainings = ref([{ key: Date.now(), organization: '', course: '', institute: '', duration: '' }]);
const awards = ref([{ key: Date.now(), organization: '', name: '', nature: '', year: '' }]);
const references = ref([]);

/* ---------------- helpers ---------------- */
function getApplicantIdFromStore() {
  // TODO: replace with real auth/store call
  // e.g., return store.state.auth.user?.id
  return localStorage.getItem('applicant_id') ? Number(localStorage.getItem('applicant_id')) : null;
}

function parseMaybeJsonArray(value) {
  if (!value) return [];
  if (Array.isArray(value)) return value;
  if (typeof value === 'string') {
    try {
      const parsed = JSON.parse(value);
      if (Array.isArray(parsed)) return parsed;
    } catch (e) { /* not JSON */ }
  }
  return [];
}

/* ---------------- mapping helpers ---------------- */
function populateFormFromJobApp(jobApp) {
  if (!jobApp) return;
  form.id = jobApp.id ?? null;
  form.applicant_id = jobApp.applicant_id ?? null;
  form.job_id = jobApp.job_id ?? route.params.id ?? null;

  form.firstName = jobApp.full_name || jobApp.first_name || form.firstName;
  form.gender = jobApp.gender || form.gender;
  form.phoneNumber = jobApp.phone_number || form.phoneNumber;
  form.email = jobApp.email || form.email;
  form.dateOfBirth = jobApp.date_of_birth || jobApp.dateOfBirth || form.dateOfBirth;
  form.fatherName = jobApp.father_name || form.fatherName;
  form.nationality = jobApp.nationality || form.nationality;
  form.currentOrganization = jobApp.current_organization || form.currentOrganization;
  form.totalEmoluments = jobApp.total_emoluments || form.totalEmoluments;
  form.total_experience_years = jobApp.total_experience_years || form.total_experience_years;
  form.aadhaarNumber = jobApp.aadhaar_number || form.aadhaarNumber;
  form.socialCategory = jobApp.social_category || form.socialCategory;
  form.marital_status = jobApp.marital_status || form.marital_status;

  // addresses
  form.correspondence.address = jobApp.corr_address || jobApp.corrAddress || form.correspondence.address;
  form.correspondence.city = jobApp.corr_city || form.correspondence.city;
  form.correspondence.state = jobApp.corr_state || form.correspondence.state;
  form.correspondence.country = jobApp.corr_country || form.correspondence.country;
  form.correspondence.pin = jobApp.corr_pin || form.correspondence.pin;
  form.correspondence.phone = jobApp.corr_phone || form.correspondence.phone;

  form.permanent.address = jobApp.perm_address || form.permanent.address;
  form.permanent.city = jobApp.perm_city || form.permanent.city;
  form.permanent.state = jobApp.perm_state || form.permanent.state;
  form.permanent.country = jobApp.perm_country || form.permanent.country;
  form.permanent.pin = jobApp.perm_pin || form.permanent.pin;
  form.permanent.phone = jobApp.perm_phone || form.permanent.phone;

  form.policeStation = jobApp.police_station || form.policeStation;

  // files (if stored as urls)
  form.files.photo = jobApp.photo_url || null;
  form.files.signature = jobApp.signature_url || null;
  form.files.cv = jobApp.cv_url || null;

  form.expertise_text = jobApp.expertise_text || form.expertise_text;
  form.declaration_name = jobApp.declaration_name || form.declaration_name;
  form.declaration_noc_name = jobApp.declaration_noc_name || form.declaration_noc_name;

  form.status = jobApp.status || form.status;
  form.attempt = jobApp.attempt ?? form.attempt;

  // children
  if (Array.isArray(jobApp.educations)) {
    education.value = jobApp.educations.map(e => ({
      key: `r_${Math.random().toString(36).slice(2,9)}`,
      examination: e.exam || 'Any Other',
      degreeName: e.degree_name || e.degreeName || '',
      institute: e.institute || '',
      year: e.year_month || e.year || '',
      subjects: e.subjects || '',
      grade: e.grade || ''
    }));
  }

  if (Array.isArray(jobApp.experiences)) {
    experiences.value = jobApp.experiences.map(ex => ({
      key: Date.now() + Math.random(),
      organization: ex.organization || '',
      position: ex.position || '',
      salary: ex.salary || ex.pay_level || '',
      from: ex.from_month || ex.from || '',
      to: ex.to_month || ex.to || '',
      description: ex.description || ''
    }));
  }

  if (Array.isArray(jobApp.trainings)) {
    trainings.value = jobApp.trainings.map(t => ({
      key: Date.now() + Math.random(),
      organization: t.organization || '',
      course: t.course || '',
      institute: t.institute || '',
      duration: t.duration_days || t.duration || ''
    }));
  }

  if (Array.isArray(jobApp.awards)) {
    awards.value = jobApp.awards.map(a => ({
      key: Date.now() + Math.random(),
      organization: a.organization || '',
      name: a.name || '',
      nature: a.nature || '',
      year: a.year || ''
    }));
  }

  if (Array.isArray(jobApp.references)) {
    references.value = jobApp.references.map(r => ({
      key: Date.now() + Math.random(),
      seq: r.seq || null,
      name: r.name || '',
      organization: r.organization || '',
      position: r.position || '',
      email: r.email || '',
      phone: r.phone || ''
    }));
  }
}

function resetForm() {
  form.id = null;
  form.job_id = route.params.id ? Number(route.params.id) : null;
  form.firstName = '';
  form.gender = '';
  form.phoneNumber = '';
  form.email = '';
  form.dateOfBirth = null;
  form.fatherName = '';
  form.nationality = '';
  form.currentOrganization = '';
  form.totalEmoluments = '';
  form.aadhaarNumber = '';
  form.socialCategory = '';
  form.marital_status = '';
  form.correspondence = { address: '', city: '', state: '', country: '', pin: '', phone: '' };
  form.permanent = { address: '', city: '', state: '', country: '', pin: '', phone: '' };
  form.policeStation = '';
  form.files = { photo: null, signature: null, cv: null };
  form.expertise_text = '';
  form.declaration_name = '';
  form.declaration_noc_name = '';
  form.status = 'draft';
  form.attempt = 1;

  education.value = [
    { key: `r_${Math.random().toString(36).slice(2,9)}`, examination: 'Doctoral', degreeName: '', institute: '', year: '', subjects: '', grade: '' },
    { key: `r_${Math.random().toString(36).slice(2,9)}`, examination: "Master's", degreeName: '', institute: '', year: '', subjects: '', grade: '' }
  ];
  experiences.value = [{ key: Date.now(), organization: '', position: '', salary: '', from: '', to: '', description: '' }];
  trainings.value = [{ key: Date.now(), organization: '', course: '', institute: '', duration: '' }];
  awards.value = [{ key: Date.now(), organization: '', name: '', nature: '', year: '' }];
  references.value = [];
}

/* --------------- API: load job & draft --------------- */
async function loadJobAndDraft() {
  const jobId = route.params.id ? Number(route.params.id) : null;
  const draftId = route.query.draftId ? Number(route.query.draftId) : null;
  const applicantId = getApplicantIdFromStore();

  // set job_id on form for new application
  if (jobId) {
    form.job_id = jobId;
  }

  // Optional: fetch job metadata (title/code/advt) if you have endpoint
  try {
    if (jobId) {
         console.log("Calling URL:", axios.defaults.baseURL + `/api/jobs/${jobId}`);
        
      try {
        const jobRes = await axios.get(`/jobs/${jobId}`);
        const job = jobRes.data.data; 
        jobTitle.value = job.title;
        jobCode.value = job.code;
       jobAdvertNo.value = job.advt_no;
      } catch (e) {
        // ignore if endpoint not available
        jobTitle.value = jobTitle.value || '';
      }
    }
  } catch (err) {
    console.warn('job metadata load failed', err);
  }

  try {
    if (draftId) {
      // load directly by draftId
      const { data } = await axios.get(`/api/job-applications/${draftId}`);
      populateFormFromJobApp(data);
      return;
    }

    // if applicant logged in, attempt to find their draft for this job
    if (applicantId && jobId) {
      // backend route returns all applications for applicant; we filter in client
      const resp = await axios.get(`/api/job-applications/by-applicant/${applicantId}`);
      const drafts = Array.isArray(resp.data) ? resp.data : [];
      // prefer exact job draft with status draft
      const myDraft = drafts.find(d => Number(d.job_id) === Number(jobId) && (d.status === 'draft' || !d.status));
      if (myDraft) {
        // load full application (with children)
        const { data } = await axios.get(`/api/job-applications/${myDraft.id}`);
        populateFormFromJobApp(data);
        return;
      }
    }

    // no draft found — start fresh
    resetForm();
    // ensure job_id remains set
    form.job_id = jobId;
  } catch (err) {
    console.error('loadJobAndDraft error:', err);
    // keep fresh form as fallback
    resetForm();
  }
}

/* --------------- file handler --------------- */
function onFileChange(event, key) {
  const f = event.target.files?.[0];
  form.files[key] = f || null;
}

/* --------------- save draft (create/update) --------------- */
async function saveDraft() {
  // build payload — adjust fields as needed by backend
  const payload = {
    id: form.id,
    applicant_id: form.applicant_id,
    job_id: form.job_id,
    full_name: form.firstName,
    gender: form.gender,
    phone_number: form.phoneNumber,
    email: form.email,
    date_of_birth: form.dateOfBirth,
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
    expertise_text: form.expertise_text,
    declaration_name: form.declaration_name,
    declaration_noc_name: form.declaration_noc_name,
    status: 'draft',
    educations: education.value.map(e => ({
      exam: e.examination,
      degree_name: e.degreeName,
      institute: e.institute,
      year_month: e.year,
      subjects: e.subjects,
      grade: e.grade
    })),
    experiences: experiences.value.map(ex => ({
      organization: ex.organization,
      position: ex.position,
      salary: ex.salary,
      from_month: ex.from,
      to_month: ex.to,
      description: ex.description
    })),
    trainings: trainings.value.map(t => ({
      organization: t.organization,
      course: t.course,
      institute: t.institute,
      duration_days: t.duration
    })),
    awards: awards.value.map(a => ({
      organization: a.organization,
      name: a.name,
      nature: a.nature,
      year: a.year
    })),
    references: references.value.map(r => ({
      seq: r.seq,
      name: r.name,
      organization: r.organization,
      position: r.position,
      email: r.email,
      phone: r.phone
    }))
  };

  try {
    // If you send files, prefer a separate multipart upload endpoint and then save returned URLs here.
    const res = await axios.post('/api/job-applications/save', payload);
    if (res.data && res.data.job_application) {
      populateFormFromJobApp(res.data.job_application);
      alert('Draft saved');
    } else {
      alert('Saved (no response object)');
    }
  } catch (err) {
    console.error('saveDraft error', err);
    alert('Save failed: ' + (err.response?.data?.error || err.message));
  }
}

/* --------------- navigation helpers --------------- */
function goNext() {
  // example: go to education step of stepper; you already use stepper3.next() in template
  // if using programmatic stepper, call it here
  if (window.stepper3 && typeof window.stepper3.next === 'function') {
    window.stepper3.next();
  }
}

function logout() {
  // implement your logout logic
  localStorage.removeItem('applicant_id');
  router.push('/');
}

/* --------------- lifecycle: load on mount & when route changes --------------- */
onMounted(() => {
  loadJobAndDraft();
});

// reload when route param id changes or query draftId changes
watch(() => route.params.id, (newId, oldId) => {
  if (newId !== oldId) loadJobAndDraft();
});

watch(() => route.query.draftId, (newVal, oldVal) => {
  if (newVal !== oldVal) loadJobAndDraft();
});
</script>

<style scoped>
.form-control, .form-select, textarea.form-control {
  margin-bottom: 0.5rem;
}
</style>
