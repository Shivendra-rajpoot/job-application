<template>
  <div>
    <h5 class="mb-1">Awards & Honors</h5>
    <div class="card shadow-sm">
      <div class="card-body p-2 card-body-wide">
        <div class="table-responsive">
          <table class="table table-hover mb-0 align-middle">
            <thead class="table-light">
              <tr>
                <th>Awarding Organization</th>
                <th>Name of the Award</th>
                <th>Nature of the Award</th>
                <th>Year</th>
                <th class="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(award, index) in awards" :key="award.key">
                <td><input v-model="award.organization" type="text" class="form-control form-control-sm" placeholder="Organization name" /></td>
                <td><input v-model="award.name" type="text" class="form-control form-control-sm" placeholder="Name of the Award" /></td>
                <td><input v-model="award.nature" type="text" class="form-control form-control-sm" placeholder="Nature of the Award" /></td>
                <td><input v-model="award.year" type="text" class="form-control form-control-sm" placeholder="Year" /></td>
                <td class="text-center"><button type="button" class="btn btn-sm btn-outline-danger" @click="deleteRowAwards(index)" v-if="awards.length > 1"><i class="bx bx-trash"></i></button></td>
              </tr>
            </tbody>
          </table>

          <div class="mt-3 text-end">
            <button class="btn btn-primary btn-sm" @click="addRowAwards" type="button"><i class="bi bi-plus-circle"></i> Add Row</button>
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
const props = defineProps({ awards: { type: Array, required: true } })
const emit = defineEmits(['save-draft', 'add-row', 'delete-row'])
function addRowAwards() { emit('add-row') }
function deleteRowAwards(i) { emit('delete-row', i) }
</script>

<style scoped>
.form-control, .form-select, textarea.form-control { margin-bottom: .5rem; }
</style>
