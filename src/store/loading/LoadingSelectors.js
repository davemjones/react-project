/**
 * Get if data is loading
 * @param {object} state - Scoped state slice
 * @return {boolean}
 */
export const getLoading = state => state.isLoading;

/**
 * Get data that was stored with `setData`
 * @param {object} state - Scoped state slice
 * @return {any}
 */
export const getData = state => state.data;

/**
 * When a request is successful, the time of the request is added to the store
 * in ISO format.
 * @param {object} state - Scoped state slice
 * @return {string}
 */
export const getTimestamp = state => state.timestamp;
