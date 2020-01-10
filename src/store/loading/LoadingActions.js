export const REQUEST = 'REQUEST';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE'; // todo - global handler?
export const RESET = 'RESET';

/**
 * Resets the loading reducer to its initial state
 * @param {string} scope - Path to confine action
 * @return {Action}
 */
export const resetData = scope => ({
  type: RESET,
  meta: { scope }
});
