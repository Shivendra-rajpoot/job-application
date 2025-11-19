<template>
  <div>

    <!-- NAVIGATION CARD -->
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
                <button class="btn btn-light px-4" type="submit">
                  <i class="fadeIn animated bx bx-log-out"></i> Log-out
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div>
    </div>

    <!-- PAGE CONTENT -->
    <div class="page-content" style="padding-bottom: 80px;"> <!-- padding so footer doesn't overlap -->
      <div class="row">
        <div class="col-xl-9 mx-auto">

          <h6 class="mb-0 text-uppercase text-center">Active Jobs</h6>
          <hr />

          <div class="card">
            <div class="card-body">
               <table class="table table-bordered mb-0">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                     <th scope="col">Position</th>
                    <th scope="col">Advertisement No.</th>
                    <th scope="col">Job Code</th>
                    <th scope="col">View Advertisement</th>
                    
                   
                    <th scope="col">Last Date</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
               <tbody>
      <tr v-for="(job, index) in jobs" :key="job.id">
        <td>{{ index + 1 }}</td>
          <td>{{ job.title }}</td>
        <td>{{ job.advt_no }}</td>
          <td>{{ job.code }}</td>
        <td>
          <a :href="job.advt_file" target="_blank"><i class="bi bi-file-earmark-pdf text-danger fs-4" title="View"></i></a>
        </td>
      
      
        <td>{{ formatDate(job.to_date) }}</td>
        <td><router-link
  :to="{ name: 'Applyform', params: { id: job.id } }"
  class="btn btn-primary btn-sm"
>
  Apply
</router-link>
</td>
      </tr>
    </tbody>
              </table> 
              
            </div>
          </div>

        </div>
      </div>
    </div>

  </div>

  <!-- ✅ FULL WIDTH FIXED FOOTER (Must be outside main div) -->
  <footer class="page-footer fixed-bottom text-center py-3"
          style="background:#094280; color:white; width:100%; left:0; padding-left:30px; padding-right:30px;">
    <p class="mb-0">Copyright © 2023. All rights reserved.</p>
  </footer>

</template>
<script setup>
import { ref, onMounted } from "vue";
import api from "@/axios";

const formatDate = (dateStr) => {
  if (!dateStr) return "";
  const date = new Date(dateStr);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
};

const jobs = ref([]);

const loadJobs = async () => {
  try {
    const res = await api.get("/jobs/active");
    jobs.value = res.data.data;
    console.log(res.data.data)
  } catch (error) {
    console.error("Failed to load jobs", error);
  }
};

onMounted(() => {
  loadJobs();
});
</script>

