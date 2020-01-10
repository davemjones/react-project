import { combineReducers } from 'redux';
import isEmpty from 'lodash-es/isEmpty';
import set from 'lodash-es/set';
import has from 'lodash-es/has';
import AppReducer from './AppReducer';

/**
 *  makeRootReducer
 *
 *  This function applies any reducers required to manage global
 *  state, ie: user information, app settings etc
 *
 *  It also iterates through the `asyncReducers` object, combining sub-reducers
 *  if they're provided. This allows support for our 2 top level async reducer keys:
 *  { dataLayer: {...dataReducers}, uiLayer: {...uiReducers} }
 */

export const makeRootReducer = (asyncReducers = {}) => {
  const combinedAsyncReducers = {};
  Object.entries(asyncReducers).forEach(([key, value]) => {
    if (typeof value === 'object') {
      combinedAsyncReducers[key] = !isEmpty(value)
        ? combineReducers({ ...value })
        : {};
    }
  });
  return combineReducers({
    app: AppReducer,
    ...combinedAsyncReducers
  });
};

/**
 *  injectReducer
 *
 *  Create the data layer for the view.  This function will receive the reducers
 *  required to render a specific view.  This will be a combination of framework
 *  reducers and app specific reducers.
 *
 *  @param {Object} store                 - the redux store
 *  @param {Object} reducerData           - an object with the reducer and location key
 *  @param {String} reducerData.key       - the location to initialize the reducer within the store
 *                                          can be a nested key (ex: `dataLayer.boards`)
 *  @param {Function} reducerData.reducer - reducer function to inject
 */
export const injectReducer = (store, { key, reducer }) => {
  if (has(store.injectedReducers, key)) return;
  set(store.injectedReducers, key, reducer);
  store.replaceReducer(makeRootReducer(store.injectedReducers));
};

/**
 *  injectDataReducer
 *
 *  Injects reducers specifically into the top level `dataLayer` store slice
 *  To be used with all data related reducers
 *
 *  @param {Object} store                 - the redux store
 *  @param {Object} reducerData           - an object with the reducer and location key
 *  @param {String} reducerData.key       - the location to initialize the reducer within the store
 *  @param {Function} reducerData.reducer - reducer function to inject
 *  @returns {function} - reducer injection function with scoped key argument
 */
export const injectDataReducer = (store, { key, reducer }) =>
  injectReducer(store, { key: `dataLayer.${key}`, reducer });

/**
 *  injectUIReducer
 *
 *  Injects reducers specifically into the top level `uiLayer` store slice
 *  To be used with all UI related reducers
 *
 *  @param {Object} store                 - the redux store
 *  @param {Object} reducerData           - an object with the reducer and location key
 *  @param {String} reducerData.key       - the location to initialize the reducer within the store
 *  @param {Function} reducerData.reducer - reducer function to inject
 *  @returns {function} - reducer injection function with scoped key argument
 */
export const injectUIReducer = (store, { key, reducer }) =>
  injectReducer(store, { key: `uiLayer.${key}`, reducer });
