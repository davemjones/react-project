import { REQUEST, SUCCESS, RESET } from './LoadingActions';

const initialState = {
  isLoading: false,
  data: null,
  timestamp: null
};

/**
 * @todo These docs are outdated
 * Generic reducer to handle loading state and storage of data.
 * Should be used with scoped actions and scoped reducer.
 * @param {object} state - Redux state
 * @param {Action} action - Redux action
 * @return {object}
 * @example <caption>Usage when combining reducers</caption>
 * const MyReducer = combineReducers({
 *   appThings: AppThingsReducer,
 *   asyncThings: createScopedReducer(LoadingReducer, 'asyncThings')
 * });
 * @example <caption>Dispatching scoped actions</caption>
 * dispatch(setLoading(true, 'asyncThings'));
 * ...
 * dispatch(setData(response.data, 'asyncThings'));
 * @example <caption>State</caption>
 * {
 *   appThings: {...},
 *   asyncThings: {
 *     isLoading: false,
 *     data: [...] // Whatever data is loaded
 *   }
 * }
 */
const loadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST:
      return {
        data: null,
        isLoading: true
      };
    case SUCCESS:
      return {
        isLoading: false,
        data: action.payload,
        timestamp: action.meta.timestamp
      };
    case RESET:
      return { ...initialState };
    default:
      return state;
  }
};

export default loadingReducer;
