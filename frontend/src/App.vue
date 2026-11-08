<script setup>
import AppHeader from './components/AppHeader.vue'
</script>

<template>
  <div class="app-container">
    <AppHeader />
    <router-view />
  </div>
</template>

<style scoped>
.app-container {
  max-width: 800px;
  margin: 0 auto;
  font-family: sans-serif;
}
.form-group {
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
}
.form-group input, .form-group textarea {
  margin-top: 5px;
  padding: 8px;
  width: 100%;
  max-width: 400px;
}
</style>