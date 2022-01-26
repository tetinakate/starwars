import { configureStore } from '@reduxjs/toolkit';
// import { applyMiddleware, createStore } from 'redux'
// import { composeWithDevTools } from 'redux-devtools-extension'
// import thunkMiddleware from 'redux-thunk'
//import { reducer } from './reducers'

// const middlewares = [loggerMiddleware, thunkMiddleware]
// const middlewareEnhancer = applyMiddleware(...middlewares)

// const enhancers = [middlewareEnhancer, monitorReducersEnhancer]
// const composedEnhancers = composeWithDevTools(...enhancers)

//const store = configureStore(reducer)
//const store = configureStore(reducer)

import counterReducer from '../counter/counterSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});