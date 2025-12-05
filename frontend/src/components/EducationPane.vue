<template>
  <div>
    <div class="d-flex align-items-center justify-content-between mb-3">
      <div>
        <h5 class="mb-1">Your Education Information</h5>
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
                <td>
                  <select class="form-select form-select-sm" v-model="row.examination" required disabled>
                    <option>Doctoral</option>
                    <option>Master's</option>
                    <option>Bachelor's</option>
                    <option>Senior Secondary</option>
                    <option>Secondary</option>
                    <option>Any Other</option>
                  </select>
                </td>
                <td><input type="text" class="form-control form-control-sm" v-model="row.degreeName" placeholder="Degree / Certificate" required /></td>
                <td><input type="text" class="form-control form-control-sm" v-model="row.institute" placeholder="University / Institute / Board" required /></td>
                <td><input type="month" class="form-control form-control-sm" v-model="row.year" :max="maxMonth" required /></td>
                <td><input type="text" class="form-control form-control-sm" v-model="row.subjects" placeholder="Subjects / Specialization" required /></td>
                <td><input type="text" class="form-control form-control-sm" v-model="row.grade" placeholder="Percentage / Grade / CGPA" required /></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="d-flex justify-content-between align-items-center mt-3">
          <div>
            <button class="btn btn-primary me-2" type="button" onclick="stepper3.previous()"><i class="bx bx-left-arrow-alt me-2"></i>Previous</button>
            <button class="btn btn-secondary me-2" type="button" @click="saveDraft">Save Draft</button>
            <button class="btn btn-primary" type="button" onclick="stepper3.next()">Next <i class="bx bx-right-arrow-alt ms-2"></i></button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
const props = defineProps({
  education: { type: Array, required: true },
  maxMonth: { type: String, required: true }
})
function saveDraft() { // bubble up using custom event replaced by parent method binding
  // nothing here; parent will handle via @click on Save Draft button in the parent view if needed
  // but keep method to allow future emits
}
</script>

<style scoped>
.form-control, .form-select, textarea.form-control { margin-bottom: .5rem; }
</style>
