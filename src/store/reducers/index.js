import { combineReducers } from "redux"

import ChangeNavReducer  from './changeNavReducer'
import NavLinksReducer from './navLinksReducer'

const rootReducer = combineReducers({
  nameNav : ChangeNavReducer,
  navLinks : NavLinksReducer
});

export default rootReducer
