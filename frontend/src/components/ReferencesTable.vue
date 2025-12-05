<template>
  <div>
    <h5 class="mb-1">References</h5>
    <div class="card shadow-sm">
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
              <tr v-for="(r, idx) in referenceRows" :key="idx">
                <td>{{ idx + 1 }}</td>
                <td><input type="text" class="form-control form-control-sm" placeholder="name" v-model="r.name" /></td>
                <td><input type="text" class="form-control form-control-sm" placeholder="Organization" v-model="r.organization" /></td>
                <td><input type="text" class="form-control form-control-sm" placeholder="Position" v-model="r.position" /></td>
                <td><input type="text" class="form-control form-control-sm" placeholder="Email ID" v-model="r.email" /></td>
                <td><input type="text" class="form-control form-control-sm" placeholder="Phone Number" v-model="r.phone" /></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="d-flex justify-content-between align-items-center mt-3">
          <div>
            <button class="btn btn-primary me-2" type="button" onclick="stepper3.previous()"><i class="bx bx-left-arrow-alt me-2"></i>Previous</button>
            <button class="btn btn-secondary me-2" type="button" @click="$emit('save-draft')">Save Draft</button>
            <button class="btn btn-primary" type="button" onclick="stepper3.next()">Next <i class="bx bx-right-arrow-alt ms-2"></i></button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, defineEmits } from 'vue'
const emit = defineEmits(['save-draft'])
const referenceRows = reactive([
  { name: '', organization: '', position: '', email: '', phone: '' },
  { name: '', organization: '', position: '', email: '', phone: '' },
  { name: '', organization: '', position: '', email: '', phone: '' }
])
</script>

<style scoped>
.form-control, .form-select, textarea.form-control { margin-bottom: .5rem; }
</style>
