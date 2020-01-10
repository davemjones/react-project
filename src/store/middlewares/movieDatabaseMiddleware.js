import { RSAA, isRSAA } from "redux-api-middleware";

/**
 * Middleware creator to add the full URL to a RSAA action
 * @param {string} base - The base url for the RSAA request
 * @return {function} Configured middleware
 * @example
 * applyMiddleware(baseUrlMiddleware('http://localhost:4001'))
 */
const movieDatabaseMiddleware = base => () => next => action => {
  if (isRSAA(action)) {
    const endpointArray = String(action[RSAA].endpoint).split("?");
    return next({
      ...action,
      [RSAA]: {
        ...action[RSAA],
        endpoint: `${base}${
          endpointArray[0]
        }?api_key=633e3a7f8d1fa4aef7b6ecafd00fae5d${
          endpointArray.length > 1 ? `&${endpointArray[1]}` : ""
        }`
      }
    });
  }

  return next(action);
};

export default movieDatabaseMiddleware;
