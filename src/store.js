import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducers from './reducers'
import todoReducers from './reducers/todoReducers';
const store = createStore(todoReducers, composeWithDevTools())
export default store;