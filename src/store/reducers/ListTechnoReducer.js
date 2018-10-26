import { GET_LIST_TECHNO } from "../actions/actionTypes"



export default function ListTechnoReducer(state = [], action){
  switch(action.type){
    case GET_LIST_TECHNO :
      return action.payload
    default :
      return state
  }
}
