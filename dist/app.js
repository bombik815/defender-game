// eslint-disable-next-line import/extensions
import 'core-js/modules/es.array.filter.js';
// eslint-disable-next-line import/extensions
import 'core-js/modules/es.object.to-string.js';

const characters = [
  {
    name: 'мечник',
    health: 10,
  },
  {
    name: 'маг',
    health: 100,
  },
  {
    name: 'маг',
    health: 0,
  },
  {
    name: 'лучник',
    health: 0,
  }];

// eslint-disable-next-line no-unused-vars
const alive = characters.filter((item) => item.health > 0);
