<template>
  <div class="wrapper">
    <div class="section-authentication-cover">
      <div class="row g-0">
        <!-- Left Image Section -->
        <div class="col-12 col-xl-7 col-xxl-8 d-none d-xl-flex auth-cover-left align-items-center justify-content-center">
          <div class="card shadow-none bg-transparent rounded-0 mb-0">
            <div class="card-body text-center">
              <img src="/assets/images/login-images/register-cover.svg" class="img-fluid" width="550" alt="register cover" />
            </div>
          </div>
        </div>

        <!-- Right Form Section -->
        <div class="col-12 col-xl-5 col-xxl-4 auth-cover-right align-items-center justify-content-center">
          <div class="card rounded-0 m-3 shadow-none bg-transparent mb-0">
            <div class="card-body p-sm-5">
              <div class="text-center mb-3">
                <img style="width: 175px;" src="/assets/images/logo-icon.png" width="60" alt="Logo" />
              </div>
              <div class="text-center mb-4">
                <h5>Welcome to RCB Online Job Portal</h5>
                <p class="mb-0">Please fill the below details to create your account</p>
              </div>

              <!-- REGISTER FORM -->
              <form @submit.prevent="registerUser" class="row g-3">
                <div class="col-12">
                  <label class="form-label">Full Name</label>
                  <input v-model="name" type="text" class="form-control" placeholder="Full Name" required />
                </div>

                <div class="col-12">
                  <label class="form-label">Email ID</label>
                  <input v-model="email" type="email" class="form-control" placeholder="example@user.com" required />
                </div>

                <div class="col-12">
                  <label class="form-label">Password</label>
                  <div class="input-group" id="show_hide_password">
                    <input v-model="password" type="password" class="form-control border-end-0" placeholder="Enter Password" required />
                    <a href="javascript:;" class="input-group-text bg-transparent" @click="togglePassword">
                      <i :class="passwordVisible ? 'bx bx-show' : 'bx bx-hide'"></i>
                    </a>
                  </div>
                </div>
                 <div class="col-12">
                  <label class="form-label">Confirm Password</label>
                  <div class="input-group" id="show_hide_password">
                    <input v-model="confirm_password" type="password" class="form-control border-end-0" placeholder="Enter Confirm Password" required />
                    <a href="javascript:;" class="input-group-text bg-transparent" @click="togglePassword">
                      <i :class="passwordVisible ? 'bx bx-show' : 'bx bx-hide'"></i>
                    </a>
                  </div>
                </div>

               

                

                <div class="col-12">
                  <div class="d-grid">
                    <button type="submit" class="btn btn-primary">Sign up</button>
                  </div>
                </div>

                <div class="col-12 text-center">
                  <p class="mb-0">Already have an account? <router-link to="/login">Sign in here</router-link></p>
                </div>
              </form>

              <p v-if="message" class="mt-3 text-center text-success">{{ message }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"

const name = ref("")
const email = ref("")
const password = ref("")
const country = ref("India")
const agree = ref(false)
const message = ref("")
const passwordVisible = ref(false)

const togglePassword = () => {
  passwordVisible.value = !passwordVisible.value
  const input = document.querySelector("#show_hide_password input")
  input.type = passwordVisible.value ? "text" : "password"
}

const registerUser = async () => {
 

  try {
    const res = await fetch("http://localhost:5000/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name.value,
        email: email.value,
        password: password.value,
        confirm_password: confirm_password.value,
      }),
    })
    const data = await res.json()
    message.value = data.message
  } catch (err) {
    message.value = "Registration failed: " + err.message
  }
}
</script>

