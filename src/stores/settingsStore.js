// ------ setup version -------
import { defineStore } from 'pinia';
import { reactive } from 'vue';


// a specific settingsStore to define and be able to render
// range inputs for generic settings.
// implemented via Proxy 

const handler = {
  get(target, key) {
    // console.log(`GET ${String(key)}`);
    const found = target.find((e) => e.label == key); // check if property is in the list of property array
    if (found) {
      return Number(found.value);
    }
    // fallback
    return Reflect.get(...arguments);
  },

  set(target, key, value) {
    // console.log(`SET ${String(key)} = ${value}`);
    const found = target.find((e) => e.label == key); // check if property is in the list of property array
    if (found) {
      found.value = Number(value);
      return value;
    } 
    // fallback
    return Reflect.get(...arguments);
  },
};

export const useSettingsStore = defineStore(
  'settingsStore',
  () => {
    const settingsRaw = reactive([
      { label: 'delay', value: 20, min: 1, max: 1000 }, // timeout for timer ... 1/render speed
      { label: 'minSize', value: 20, min: 5, max: 80 }, // minSize for the value size - as demo
      { label: 'maxSize', value: 40, min: 20, max: 200 }, // maxSize for the value size - as demo
    ]);
    const settings = new Proxy(settingsRaw, handler);

    return { settings };
  },
  { persist: true }, // store Settings in localStorage
);

// ------ option version -------
// import { defineStore } from 'pinia';
//
// export const useMyStore = defineStore('myStore', {
//   state: () => ({ message: 'Viel Erfolg!' }),
//   getters: {},
//   actions: {},
// });
