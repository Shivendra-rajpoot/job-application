<template>
  <div>
    <h5 class="mb-1">Expertise related to the position applied</h5>
    <div class="row g-3">
      <div class="col-12 col-lg-12">
        <label for="expertise-related" class="form-label required-label">Expertise related to the position applied</label>
        <textarea class="form-control" id="expertise-related" rows="4" cols="150" v-model="text" placeholder="Max. 500 words & Please don't use any special characters" required></textarea>
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
</template>

<script setup>
import { ref, defineProps, watch } from 'vue'
const props = defineProps({ expertise: { type: String, default: '' } })
const text = ref(props.expertise)
watch(() => props.expertise, v => text.value = v)
</script>

<style scoped>
.form-control, .form-select, textarea.form-control { margin-bottom: .5rem; }
</style>
