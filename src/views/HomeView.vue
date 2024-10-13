<script setup>
import { useRenderStore } from '../stores/renderStore.js';

const render = useRenderStore();
render.init();
</script>

<template>
  <div class="row items-center q-mt-md">
    <h1 class="col-12">Render Template</h1>
    <svg class="col-12 render-area" viewBox="-500 -500 1000 1000">
      <circle :cx="0" :cy="0" :r="render.world.size" class="demo"></circle>
    </svg>
  </div>
</template>

<style>
.render-area {
  height: 70vh;
}
.demo {
  fill: blueviolet;
}
</style>
