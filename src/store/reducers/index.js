import { combineReducers } from "redux"

import ChangeNavReducer  from './changeNavReducer'
import NavLinksReducer from './navLinksReducer'
import ListCreation  from './listCreation'
import ListTechno from './listTechno'
import ListCreaToTech from './listCreaToTech'

const rootReducer = combineReducers({
  nameNav : ChangeNavReducer,
  navLinks : NavLinksReducer,
  listTechno: ListTechno,
  listCreation: ListCreation,
  listCreaToTech: ListCreaToTech
});

export default rootReducer
