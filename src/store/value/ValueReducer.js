import { SET_VALUE, RESET_VALUE, CLEAR_VALUE } from './ValueActions';

/**
 * The ValueReducer is a generic bucket to assign any values to. Through the `SET_VALUE`
 * action any value will be set on a key on state.
 *
 * This utility function allows the initialization of a ValueReducer with a default state.
 *
 * @param {object} defaultState - Custom state to initialize reducer
 * @return {function} ValueReducer
 *
 * @example <caption>Initializing ValueReducer</caption>
 * import { combineReducers } from 'redux';
 * import { createScopedReducer } from 'Store/utils';
 * import { ValueReducer, createValueReducer } from 'Store/common/value';
 *
 * const reducer = combineReducers({
 *   defaultState: createScopedReducer(ValueReducer, 'defaultState'),
 *   customState: createScopedReducer(createValueReducer({ greeting: 'Hello' }), 'customState')
 * })
 *
 * // Creates a state:
 * {
 *   defaultState: {} // ValueReducer default state is empty object
 *   customState: { greeting: 'Hello' } // Reducer was created with state
 * }
 */
export const createValueReducer = (defaultState = {}) => (
  state = defaultState,
  action
) => {
  switch (action.type) {
    case SET_VALUE: {
      const { key, value } = action.payload;
      return {
        ...state,
        [key]: value
      };
    }
    case CLEAR_VALUE: {
      const { key } = action.payload;
      return {
        ...state,
        [key]: undefined
      };
    }
    case RESET_VALUE:
      return defaultState;
    default:
      return state;
  }
};

/**
 * Export an initialized ValueReducer. It's state will be an empty object.
 */
export default createValueReducer();
