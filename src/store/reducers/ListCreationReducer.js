import { GET_LIST_CREATION  } from "../actions/actionTypes"



export default function ListCreationReducer(state = [], action){
  switch(action.type){
    case GET_LIST_CREATION :
      return action.payload
    default :
      return state
  }
}
