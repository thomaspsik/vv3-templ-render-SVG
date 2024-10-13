<template>
  <div>
    <h5>Data View</h5>
    <div class="row">
      <div class="col">
        <div>
          Settings:
          <div v-for="s of sstore.settings" :key="s.label">{{ s.label }}: {{ s.value }}</div>
        </div>
      </div>
      <div class="col">
        <div>
          World:
          <div>Size: {{ rstore.world.size }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useSettingsStore } from '../stores/settingsStore.js';
import { useRenderStore} from '../stores/renderStore.js';

const sstore = useSettingsStore();
const rstore = useRenderStore();
</script>

<style lang="scss" scoped></style>
