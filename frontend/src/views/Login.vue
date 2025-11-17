<template>
  <div class="wrapper">
    <div class="section-authentication-cover">
      <div class="row g-0">

        <!-- Left Image -->
        <div class="col-12 col-xl-7 col-xxl-8 d-none d-xl-flex auth-cover-left align-items-center justify-content-center">
          <div class="card shadow-none bg-transparent rounded-0 mb-0">
            <div class="card-body text-center">
              <img src="/assets/images/login-images/register-cover.svg" class="img-fluid" width="550" alt="register cover" />
            </div>
          </div>
        </div>

        <!-- Right Login Form -->
        <div class="col-12 col-xl-5 col-xxl-4 auth-cover-right align-items-center justify-content-center">
          <div class="card rounded-0 m-3 shadow-none bg-transparent mb-0">
            <div class="card-body p-sm-5">
              <div class="text-center mb-3">
                <img style="width: 175px;" src="/assets/images/logo-icon.png" alt="Logo" />
              </div>

              <div class="text-center mb-4">
                <h5>Welcome to RCB Online Job Portal</h5>
                <p class="mb-0">Please fill the below details to login your account</p>
              </div>
                <p v-if="message" class="mt-3 text-center" :class="isError ? 'text-danger' : 'text-success'">
                {{ message }}
              </p>
              <!-- LOGIN FORM -->
              <form @submit.prevent="loginUser" class="row g-3">

                <div class="col-12">
                  <label class="form-label required-label">Email ID</label>
                  <input
                    v-model="email_id"
                    type="email"
                    class="form-control"
                    placeholder="example@user.com"
                    required
                  />
                </div>

                <div class="col-12">
                  <label class="form-label required-label">Password</label>
                  <div class="input-group">
                    <input
                      :type="passwordVisible ? 'text' : 'password'"
                      v-model="password"
                      class="form-control border-end-0"
                      placeholder="Enter Password"
                      required
                    />
                    <a href="javascript:;" class="input-group-text bg-transparent" @click="togglePassword">
                      <i :class="passwordVisible ? 'bx bx-show' : 'bx bx-hide'"></i>
                    </a>
                  </div>
                </div>

                <div class="col-12">
                  <div class="d-grid">
                    <button type="submit" class="btn btn-primary">Login</button>
                  </div>
                </div>

                <div class="col-12 text-end">
                  <p class="mb-0"><router-link to="/forgot-password">Forgot Your Password?</router-link></p>
                </div>

                <div class="col-12 text-center">
                  <p class="mb-0">Don't have an account yet? <router-link to="/register">Sign up here</router-link></p>
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
import api from "@/axios";
import { ref } from "vue"

// form fields
const email_id = ref("")
const password = ref("")

// helpers
const passwordVisible = ref(false)
const message = ref("")
const isError = ref(false)

// toggle password visibility
const togglePassword = () => {
  passwordVisible.value = !passwordVisible.value
}

// login submit
const loginUser = async () => {
  message.value = "Please wait..."
  isError.value = false

  try {
    const res = await api.post("/login", {
      email_id: email_id.value,
      password: password.value,
    })
   

   
    const data = res.data  

     localStorage.setItem("token", data.token);

    message.value = "Login successful!"

  
  

  } catch (error) {
    isError.value = true

    // Axios provides server error message here:
    if (error.response) {
      message.value = error.response.data.message || "Login failed"
    } else {
      message.value = "Network error: " + error.message
    }
  }
}

</script>
