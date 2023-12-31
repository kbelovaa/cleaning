import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import cleaningReducer from './reducers/cleaningReducer';
import userReducer from './reducers/userReducer';

const rootReducer = combineReducers({
  cleaning: cleaningReducer,
  user: userReducer,
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
