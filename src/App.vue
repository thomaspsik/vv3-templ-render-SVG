<script setup>
// import { RouterLink } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import ControllView from '@/views/ControllView.vue';
import DataView from '@/views/DataView.vue';
</script>

<template>
  <div class="container text-center">
    <nav class="my-4">
      <!-- <RouterLink to="/" class="nav-link">Home </RouterLink>
      <RouterLink to="/about" class="nav-link"> About </RouterLink> -->
    </nav>
    <div class="row justify-content-center">
      <div class="col-8"><HomeView></HomeView></div>
      <div class="col-4"><ControllView></ControllView></div>
    </div>
    <div class="row">
      <div class="col">
        <DataView></DataView>
      </div>
    </div>
  </div>
</template>

<style scoped>
a.nav-link {
  display: inline;
  color: black;
  border: white;
}
a.router-link-active {
  border: #3fb984 3px solid;
  color: black;
}
</style>
