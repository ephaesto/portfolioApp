import { combineReducers } from "redux"

import ChangeNavReducer  from './changeNavReducer'
import NavLinksReducer from './navLinksReducer'
import ListCreation  from './listCreation'
import ListTechno from './listTechno'
import ListCreaToTech from './listCreaToTech'
import { reducer as form} from 'redux-form'

const rootReducer = combineReducers({
  nameNav : ChangeNavReducer,
  navLinks : NavLinksReducer,
  listTechno: ListTechno,
  listCreation: ListCreation,
  listCreaToTech: ListCreaToTech,
  form : form,
});

export default rootReducer
