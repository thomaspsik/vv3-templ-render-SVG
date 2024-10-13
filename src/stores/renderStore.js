// ------ setup version -------
import { defineStore } from 'pinia';
import { ref, watch } from 'vue';
import { World } from '../simulation/demo.js';
import { useSettingsStore } from './settingsStore.js';

// store used to hold the render data and the simulation object "World"
export const useRenderStore = defineStore('renderStore', () => {
  let world = ref({});

  const timer = ref(0);
  const usedDelay = 0;
  const fstore = useSettingsStore();

  function init() {
    world.value = new World(); // create new World objectv
    this.usedDelay = fstore.delay;
    watch(fstore.settings, () => {
      // detect delay changed:
      if (!this.isStarted()) {
        return;
      }
      if (this.usedDelay != fstore.settings.delay) {
        this.stop(); // restart timer with new delay
        this.start();
      }
    });
  }

  function tick() {
    world.value.tick(); // make world tick
  }

  function start() {
    if (timer.value > 0) {
      return; // dont start again
    }
    // store delay to detect if it has been changed
    this.usedDelay = fstore.settings.delay;
    timer.value = window.setInterval(tick, this.usedDelay);
  }

  function stop() {
    window.clearInterval(timer.value);
    timer.value = 0;
  }

  function isStarted() {
    return timer.value > 0;
  }

  return { init, tick, start, stop, isStarted, world };
});
