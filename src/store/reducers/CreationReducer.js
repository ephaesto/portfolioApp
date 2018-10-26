import { GET_CREATION  } from "../actions/actionTypes"

const initialState = {
  title:"",
  name:"",
  text:"",
  listTechno:null,
  link:null,
  git:null
}

export default function ListCreationReducer(state = initialState, action){
  switch(action.type){
    case GET_CREATION  :
      return action.payload
    default :
      return state
  }
}
