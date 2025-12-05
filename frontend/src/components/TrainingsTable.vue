<template>
  <div>
    <h5 class="mb-1">Trainings Undergone</h5>
    <div class="card shadow-sm">
      <div class="card-body p-2 card-body-wide">
        <div class="table-responsive">
          <table class="table table-hover mb-0 align-middle">
            <thead class="table-light">
              <tr>
                <th>S.No.</th>
                <th>Organization</th>
                <th>Name of the Course</th>
                <th>Institute</th>
                <th>Duration(In days)</th>
                <th class="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(row, index) in trainings" :key="row.key">
                <td>{{ index + 1 }}</td>
                <td><input type="text" class="form-control form-control-sm" v-model="row.organization" placeholder="Organization name" /></td>
                <td><input type="text" class="form-control form-control-sm" v-model="row.course" placeholder="Name of the Course" /></td>
                <td><input type="text" class="form-control form-control-sm" v-model="row.institute" placeholder="Institute" /></td>
                <td><input type="text" class="form-control form-control-sm" v-model="row.duration" placeholder="Duration" /></td>
                <td class="text-center"><button class="btn btn-outline-danger btn-sm" @click="deleteRowTrainings(index)" title="Delete Row"><i class="bi bi-trash"></i></button></td>
              </tr>
            </tbody>
          </table>

          <div class="mt-3 text-end">
            <button class="btn btn-primary btn-sm" @click="addRowTrainings"><i class="bi bi-plus-circle"></i> Add Row</button>
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
const props = defineProps({ trainings: { type: Array, required: true } })
const emit = defineEmits(['save-draft', 'add-row', 'delete-row'])
function addRowTrainings() { emit('add-row') }
function deleteRowTrainings(i) { emit('delete-row', i) }
</script>

<style scoped>
.form-control, .form-select, textarea.form-control { margin-bottom: .5rem; }
</style>
