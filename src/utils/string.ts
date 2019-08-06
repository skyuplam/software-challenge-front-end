import { kebabCase, capitalize, split } from 'lodash';

// Check provided number string is a valid number
export const isNan = (num?: string) =>
  num && Number.isNaN(parseFloat(num));

// Convert obejct key to a space-splited words.
// e.g. `helloWorld` => `Hello World`
export const keyToName = (key: string) =>
  split(kebabCase(key), '-').map(capitalize).join(' ');
