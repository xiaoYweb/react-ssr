import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import home from '../pages/index/store';
import user from './user';
import { fn } from 'moment';

const queue = {
  home, user
}
// console.log("TCL: queue", queue)


const modules = { type: {}, reducer: {}, action: {} };

Object.entries(queue).forEach(([moduleKey, moduleItem]) => {
  Object.keys(modules).forEach(key => {
    modules[key][moduleKey] = moduleItem[key]
  })
})

// console.log("TCL: modules", modules)
// const modules = {
//   type: {
//     home: {},
//     user: {}
//   },
//   action: {
//     home: {},
//     user: {}
//   },
//   reducer: {
//     home: fn,
//     user: fn
//   }
// }

const reducers = combineReducers({
  ...modules.reducer
})

export default function initializeStore(initialState) {
  const store = createStore(
    reducers, 
    initialState,
    composeWithDevTools(applyMiddleware(ReduxThunk))
  )
  return store;
}

export const type = modules.type;

export const action = modules.action;