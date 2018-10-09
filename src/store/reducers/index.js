import { combineReducers } from "redux";
import NavLinksReducer from './navLinksReducer';
const rootReducer = combineReducers({
  navLinks : NavLinksReducer,
});

export default rootReducer;
