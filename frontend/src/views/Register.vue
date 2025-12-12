<template>
   <div class="wrapper">
      <div class="section-authentication-cover">
         <div class="row g-0">
            <!-- Left Image Section -->
            <div class="col-12 col-xl-7 col-xxl-8 d-none d-xl-flex auth-cover-left align-items-center justify-content-center">
               <div class="card shadow-none bg-transparent rounded-0 mb-0">
                  <div class="card-body text-center">
                     <img
                        src="/assets/images/login-images/register-cover.svg"
                        class="img-fluid"
                        width="550"
                        alt="register cover"
                        />
                  </div>
               </div>
            </div>
            <!-- Right Form Section -->
            <div class="col-12 col-xl-5 col-xxl-4 auth-cover-right align-items-center justify-content-center">
               <div class="card rounded-0 m-3 shadow-none bg-transparent mb-0">
                  <div class="card-body p-sm-5">
                     <div class="text-center mb-3">
                        <img style="width: 175px;" src="/assets/images/logo-icon.png" alt="Logo" />
                     </div>
                     <div class="text-center mb-4">
                        <h5>Welcome to RCB Online Job Portal</h5>
                        <p class="mb-0">Please fill the below details to create your account</p>
                         <p v-if="message" 
   class="mt-3 text-center"
   :class="messageType === 'success' ? 'text-success' : 'text-danger'">
   {{ message }}
</p>
                     </div>
                     <!-- REGISTER FORM -->
                     <form class="row g-3" @submit="registerUser">
                        <!-- FULL NAME -->
                        <div class="col-12">
                           <label class="form-label">Full Name</label>
                           <input
                              v-model="full_name"
                              type="text"
                              class="form-control"
                              placeholder="Full Name"
                              />
                           <p v-if="errors.full_name" class="error-text">{{ errors.full_name }}</p>
                        </div>
                        <!-- EMAIL -->
                        <div class="col-12">
                           <label class="form-label">Email ID</label>
                           <input
                              v-model="email"
                              type="email"
                              class="form-control"
                              placeholder="example@user.com"
                              />
                           <p v-if="errors.email" class="error-text">{{ errors.email }}</p>
                        </div>
                        <!-- PASSWORD -->
                        <div class="col-12">
                           <label class="form-label">Password</label>
                           <div class="input-group">
                              <input
                                 v-model="password"
                                 type="password"
                                 class="form-control border-end-0 password-field"
                                 placeholder="Enter Password"
                                 />
                              <span class="input-group-text bg-transparent" @click="togglePassword">
                              <i :class="passwordVisible ? 'bx bx-show' : 'bx bx-hide'"></i>
                              </span>
                           </div>
                           <p v-if="errors.password" class="error-text">{{ errors.password }}</p>
                        </div>
                        <!-- CONFIRM PASSWORD -->
                        <div class="col-12">
                           <label class="form-label">Confirm Password</label>
                           <div class="input-group">
                              <input
                                 v-model="confirm_password"
                                 type="password"
                                 class="form-control border-end-0 password-field"
                                 placeholder="Enter Confirm Password"
                                 />
                              <span class="input-group-text bg-transparent" @click="togglePassword">
                              <i :class="passwordVisible ? 'bx bx-show' : 'bx bx-hide'"></i>
                              </span>
                           </div>
                           <p v-if="errors.confirm_password" class="error-text">
                              {{ errors.confirm_password }}
                           </p>
                        </div>
                        <!-- SUBMIT -->
                        <div class="col-12">
                           <div class="d-grid">
                              <button type="submit" class="btn btn-primary">Sign up</button>
                           </div>
                        </div>
                        <div class="col-12 text-center">
                           <p class="mb-0">
                              Already have an account?
                              <router-link to="/login">Sign in here</router-link>
                           </p>
                        </div>
                     </form>
                   
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>
<script setup>
   import { ref, reactive } from "vue";
   import axios from '@/axios'
   // FORM FIELDS
   const full_name = ref("");
   const email = ref("");
   const password = ref("");
   const confirm_password = ref("");
   
   // ERRORS
   const errors = reactive({
     full_name: "",
     email: "",
     password: "",
     confirm_password: "",
   });
   
   // SUCCESS MESSAGE
   const message = ref("");
const messageType = ref("");
   
   // PASSWORD VISIBILITY
   const passwordVisible = ref(false);
   const togglePassword = () => {
     passwordVisible.value = !passwordVisible.value;
   
     const inputs = document.querySelectorAll(".password-field");
     inputs.forEach((input) => {
       input.type = passwordVisible.value ? "text" : "password";
     });
   };
   
   // CLEAR ERRORS
   function clearErrors() {
     Object.keys(errors).forEach((k) => (errors[k] = ""));
   }
   
   // VALIDATION
   function validateRegister() {
     clearErrors();
     let valid = true;
   
     if (!full_name.value.trim()) {
       errors.full_name = "Please enter your full name";
       valid = false;
     }
   
     const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
     if (!email.value || !emailRe.test(email.value.trim())) {
       errors.email = "Please enter a valid email address";
       valid = false;
     }
   
     if (!password.value) {
       errors.password = "Please enter your password";
       valid = false;
     }
   
     if (!confirm_password.value) {
       errors.confirm_password = "Please enter confirm password";
       valid = false;
     }
   
     if (password.value !== confirm_password.value) {
       errors.confirm_password = "Passwords do not match!";
       valid = false;
     }
   
     return valid;
   }
   
   // REGISTER USER
 const registerUser = async (e) => {
  e.preventDefault();

  if (!validateRegister()) return;

  try {
    const res = await axios.post(`register`, {
      full_name: full_name.value,
      email_id: email.value,
      password: password.value,
      confirm_password: confirm_password.value
    });

     message.value = res.data.message;
  messageType.value = "success";
  } catch (err) {
   message.value =
      "Registration failed: " + (err.response?.data?.message || err.message);
  messageType.value = "error";
  }
};
   
</script>
<style>
   .error-text {
   color: red;
   font-size: 13px;
   }
</style>