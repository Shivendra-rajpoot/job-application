<template>
  <div class="card">
    <div class="card-body">
      <nav class="navbar navbar-expand-lg navbar-dark rounded" style="background: #094280;">
        <div class="container-fluid">
          <a class="navbar-brand d-flex align-items-center" href="#" style="background:whitesmoke; padding:6px 10px; border-radius:4px;">
            <img src="/assets/images/logo-icon.png" alt="Logo" style="width: 200px;" class="img-fluid" />
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent2">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent2">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item"><a class="nav-link active" href="#"><i class="bi bi-briefcase-fill me-1"></i>Active Positions</a></li>
              <li class="nav-item"><a class="nav-link" href="#"><i class="bi bi-clipboard-check"></i>Previous Job Applications</a></li>
              <li class="nav-item"><a class="nav-link" href="#"><i class="bi bi-envelope"></i>Contact</a></li>
            </ul>
            <form class="d-flex">
              <button class="btn btn-light px-4" type="submit"><i class="fadeIn animated bx bx-log-out"></i> Log-out</button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>
<script setup></script>
<style scoped></style>
