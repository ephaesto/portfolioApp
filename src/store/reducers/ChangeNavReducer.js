import { SET_NAV_ENVIRONMENT } from "../actions/actionTypes"

const initialState = "current"

export default function ChangeNavReducer (state = initialState, action){
  switch(action.type){
    case SET_NAV_ENVIRONMENT :
      return action.payload
    default :
      return state
  }
}
