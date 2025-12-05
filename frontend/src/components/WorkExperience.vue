<template>
  <div>
    <h5 class="mb-1">Work Experience</h5>
    <div class="card shadow-sm">
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
                <td><input type="text" class="form-control form-control-sm" v-model="row.organization" placeholder="Organization name" /></td>
                <td><input type="text" class="form-control form-control-sm" v-model="row.position" placeholder="Position / Role" /></td>
                <td><input type="text" class="form-control form-control-sm" v-model="row.salary" placeholder="Pay Level / Salary" /></td>
                <td><input type="month" class="form-control form-control-sm" v-model="row.from" /></td>
                <td><input type="month" class="form-control form-control-sm" v-model="row.to" /></td>
                <td><textarea class="form-control form-control-sm" v-model="row.description" rows="2" placeholder="Brief description of work handled"></textarea></td>
                <td class="text-center">
                  <button class="btn btn-outline-danger btn-sm" @click="deleteRowWorkExperience(index)" v-if="experiences.length > 1"><i class="bi bi-trash-fill"></i></button>
                </td>
              </tr>
            </tbody>
          </table>

          <div class="mt-3 text-end">
            <button class="btn btn-primary btn-sm" @click="addRowWorkExperience"><i class="bi bi-plus-circle"></i> Add Row</button>
          </div>
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
import { defineProps, defineEmits } from 'vue'
const props = defineProps({ experiences: { type: Array, required: true } })
const emit = defineEmits(['save-draft', 'add-row', 'delete-row'])
function addRowWorkExperience() { emit('add-row') }
function deleteRowWorkExperience(i) { emit('delete-row', i) }
</script>

<style scoped>
.form-control, .form-select, textarea.form-control { margin-bottom: .5rem; }
.card-body-wide { padding: .5rem; }
</style>
