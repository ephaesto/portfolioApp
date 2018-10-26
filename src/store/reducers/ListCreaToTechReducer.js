import { GET_LIST_CREA_TO_TECH } from "../actions/actionTypes"



export default function ListCreaToTechReducer(state = [], action){
  switch(action.type){
    case GET_LIST_CREA_TO_TECH :
      return action.payload
    default :
      return state
  }
}
