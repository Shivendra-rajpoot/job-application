<template>
    <div class="sidebar-wrapper" data-simplebar="true">
			<div class="sidebar-header">
				<div>
					<img src="/assets/images/logo-icon.png" class="logo-icon" alt="logo icon">
				</div>
				<div>
					<h4 class="logo-text">RCB Admin</h4>
				</div>
				<div class="toggle-icon ms-auto"><i class='bx bx-arrow-back'></i>
				</div>
			 </div>
			<!--navigation-->
			<ul class="metismenu" id="menu">
				
				<li>
					<router-link to="/admin/job">
						<div class="parent-icon"><i class='bx bx-bookmark-heart'></i>
						</div>
						<div class="menu-title">Job List</div>
					</router-link>
				</li>
				
				
				
				

				
				
				
				
				
				
				
				
			</ul>
			<!--end navigation-->
		</div>
</template>
<script setup>
defineProps({ collapsed: { type: Boolean, default: false } })
</script>