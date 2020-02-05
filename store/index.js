import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import home from '../pages/index/store';
import user from './user';

const reducers = combineReducers({
  home, user
})

export default function initializeStore(initialState) {
  const store = createStore(
    reducers, 
    initialState,
    composeWithDevTools(applyMiddleware(ReduxThunk))
  )
  return store;
}
