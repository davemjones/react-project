export const SET_VALUE = 'SET_VALUE';
export const CLEAR_VALUE = 'CLEAR_VALUE';
export const RESET_VALUE = 'RESET_VALUE';

/**
 * Set any value on the state
 * @param {string} key - Name of property to set on state
 * @param {*} value - Any value to set
 * @param {string} scope - Path for ValueReducer
 * @return {object} Action
 */
export const setValue = (key, value, scope) => ({
  type: SET_VALUE,
  payload: { key, value },
  meta: { scope }
});

/**
 * Clear a value set on state
 * @param {string} key - Name of property to clear from state
 * @param {string} scope - Path for ValueReducer
 * @return {object} Action
 */
export const clearValue = (key, scope) => ({
  type: CLEAR_VALUE,
  payload: { key },
  meta: { scope }
});

/**
 * Reset state to the initialState
 * @param {string} scope - Path for ValueReducer
 * @return {object} Action
 */
export const resetValues = scope => ({
  type: RESET_VALUE,
  meta: { scope }
});
