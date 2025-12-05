<template>
  <div>
    <h5 class="mb-1 required-label">Declaration</h5>
    <div class="row g-3">
      <div class="col-12 col-lg-12">
        I
        <input type="text" class="form-control-sm required-label d-inline-block ms-2 me-2" v-model="declarantName" required />
        hereby declare that the information furnished above is true, complete and correct to the best of my knowledge and belief. I understand that in the event of my information being found false or incorrect at any stage, my candidature/ appointment shall be liable to cancellation / termination without notice or any compensation in lieu thereof. I have read the terms & conditions related to the position applied for and I will abide by them.
        <br />
        <hr />
        <p>(only for candidates serving in Government / PSUs / Autonomous institutions)</p>
        <br />
        I
        <input type="text" v-model="parentOrgName" class="form-control-sm required-label d-inline-block ms-2 me-2" required />
        hereby declare that I have informed my parent organisation regarding my application and the copy of this application will be forwarded by my parent organisation in due course of time and/or I will produce a NOC from my parent office, if my candidature is considered for being called for interview.
        <br />
      </div>

      <div class="d-flex justify-content-between align-items-center mt-3">
        <div>
          <button class="btn btn-primary me-2" type="button" onclick="stepper3.previous()"><i class="bx bx-left-arrow-alt me-2"></i>Previous</button>
          <button class="btn btn-success px-4" type="button" @click="onPreviewClick">Perview</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineEmits } from 'vue'
const emit = defineEmits(['save-draft', 'preview'])
const declarantName = ref('')
const parentOrgName = ref('N/A')
function onPreviewClick() { emit('save-draft'); emit('preview', { declarantName: declarantName.value, parentOrgName: parentOrgName.value }) }
</script>

<style scoped>
.form-control-sm { display:inline-block; width:auto; vertical-align:middle; }
.required-label { font-weight:600; }
</style>
