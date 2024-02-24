import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import cleaningReducer from './reducers/cleaningReducer';
import userReducer from './reducers/userReducer';
import servicesReducer from './reducers/servicesReducer';
import ordersReducer from './reducers/ordersReducer';

const rootReducer = combineReducers({
  cleaning: cleaningReducer,
  user: userReducer,
  services: servicesReducer,
  orders: ordersReducer,
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
