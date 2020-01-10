import { RESET_ASYNC_ERROR, SET_ASYNC_ERROR } from './AppActions';

const initialState = {
  asyncError: null
};

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ASYNC_ERROR:
      return { ...state, asyncError: action.payload };
    case RESET_ASYNC_ERROR:
      return { ...state, asyncError: null };
    default:
      return state;
  }
};

export default AppReducer;
