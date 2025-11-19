// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import AuthLayout from '@/layouts/AuthLayout.vue'

import Job from '@/views/admin/job.vue'
import login from '@/views/admin/login.vue'
import createJob from '@/views/admin/createJob.vue'
import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'
import ForgotPassword from '@/views/ForgotPassword.vue'

//import Jobform from '@/views/Jobform-1_copy.vue'
import ActiveJob from '@/views/ActiveJob.vue'

import Applyform from '@/views/Applyform.vue'

const routes = [
  // Admin area (with header + sidebar + footer)
  {
    path: '/admin',
    component: DefaultLayout,
    children: [
      { path: 'job', name: 'Job', component: Job },
    ],
  },
  {
    path: '/admin',
    component: DefaultLayout,
    children: [
      { path: 'job/create', name: 'createJob', component: createJob },
    ],
  },

  {
    path: '/admin',
   
     children: [
      { path: 'login', name: 'login', component: login },
    ],
  },

  // Auth area (no header/sidebar/footer)
  {
    path: '/login',
    component: AuthLayout,
    children: [{ path: '', name: 'Login', component: Login }],
  },
   {
    path: '/activejob',
    component: AuthLayout,
    children: [{ path: '', name: 'ActiveJob', component: ActiveJob }],
  },
  {
    path: '/register',
    component: AuthLayout,
    children: [{ path: '', name: 'Register', component: Register }],
  },
  {
    path: '/forgot-password',
    component: AuthLayout,
    children: [{ path: '', name: 'ForgotPassword', component: ForgotPassword }],
  },
 {
   path: '/job-form/:id',
  name: 'Applyform',
  component: Applyform
 },
 



  // Redirects
  { path: '/', redirect: '/login' },
  { path: '/:pathMatch(.*)*', redirect: '/login' },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
