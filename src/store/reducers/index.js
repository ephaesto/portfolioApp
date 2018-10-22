import { combineReducers } from "redux"

import ChangeNavReducer  from './ChangeNavReducer'
import NavLinksReducer from './NavLinksReducer'
import ListCreationReducer  from './ListCreationReducer'
import ListTechnoReducer from './ListTechnoReducer'
import ListCreaToTechReducer from './ListCreaToTechReducer'
import AccueilReducer from './AccueilReducer'
import { reducer as form} from 'redux-form'

const rootReducer = combineReducers({
  nameNav : ChangeNavReducer,
  navLinks : NavLinksReducer,
  listTechno: ListTechnoReducer,
  listCreation: ListCreationReducer,
  listCreaToTech: ListCreaToTechReducer,
  AccueilValue:AccueilReducer,
  form : form,
});

export default rootReducer
