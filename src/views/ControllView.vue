<template>
  <div>
    <h5>Controll</h5>
    <button @click="rstore.start()" :disabled="rstore.isStarted()">Start</button>
    <button @click="rstore.stop()" :disabled="!rstore.isStarted()">Pause</button>
    <button @click="rstore.tick()" :disabled="rstore.isStarted()">Manual Tick</button>

    <button @click="rstore.init()">Reset</button>
    <div v-for="s of sstore.settings" :key="s.label">
      {{ s.label }}:
      <input type="range" v-model="s.value" :min="s.min" :max="s.max" />
    </div>

    <!-- <div class="row">
      <div class="col-12" v-for="(f, idx) of fstore.flocks" :key="idx">
        Flock {{ idx }}:
        <button @click="f.add()">Add</button>
      </div>
    </div> -->
  </div>
</template>

<script setup>
import { useSettingsStore } from '../stores/settingsStore.js';
import { useRenderStore } from '../stores/renderStore.js';

const sstore = useSettingsStore();
const rstore = useRenderStore();
</script>

<style lang="scss" scoped></style>
