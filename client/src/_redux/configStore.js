/* this shit looks so deprecated. This _redux folder simply contains our 
redux store. Looks so different from TM's store */

import { compose, applyMiddleware } from "redux"; // createStore (FROM REDUX) IS DEPRECATED
import { configureStore } from '@reduxjs/toolkit';

import promiseMiddleware from "redux-promise";
import reduxThunk from "redux-thunk";
import rootReducer from "../_reducers";

const composeEnhancers =
  process.env.NODE_ENV !== "production" &&
  typeof window === "object" &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        shouldHotREload: false,
      })
    : compose;
// const configureStore = () => { ORIGINAL
const configStore = () => {
  const store = configureStore(
    rootReducer,
    {},
    composeEnhancers(applyMiddleware(promiseMiddleware, reduxThunk))
  );
  return store;
};

export default configStore;
//  WHERE IS THIS IMPORTED?