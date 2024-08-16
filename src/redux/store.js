import { createStore } from 'redux';
import todoReducer from '../redux/reducers';
import { composeWithDevTools } from '@redux-devtools/extension';
import { saveState, loadState } from './localStorageUtils';

const initialState = loadState(); // Load initial state from local storage

const store = createStore(
  todoReducer,
  initialState,
  composeWithDevTools()
);

// Subscribe to store changes to save state to local storage
store.subscribe(() => {
  saveState(store.getState());
});

export default store;
