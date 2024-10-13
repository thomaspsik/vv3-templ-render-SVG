import { useSettingsStore } from '../stores/settingsStore';
let fstore;
// const MAX_SIZE = 40;
// const MIN_SIZE = 20;

export class World {
  size; // value for demo
  dSize; // difference for size - can be 1 or -1

  constructor() {
    this.size = 20; // acceleration
    this.dSize = 1; // start with growing

    fstore = useSettingsStore(); // initialise settings store here to avoid circular initialisation.
  }

  tick() {
    const { minSize, maxSize } = fstore.settings; // get min and max from settings
    this.size += this.dSize;
    // console.log(`tick: ${this.size}`);
    
    if (this.size > maxSize) {
      this.size = maxSize;
      this.dSize = -1; // shrink again
    } else if (this.size < minSize) {
      this.size = minSize;
      this.dSize = 1; // grow again
    }
  }
}
