import {
  applyMiddleware,
  combineReducers,
  compose,
  legacy_createStore as createStore,
} from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./auth/Login/reducer";
import { registerReducer } from "./auth/register/reducer";
import { usersReducer } from "./getUsers/reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  users: usersReducer,
  register: registerReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

export const store = createStore(rootReducer, enhancer);
