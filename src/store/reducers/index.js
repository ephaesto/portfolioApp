import { combineReducers } from "redux"

import ChangeNavReducer  from './changeNavReducer'
import NavLinksReducer from './navLinksReducer'
import ListCreation  from './listCreation'
import ListTechno from './listTechno'

const rootReducer = combineReducers({
  nameNav : ChangeNavReducer,
  navLinks : NavLinksReducer,
  listTechno: ListTechno,
  listCreation: ListCreation
});

export default rootReducer
