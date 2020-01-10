const BASE_ACTION = 'APP/';
export const RESET_ASYNC_ERROR = `${BASE_ACTION}RESET_ASYNC_ERROR`;
export const SET_ASYNC_ERROR = `${BASE_ACTION}SET_ASYNC_ERROR`;

/**
 * Create an action to reset the global asyncError state in store
 * @param {object} error - Async request error
 * @return {object} Redux action
 */
export const resetAsyncError = () => ({
  type: RESET_ASYNC_ERROR
});

/**
 * Create an action for a global error while making an async request
 * @param {object} error - Async request error
 * @return {object} Redux action
 */
export const setAsyncError = error => ({
  type: SET_ASYNC_ERROR,
  payload: error
});
